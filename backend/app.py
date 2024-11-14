from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text, DateTime
from datetime import datetime, timedelta
from dotenv import load_dotenv
from flask_cors import CORS
import os

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define a test route to check database connection
@app.route('/test-db-connection')
def test_db_connection():
    try:
        # Execute a simple query wrapped in text()
        result = db.session.execute(text('SELECT 1')).scalar()
        return jsonify({"message": "Database connection successful", "result": result}), 200
    except Exception as e:
        return jsonify({"message": "Database connection failed", "error": str(e)}), 500

# Model for storing hours tracking entries in the database
class HoursTracking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String(255), nullable=False)
    job_description = db.Column(db.String(255), nullable=False)
    start_time = db.Column(DateTime, nullable=False) 
    end_time = db.Column(DateTime, nullable=False) 

# Define the Venue model
class Venue(db.Model):
    __tablename__ = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Venue {self.name}>'

# Endpoint to add new hour entry
@app.route('/api/hours', methods=['POST'])
def add_hours():
    data = request.json
    date_str = data['date']
    start_time_str = data['startTime']
    end_time_str = data['endTime']

    # Parse the date and time from the strings
    date = datetime.strptime(date_str, '%Y-%m-%d').date()
    start_time = datetime.strptime(start_time_str, '%H:%M').time()
    end_time = datetime.strptime(end_time_str, '%H:%M').time()

    # Combine date and time for start_time
    start_datetime = datetime.combine(date, start_time)

    # Combine date and time for end_time
    # If end_time is before start_time, assume it’s the next day
    if end_time < start_time:
        end_datetime = datetime.combine(date + timedelta(days=1), end_time)
    else:
        end_datetime = datetime.combine(date, end_time)

    # Create the new record
    new_record = HoursTracking(
        location=data['location'],
        job_description=data['jobDescription'],
        start_time=start_datetime,
        end_time=end_datetime
    )
    
    db.session.add(new_record)
    db.session.commit()
    
    return jsonify({"message": "Hours recorded successfully"}), 201


# Endpoint to add a new venue
@app.route('/api/venues', methods=['POST'])
def add_venue():
    data = request.get_json()
    if 'name' not in data:
        return jsonify({"error": "Venue name is required"}), 400
    
    new_venue = Venue(name=data['name'])
    db.session.add(new_venue)
    db.session.commit()
    return jsonify({"message": "Venue added successfully", "venue": {"id": new_venue.id, "name": new_venue.name}}), 201

# Endpoint to get all venues
@app.route('/api/venues', methods=['GET'])
def get_venues():
    venues = Venue.query.all()
    return jsonify([{"id": venue.id, "name": venue.name} for venue in venues])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)

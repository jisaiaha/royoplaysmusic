from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import text
from dotenv import load_dotenv
import os

# Load environment variables from the .env file
load_dotenv()

app = Flask(__name__)
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

# Define the Venue model
class Venue(db.Model):
    __tablename__ = 'venues'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Venue {self.name}>'

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

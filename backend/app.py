from flask import Flask, jsonify
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

if __name__ == '__main__':
    app.run(debug=True)

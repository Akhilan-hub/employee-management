from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["employeeDB"]
collection = db["employees"]

# Get all employees
@app.route("/employees", methods=["GET"])
def get_employees():
    employees = list(collection.find({}, {"_id": 0}))
    return jsonify(employees)

# Add a new employee
@app.route("/employees", methods=["POST"])
def add_employee():
    data = request.json
    collection.insert_one(data)
    return jsonify({"message": "Employee added successfully"})

if __name__ == "__main__":
    app.run(debug=True)

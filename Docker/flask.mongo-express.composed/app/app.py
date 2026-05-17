from flask import Flask 
from pymongo import MongoClient 
import os 

app = Flask(__name__)

# url
mongo_url = os.getenv("MONGO_URL")
client = MongoClient(mongo_url)

# creating a new database
db = client["users_db"]
collection = db["users"]

# route
@app.route('/')
def home():
  collection.insert_one({"name": "alaa"})
  return "entry inserted"

# list users
@app.route('/users')
def get_users():
  users = list(collection.find({}, {"_id": 0}))
  return {"users": users}

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)

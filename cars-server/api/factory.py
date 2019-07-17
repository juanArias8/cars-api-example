from flask import Flask
from flask_pymongo import PyMongo
from flask_restful import Api

from api.controller.car import Car
from api.controller.car import CarList

app = Flask(__name__)

# Configure database
app.config["MONGO_URI"] = "mongodb://localhost:27017/Cars"
app.database = PyMongo(app)
app.cars_collection = app.database.db.cars

# Create api
api = Api(app)


api.add_resource(Car, '/car', '/car/<car_id>',
                 methods=['GET', 'POST', 'PUT', 'DELETE'])

api.add_resource(CarList, '/cars',
                 methods=['GET'])

from pymongo import MongoClient

"""
first start server with terminal window and enter the following:
mongod --dbpath ~/mongodb/data/db
when you are ready to close the server, type ctrl+c in the same terminal window
"""


client = MongoClient("localhost", 27017)

db = client.neuraldb

people = db.people

people.insert_one({"name": "Mike", "age": 30})
people.insert_one({"name": "Ben"})

for person in people.find():
    print(person)
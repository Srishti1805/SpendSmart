db = db.getSiblingDB('spendSmart')

// Create a collection for users
db.createCollection('users')
// users collection
listsCollection = db.getCollection("users")
// remove existing data
listsCollection.remove({})

// create new data for users
// Insert 10 users into the users collection
for (var i = 0; i < 10; i++) {
    db.users.insert({
        fname: "First" + (i + 1),
        lname: "Last" + (i + 1),
        email: "user" + (i + 1) + "@example.com",
        password: "password" + (i + 1)
    });
}

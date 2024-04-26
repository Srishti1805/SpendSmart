db = db.getSiblingDB('spendSmart')

// Create a collection for users
db.createCollection('users')
// users collection
usersCollection = db.getCollection("users")
// remove existing data
usersCollection.remove({})

// create new data for users
// Insert 10 users into the users collection
for (var i = 0; i < 10; i++) {
    usersCollection.insert({
        fname: "First" + (i + 1),
        lname: "Last" + (i + 1),
        email: "user" + (i + 1) + "@example.com",
        password: "password" + (i + 1)
    });
}

// Create a collection for category
db.createCollection('category')
// category collection
categoryCollection = db.getCollection("category")
// remove existing data
categoryCollection.remove({})

// create new data for category
// Insert 5 users into the users collection
categoryCollection.insert(
{
    userId: 'user1',
    name: 'category 1',
    description: 'description 1'
}
)

categoryCollection.insert(
{
    userId: 'user1',
    name: 'category 2',
    description: 'description 2'
}
)

categoryCollection.insert(
{
    userId: 'user1',
    name: 'category 3',
    description: 'description 3'
}
)

categoryCollection.insert(
{
    userId: 'user1',
    name: 'category 4',
    description: 'description 4'
}
)

categoryCollection.insert(
{
    userId: 'user1',
    name: 'category 5',
    description: 'description 5'
}
)



// Create a collection for budget
db.createCollection('budget')
// budget collection
budgetCollection = db.getCollection("budget")
// remove existing data
budgetCollection.remove({})

// create new data for budget for expense
budgetCollection.insert(
{
    userId : "user1",
    categoryId: "category 1",
    type : "EXPENSE",
    amount : "1000",
    date : Date().now(),
    note : "rent";
}
)

// create new data for budget for income
budgetCollection.insert(
{
    userId : "user1",
    categoryId: "category 2",
    type : "INCOME",
    amount : "2000",
    date : Date().now(),
    note : "Freelancing";
}
)

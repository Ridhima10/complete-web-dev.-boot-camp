use("crudDb")
use("RecordsDB")

// console.log(db)


// CREATE
db.createCollection("courses")
db.courses.insertOne({
    name: "Ridhi",
    age: 23,
    ownerAddress: "Chandigarh"
})

db.RecordsDB.insertMany([{
    name: "Marsh",
    age: "6 years",
    species: "Dog",
    ownerAddress: "380 W. Fir Ave",
    chipped: true
},
{
    name: "Kitana",
    age: "5 years",
    species: "Dog",
    ownerAddress: "521 E. Cortland",
    chipped: true
},
{
    name: "Kitana",
    age: "4 years",
    species: "Cat",
    ownerAddress: "521 E. Cortland",
    chipped: true
}])


//READ
// let a = db.courses.find({ age: 23 })
// console.log(a.count())
// let b = db.courses.findOne({ age: 23 })
// console.log(b)


// UPDATE
// db.courses.updateOne({ age: 23 },{$set:{age:22}})
// db.RecordsDB.updateMany({species:"Dog"}, {$set: {species: "Monkey"}})


// DELETE
db.courses.deleteMany({ age: 23 })
// db.courses.deleteOne({ age: 23 })
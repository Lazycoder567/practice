const mongoose = require("mongoose");
const { prependOnceListener } = require("process");

mongoose.connect("mongodb://localhost/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: { type: String, required: [true, "i require a name"] },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 10,
//   review: "lovely peach",
// });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "mango",
  score: 6,
  review: "tastes like mango",
});
mango.save();

Person.update({ name: "John" }, { favoriteFruit: mango }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("mango added");
  }
});

// const person = new Person({
//   name: "John",
//   age: 15,
//   favoriteFruit: mango,
// });
// person.save();

// const banana = new Fruit({
//   name: "banana",
//   score: 9,
//   review: "simple but great",
// });

// Fruit.insertMany([orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("all fruits added");
//   }
// });

Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne(
//   { _id: "5f62e6f84f38703a0894b628" },
//   { name: "Peach" },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("successfully logged update");
//     }
//   }
// );

// Fruit.deleteOne({ _id: "5f61a7f11b1991034c37cebe" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Fruits has been deleted");
//   }
// });

Person.deleteMany({ name: "John" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("john is now gone");
  }
});

//person.save();
//fruit.save();

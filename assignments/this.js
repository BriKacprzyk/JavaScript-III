/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - When using this the value of "this" becomes the consoles object.
* 2. Implicit Binding - When a function is called with a dot in front of it the object in front of the dot becomes "this".
* 3. New Binding - When using a constructor function "this" refers to the specific object that is created and returned in the function.
* 4. Explicit Binding - When using the methods "call" or "apply" "this" is defined explicitly.
*
* write out a code example of each explanation above
*/

// Principle 1

function favFruit(fruit) {
  console.log(this);
  return fruit;
}
favFruit("Banana");

// code example for Window Binding

// Principle 2

const favoriteFruity = {
  fruit: 'Granny smith apples',
  yummy: function(name) {
    console.log(`${this.fruit} are ${name}'s favorite fruit`);
    console.log(this);
  }
};
favoriteFruity.yummy('Bridget');
// code example for Implicit Binding

// Principle 3

function favoriteFruit(fruit) {
  this.sentence = ' are the best fruit!';
  this.fruit = fruit;
  this.speak = function() {
    console.log(this.fruit + this.sentence);
    console.log(this);
  };
}

const bananas = new favoriteFruit('Bananas');
const apples = new favoriteFruit('Apples');

bananas.speak();
apples.speak();

// code example for New Binding

// Principle 4 // What is the difference between call and apply?

function favorFruit(fruit) {
  this.sentence = ' are the best fruit!';
  this.fruit = fruit;
  this.speak = function() {
    console.log(this.fruit + this.sentence);
    console.log(this);
  };
}

const pineapple = new favorFruit('Pineapples');
const watermellon = new favorFruit('Watermellons')

bananas.speak();
apples.speak();

bananas.speak.call(pineapple); 
apples.speak.apply(watermellon);

// code example for Explicit Binding
// import logo from './logo.svg';
import './App.css';



//Using ES6 and JSX
//Bai 1
console.error("Bai 1")
var people = [
  {name: 'Jack', age: 50},
  {name: 'Michael', age: 9}, 
  {name: 'John', age: 40}, 
  {name: 'Ann', age: 19}, 
  {name: 'Elisabeth', age: 16}
]
// Find the first person off the people array is teenager (age >=10 and age <=20)
const q1 = people.find(person => person.age >= 10 && person.age <= 20)
// Find the all person of the people array is teenager (age >=10 and age <=20)
const q2 = people.filter(person => person.age >= 10 && person.age <= 20)
// Check if every person of the people array is teenager (age >=10 and age <=20), which should return true or false
const q3 = people.every(person => person.age >= 10 && person.age <= 20)
// Checks if any person of the people array is teenager (age >=10 and age <=20), which should return true or false.
const q4 = people.some(person => person.age >= 10 && person.age <= 20)
console.log("First person off the people array is teenager: ", q1)
console.log("All person of the people array is teenager: ", q2)
console.log("Are all teenagers? ", q3)
console.log("Is any teenager? ", q4)



//Bai 2
console.error("Bai 2")
var array = [1, 2, 3, 4]
//Applies a function passed as the first parameter against an accumulator and each element in the array (from left to right), thus reducing it to a single value. The initial value of the accumulator should be provided as the second parameter of the reduce function.
//Implementation of very simple functions (like the aforementioned sum or product) requires writing a lot of boilerplate. Is there any remedy for that? just try arrow functions!
const sum = array.reduce((acc, value) => acc + value, 0)
console.log("Sum of array: ", sum)



//Bai 3
console.error("Bai 3")
const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Print the name of each company using forEach
console.warn("Q1")
companies.forEach(c => {
  console.log(c.name)
})

// Print the name of each company that started after 1987
console.warn("Q2")
companies.forEach(c => c.start > 1987 ? console.log(c.name):'')

// Get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, the start and the end in paragraphs elements
console.warn("Q3")
const retailCompanies = companies.filter(c => c.category === 'Retail').map(c => {
  //c.start += 1
  return c
})
console.log(retailCompanies)

// Sort the companies based on their end date in ascending order
console.warn("Q4")
const sortCompanies = companies.sort((a, b) => a.end - b.end)
console.log(sortCompanies)

// Sort the ages array in descending order
console.warn("Q5")
const sortAges = ages.sort((a, b) => b - a)
console.log(sortAges)

// Print the sum if you add all the ages using reduce
console.warn("Q6") 
const sumAges = ages.reduce((acc, age) => acc + age, 0)
console.log("Sum of ages:", sumAges)

//	Make a new object that has the properties of name and category same as the companies [0] and a method print that prints out the name, use object restructuring and ES6 JS
console.warn("Q7")
const {name, category} = companies[0]
const newObject = {name, category, print() {console.log(this.name)}}
newObject.print()

// Create a function that takes an unknown number of arguments that are numbers and return their sum
console.warn("Q8")
function sumNumbers(...args) {
  return args.reduce((acc, arg) => acc + arg, 0)
}
console.log(sumNumbers(1, 2, 3, 4, 5, 6))

// Make a function that takes an unknown number of arguments of any type and adds them in an array and returns the array, if the argument is an array, it should add its values to the array that will be returned by the function
console.warn("Q9")
function addArray(...args) {
  let arr = []
  args.forEach(arg => {
    if (Array.isArray(arg)) {
      arr = arr.concat(arg)
    } else {
      arr.push(arg)
    }
  })
  return arr
}
console.log(addArray(1, 2, 3, [4, 5, 6], 5, 10, 9))
const result = addArray(1, 2, [3, 4], 5, [6, 7])
console.log(result)

// Destructuring the property street in a variable named street from the object person
console.warn("Q10")
const {address: {street}} = person
console.log(street)

// Write a function that every time you call it, it returns a number that increments starting from 0
console.warn("Q11")
function increment() {
  let count = 0
  return function() {
    return count++
  }
}
const incrementing = increment()
console.log(incrementing())
console.log(incrementing())
console.log(incrementing())

// Create a function that destructors the query parameters of a URL and adds them in an object as key value pairs and then returns the object
console.warn("Q12")
function getQueryParams(url) {
  const params = url.split('?')[1]
  const queryParams = {}
  params.split('&').forEach(param => {
    const [key, value] = param.split('=')
    queryParams[key] = value
  })
  return queryParams
}
console.log(getQueryParams('http://www.abcd.com/page?name=Thach&surname=Nhat&age=20'))



//Bai 4
console.error("Bai 4")
class Shape {
  constructor(color) {
    this.color = color
  }

  getArea() {
    throw new Error('getArea() is not implemented in the base Shape class')
  }

  toString() {
    return `Shape with color: ${this.color}`
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color)
    this.length = length
    this.width = width
  }

  getArea() {
    return this.length * this.width
  }

  toString() {
    return `Rectangle with color: ${this.color}, length: ${this.length}, width: ${this.width}`
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color)
    this.base = base
    this.height = height
  }

  getArea() {
    return (this.base * this.height) / 2
  }

  toString() {
    return `Triangle with color: ${this.color}, base: ${this.base}, height: ${this.height}`
  }
}
//test
const redRectangle = new Rectangle('yellow', 5, 10)
console.log(redRectangle.toString())
console.log(redRectangle.getArea())
const blueTriangle = new Triangle('blue', 4, 6)
console.log(blueTriangle.toString())
console.log(blueTriangle.getArea())







function App() {
  return (
    <></>
  );
}

export default App;

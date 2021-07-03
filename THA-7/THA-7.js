//Q1
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }
console.log(Object.keys(student))

//Q2
delete student.rollno
console.log(student)

//Q3
var student1 = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
var count=0;
for (var prop in student1) {
  count++;
}

console.log(count)

//Q4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Yes, you have already read " + book);
    } else
    {
     console.log("and you Still need to read " + book);
    }
   }

   //Q5
function Cylinder(h, d) {
  this.h = h;
  this.d = d;
}

Cylinder.prototype.Volume = function () {
  var r = this.d / 2;
  return this.h * Math.PI * r * r;
};

var c = new Cylinder(90, 880);
console.log('volume =', c.Volume().toFixed(4));

//6
var library1 = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }]; 
function sort(a,b) 
 {
  if (a.title < b.title)
    return -1;
  if (a.title > b.title)
    return 1;
  return 0;
 }

console.log(library.sort(sort));
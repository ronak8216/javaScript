 console.log('hello world');

 var myName = 'Ronak Garala';
 var myAge = 21;

 console.log(myage);
 console.log(myName);

 console.log("Ronak " - "Garala");

 console.log(155 + 120);

 console.log(125 / 5);
 console.log(28 * 99);
 console.log(11 + 22);
 console.log(50 - 44);
 console.log(24 % 4);


 console.log(10 + "20");
 console.log("Java " + "Script" + "java Language");
 console.log(" " + 0);

 var num = 15;
 console.log(num);
 var newNumber = --num + 100;
 console.log(newNum);

 console.log(true);
 console.log(false);

 console.log("Hello and Welcome to my new javascript file");

 console.log("hello " + "welcome");

 var myName = "Ronak ";

 console.log(myName + " Garala");

 console.log(5 + "abcd");

 console.log(19 ** 2);

 var num1 = 200;
 var num2 = '200';


 console.log(num1 == num2);


 console.log(typeof(num1));
 console.log(typeof(num2));


 var num1 = 5;
 var num2 = '5';

 console.log(typeof(num1));
 console.log(typeof(num2));
 console.log(num2);

 console.log(num1 === num2);

 var tomr = 'rain';

 if (tomr == 'rain') {
     console.log('take a raincoat');
 } else {
     console.log('No need to take a raincoat');
 }

 var year = 2020;
 if (year % 4 === 0) {
     if (year % 100 === 0) {
         if (year % 400 === 0) {
             console.log(" year " + year + " is a leap year");
         } else {
             console.log(" year " + year + " is not a leap year");
         }
     } else {
         console.log(" year " + year + " is a leap year");
     }
 } else {
     console.log(" year " + year + " is not a leap year");
 }

 var age = 17;
 if (age >= 18) {
     console.log("you can vote");
 } else {
     console.log("you cannot vote");
 }


 switch (area) {
     case 'circle':
         console.log("the area of the circle is : " + PI * r ** 2);
         break;

     case 'triangle':
         console.log("the area of the triangle is : " + (l * b) / 2);
         break;

     case 'rectangle':
         console.log("the area of the rectangle is : " + (l * b));
         break;

     default:
         console.log("please enter valid data");
 }

 for (var num = 1; num <= 10; num++) {
     var tableOf = 12;
     console.log(tableOf + " * " + num + " = " + tableOf * num);
 }


 function sum() {
     var a = 10,
         b = 40;
     var total = a + b;
     console.log(total);
 }

 function sum(a, b) {
     var total = a + b;
     console.log(total);
 }

 sum(20, 30);



 var myName = "RonakGarala";
 console.log(myName);

 let myName = "Garala";
 console.log(myName);

 myName = "RonakGarala";
 console.log(myName);


 const myName = "RonakGarala";
 console.log(myName);

 myName = "RonakGarala";
 console.log(myName);


 const sum1 = () => `the sum of the two number is ${(a=5)+(b=6)}`;

 console.log(sum1());

 const colors = ['Red', 'Green', 'Pink'];
 const isPresent = colors.includes('purple');
 console.log(isPresent);

 var myFriends = ['a', 'b', 'c', 'd'];

 console.log(myFriends.length);


 for (let elements of myFriends) {
     console.log(elements);
 }

 var myFriends = ['a', 'b', 'c', 'd'];

 myFriends.forEach(function(element, index, array) {
     console.log(element + " index : " +
         index + " " + array);
 });

 myFriends.forEach((element, index, array) => {
     console.log(element + " index : " +
         index + " " + array);
 });


 var myFriendNames = ["a", "b", "c", "d"];

 console.log(myFriendNames.includes("e"));


 const room = [200, 300, 350, 400, 450, 500, 600];

 const newTag = room.filter((elem, index) => {
     return elem > 500;
 })
 console.log(newPriceTag);

 const months = ['March', 'Nov', 'Jan', 'Feb', 'April', 'Dec'];

 console.log(months.sort());

 const array1 = [1, 30, 4, 21, 100000, 99];
 console.log(array1.sort());
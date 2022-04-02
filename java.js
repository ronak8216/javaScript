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


 function sum(a,b){
   var total = a+b;
  console.log(total);
 }

 var funExp = sum(5,15);
console.log(funExp);


 var funExp = function(a,b){
   return total = a+b;
 }

 var sum = funExp(15,15);
 var sum1 = funExp(20,15);

console.log(sum>sum1);

var myName = "Ronak Garala";
 console.log(myName);

 myName = "Garala Ronak";
 console.log(myName);

 let myName = "Ronak Garala";
 console.log(myName);

 myName = "Garala Ronak";
 console.log(myName);

 const myName = "Garala Ronak";
 console.log(myName);

 myName = "Garala Ronak";
 console.log(myName);



 function biodata() {
   const myFirstName = "Garala Ronak";
   console.log(myFirstName);

   if(true){
     const myLastName = "Ronak";
   }

 console.log('innerOuter ' + myLastName);
}
 console.log(myFirstName);

 biodata();

//for table

for(let num = 1; num<= 10; num++){
     let tableOf = 12;  
 console.log(tableOf + " * " + num + " = " + tableOf * num);
 console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );

 
 function mult(a,b=5){
   return a*b;
}
 console.log(mult(3));

 const myBioData = ['Garala', 'Ronak', 26];

  let myFName = myBioData[0];
  
 let myLName = myBioData[1];
   let myAge = myBioData[2];
   let [myFName,myAge, myLName] = myBioData;
 console.log(myAge);
 
 const myBioData = {
    myFname : 'Ronak',
     myLname : 'Garala',
     myAge : 26
   }

  let age = myBioData.age;
   let myFname = myBioData.myFname;

  let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
   console.log(myLname);
 
 
  let myName = "Ronak Garala";
       const myBio = {
         [myName] : "hello how are you?",
         [20 + 6] : "is my age"
      }

       console.log(myBio);";
       const myBio = {
         [myName] : "hello how are you?",
         [20 + 6] : "is my age"
       }

      console.log(myBio);
 
  let myName = "Ronak Garala";
   let myAge = 26;

   const myBio = {myName,myAge}

  console.log(myBio);

 console.log(sum()); 

 function sum() {
   let a = 5; b = 6;
   let sum = a+b;
  return `the sum of the two number is ${sum}`;
 }
 
  const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

 console.log(sum());
 
 const colors = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = colors.includes('purple');
 console.log(isPresent);
 
 console.log(2**3)
 console.log(Math.pow(2,3));
 
 
 const message = "my name is invalid ??";
console.log(message);
 console.log(message.padStart(5));
 console.log(message.padEnd(10));
 
 const person = { name: 'Friend', age: 22 };

 console.log( Object.values(person) );
 const ar =  Object.entries(person);
 console.log(Object.fromEntries(ar));
 
  var myarray = ['ronak',21,male,'virat',34,male,'anushka',true, 52];
 console.log(myarray[myarray.length - 1]);
 console.log(myarray[myarray.length);
 
 var myarray = ['ronak',21,male,'virat',34,male,'anushka',true, 52];
 for(var i=0; i<myarray.length; i++){
   console.log(myarray[i]);
 }
 
 for(let elements in myarray){
   console.log(elements);
 }
 
 
 myarray.forEach(function(element, index, array) {
       console.log(element + " index : " +
         index + " " + array);
 });
 
 myarray.forEach((element, index, array) => {
  console.log(element + " index : " +
     index + " " + array);
  
 }
                 
   console.log(myarray.indexOf("male", 3));
 
 
 console.log(myarray.lastIndexOf("male", 3));
 
 console.log(myFriendNames.includes("ronak"));
 
 const price=[1,2,3,4,5];
 const ele=price.find((current)=>current>4);
 console.log(ele);
 
 
 const newPriceTag = price.filter((elem, index) => {
   return elem > 4;
 })
 console.log(newPriceTag);
 
 console.log(price.sort());
 
 var fruits = ["Banana", "Orange", "Apple", "Mango"];

 let aFruits = fruits.sort();
 
 fruits.push("juis");
 fruits.unshift("gwawa");
 console.log(fruits);
 
 
 const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
 console.log(plants);
 console.log(plants.pop());
 console.log(plants);
console.log(plants.shift());
 
 
 const arr = [
       ['a_1', 'a_2'],
         ['a_3', 'a_4'],
         ['a_5', 'a_6'],
         ['a_7', ['a_7', ['a_7', 'a_8']]]
     ];

 let f = arr.reduce((accum, currVal)  => { 
           return accum.concat(currVal);
 })

 console.log(arr.flat(Infinity));

 console.log(f);



 const myname =  'I am Ronak';
 console.log(myname.lastIndexOf("R"));


 var str = ["Apple, Bananaa, Kiwi, mango"];

 let res = str.slice(0,7);
 console.log(res);
 let res = str.slice(3);
 console.log(res);

 var str = "Apple, Bananaa, Kiwi";
 let res = str.substring(str.length()-1,-2);
 console.log(res);


let name = "virat kohli";

 console.log(name.charAt(9));
 console.log(name.toUpperCase()); 
 console.log(name.toLowerCase());

 var stringg = "              Hello         welcome   guys!            ";
 console.log(string.trim());

 let todaysDate = new Date(); 
 console.log(todaysdate);

 console.log(new Date());
 console.log(new Date().toLocaleString()); 
 console.log(new Date().toString()); 

 console.log(Date.now());


 console.log(todaysDate.toLocaleString());
 console.log(todaysDate.getFullYear());
 console.log(todaysDate.getMonth());
 console.log(todaysDate.getDate());
 console.log(todaysDate.getDay());

 const currTime = new Date();

 console.log(currTime.getTime());
 console.log(currTime.getMinutes());
 console.log(currTime.getSeconds());
 console.log(currTime.getMilliseconds());



//About MAth Functin like Round,pow,etc................................//

 console.log(Math.PI);

 let s = 55.531;
 console.log(Math.round(s));


 console.log(Math.pow(2,3));
 console.log(2**3);


 console.log(Math.sqrt(25));
 console.log(Math.abs(-2));
 console.log(Math.abs(4-23));

 console.log(Math.round(6.1));

 console.log(Math.floor(49.1)); 

 console.log(Math.min(12220, 1500, 302, 120, -82, -2002));


 console.log(Math.max(12220, 1500, 302, 120, -82, -2002));

 console.log(Math.floor(Math.random()*10));


 console.log(Math.trunc(-3.1));


   let bioData = { 
       myName : "Virat Kohli ",
       myAge : 34,
      getData : function(){
         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
       }
   }

   bioData.getData();
 
  let bioData = { 
   myName : {
    myNames : "Virat Kohli ",

   },
   myAge : 34,
   getData (){
     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
   }/ }

 console.log(bioData.myName.realNames );


 
 console.log(this.alert('use of alert  by this ....'));


 function Names() {
     console.log(this);
 }


 const obj = {
     myAge : 34,
     myNames : () => {
       console.log(this);
     }
 }
 obj.myNames();




 const addtwonum = (a,b) => {
     return a+b;
 }
 
 console.log(addtwonum(5,2));

 const substraction = (a,b) => {
     return Math.abs(a-b);
 }
  const multiplication = (a,b) => {
     return a*b;
 }

 const calculator = (num1,num2, operator) => {
   return operator(num1,num2);
 }

 calculator(5,2,subs)
 console.log(calculator(5,2,subs));
 console.log(calculator(2,3,add));
 console.log(calculator(5,4,subs));
 console.log(calculator(10,6,mult));



 const virat = () => {
   console.log(`virat playing very well`);
   virat1();
   console.log(`virat playing very well Again `);
 }

  virat();

 const virat2 = () => {
   setTimeout(()=> {
                    console.log(`Function 2️  is called when time is 800 milisecond`);
   }, 800);
 }



 let a = "Hello..."; 

 const first1= () => {
     let b = " How are you?"
 
     const first2 = () => {
       let c = " hello and welcome,if not then byby  .....";
       console.log(a+b+c);
     }
     first2();
    
 }

 first1();



 const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

 sum(5)(3)(8);


 setTimeout(()=>{
     console.log(`its all about of first`);
     setTimeout(()=>{
         console.log(`its all about of second`);
         setTimeout(()=>{
             console.log(`its all about of 3rd`);
             setTimeout(()=>{
                 console.log(`its all about of 4th`);
                 setTimeout(()=>{
                     console.log(`its all about of 5th`);
                     setTimeout(()=>{
                         console.log(` works is done`);    
                     }, 1000) 
                 }, 500)   
             }, 300)  
         }, 400)   
     }, 200)
 }, 800)



 var object = { key_1: "some text", key_2: true, key_3: 10 };

 var object_as_string = JSON.stringify(object);  
 "{"key_1":"some text","key_2":true,"key_3":10}" 
 
  var object_as_string_as_object = JSON.parse(object_as_string); 


 console.log(object_as_string);

 console.log(typeof(object_as_string)); 

console.log(typeof(object_as_string_as_object));


 ;  

 


 
 

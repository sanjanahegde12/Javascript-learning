// var email=prompt("enter email");
// var contact=prompt("enter contact");
// var userdata=[email,contact];
// console.log(userdata);
// //! raj@gmail.com  8726534152
// //! raj2514SVIT
// var pwd1=userdata[0].slice(0,3).toUpperCase();
// console.log(pwd1);
// var pwd2=userdata[1].slice(6,10);
// var pwd3=pwd2.split('').reverse();
// console.log(pwd3);
// var userpassword=pwd1.concat(pwd3).concat("SVIT");
// document.write(`the login creditional generated is ${userpassword}`)
// if(userpassword.includes("SVIT")){
//     document.write(`interview will be scheduled for june 2024`)
// }
// else{
//     console.log("your clg is not enrolled");
// }

//! eg 2
//! products-pid -pumashirt pin-560002  create productid
// starting 4 char of brand, last 2 char of pin 
// ~puma02-200rs
// ~Zara04-300rs
// ~nike30-400rs

// var brandname=prompt("enter product brand");
// var productname=prompt("enter product name");
// var productpin=Number(prompt("enter product pin"));



//! example 3
// var flipcart=["kurtha","jeas","bottle","smart watch"];
// console.log(flipcart);
// flipcart.push("iphone","bag");
// //! push adds ele at last index of array
// console.log(flipcart);
// flipcart.push();
// console.log(flipcart);
// //! pop removes ele at last index of array
// flipcart.shift();
// console.log(flipcart);
// flipcart.unshift("tshirt");
// console.log(flipcart);

//! slice
//! splice



//! object creation

//product -productname,product id,delivary date,price on offer,original price
//location of departures{array},offer ondeal{function}
//! object by inbuilt constructor
var product=new Object();
console.log(product);
product.pname="lapitopi";
product.pid="hp123";
product.pdelivarydate="25-nov-2023";
product.poffers=7999;
product.oprice=10000;
product.location=["channai","bangaluru","pune"];
product.ondeal=function(){
    console.log("15% off");
}
console.log(product);


// constructor function to create object
function cakebake(cakename,kg,occasion,cost,delivarydate){
    this.cakename=cakename;
    this.kg=kg;
    this.occasion=occasion;
    this.cost=cost;
    this.delivarydate=delivarydate;
}
let c1=new cakebake("red velvet",3,"birthday",1400,"3rd nov,2023");
console.log(c1)
let c2=new cakebake("chocolate",10,"anniversary",8000,"15th aug,2023");
console.log(c2)


console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));

var emp2=Object.assign(emp);
console.log(emp2);
console.log(emp);












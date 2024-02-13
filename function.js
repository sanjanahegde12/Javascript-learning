// console.log(window);
// console.log(this);
// var clg="SVIT";
// console.log(clg);

// function loginmsg(name,batch){
//     console.log(`dear ${name} you've successfullylogged in ${batch} timings will be 11-2pm`);

// }

// loginmsg("neha","CCT-MVS-M12");
// loginmsg("sanjana","qeef-3bhe-uu2");


// var userotp=function otp1(params){
//     console.log("123456")

// };
// userotp();

// var userotp=function(){
//     console.log(320543)

// };
// userotp();
// var userotp=()=>{
//     console.log(643785)
// };
// userotp();/

//! nested function
// console.log("nested function")
// function accountholder(){
//     var name="sanjana";
//     var accno="accquq123456";
//     var balance=850000;
//     console.log(name,accno,balance)
//     function fixeddeposit(){
//         var deposit=1000000;
//         var interestrate=5;
//         var total=deposit+deposit*0.5;
//         console.log(total +"fixed deposit");
//     }
//     fixeddeposit();
// }
// accountholder();


//! example 2

// console.log("nested function")
// function candycrush(){
//     var playername="joy";
//     var pointer1=250;
//     var candies=10;
//     console.log(playername,pointer1,candies)
//     function round2(){
//         var pointsr2=pointer1+450;
//         var candiesr2=15+candies;
//         console.log(pointsr2,candiesr2,playername)
//         function round3(){
//             var pointsr3=pointer2+600;
//             var candiesr3=5+candies2;
//             console.log(pointsr3,candiesr3,playername)
//          return round3;
//     }
//     return round2;
    
// }
// candycrush()()();


// ! example 3

// function sanjanagp(){
//     var acre=100;
//     var gold=10;
//     console.log(acre,gold);
//     function sanjanalp(params){
//         var acrep=120;
//         var goldp=12;
//         console.log(acrep,goldp);
//         function sanjana(){
//             var acrec=30;
//             var goldpr=2;
//             console.log(acre+acrep+acrec +"total land");
//             console.log(acrec,goldpr);
//         }
//         return sanjana;
//     }
//     return sanjanalp;
// }
// sanjanagp()()();


//! IIFE

// (function otp(){
//     console.log(78944656)
// })

// ();


//! Higher order function

// function sum(a,b){
//     var res=a+b;
// }
// sum(10,30);

// function mul(a,b){
//     var res=a*b;
// }
// mul(10,30)

//---
// function calculate(a,b,task){
//     var res=task(a,b);
//     return res;

// }
// let add=calculate(10,20,(a,b)=>{return a+b})
// console.log(add)
// let mul=calculate(20,30,(a,b)=>{return a*b})
// console.log(mul)


//---

// function salcalci(designation,sal,inc,bonus){
//     var novsalary=bonus(sal,inc);
//     return novsalary;
// }
// var d=salcalci("develpr",48542,(sal,inc)=>{return sal+inc+15000})
// console.log(d)
// var te=salcalci("test engg.",48740,15000,(sal,inc)=>{return sal+inc+2000})
// console.log(te)


//! GENERATOR FUNCTION

// function* studentid()
// {
//     yield 101;
//     yield 102;
//     yield 103;
//     yield 104;
//     yield 105;
//     yield 106;
// };
// var gid=studentid();
// var name1="sachin";
// var sid=gid.next().value;
// console.log(name1,sid);

// var name2="meow";
// var sid=gid.next().value;
// console.log(name2,sid);

// var name3="bow bow";
// var sid=gid.next().value;
// console.log(name3,sid);

// var name4="kyavv";
// var sid=gid.next().value;
// console.log(name4,sid);

// var name5="ambaa";
// var sid=gid.next().value;
// console.log(name5,sid);

// var name6="hurry";
// var sid=gid.next().value;
// console.log(name6,sid);

//! using for loop
// function* student(){
//     for(i=101;i<=157;i++){
//         yield i;}
// }
// var gid=student();
// var name1="SACHIN";
// var sid=gid.next().value;
// console.log(name1,sid);

// var name2="SANJANA";
// var sid=gid.next().value;
// console.log(name2,sid);

// var name3="MITALI";
// var sid=gid.next().value;
// console.log(name3,sid);

// var name4="ANISHA";
// var sid=gid.next().value;
// console.log(name4,sid);

// var name5="VINEETHA";
// var sid=gid.next().value;
// console.log(name5,sid);
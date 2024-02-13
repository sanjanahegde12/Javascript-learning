// user kms
// car-60rs,auto-45rs,bike-30kms
/*var kms=prompt("enter km in number");
var modeoftransport=prompt("enter mode car/auto/bike is the options we have").toLowerCase();

if(modeoftransport==="car"){
    var travelcost=kms*60;
    document.write(`Dear customer your travel cost opted for ${modeoftransport} will be ${travelcost} Rs/-`);
}

if(modeoftransport==="auto"){
    var travelcost=kms*45;
    document.write(`Dear customer your travel cost opted for ${modeoftransport} will be ${travelcost} Rs/-`)
}

if(modeoftransport==="bike"){
    var travelcost=kms*30;
    document.write(`Dear customer your travel cost opted for ${modeoftransport} will be ${travelcost} Rs/-`)
}*/

//user total purchase-5000
// more than 5000-15%
/*var totalcost=prompt("enter the bill amount");

if (totalcost<=5000){
    document.write(`Dear customer your purchased cost is ${totalcost} Rs/-`)
}

else if(totalcost>5000){
    var totalcost=totalcost-totalcost*0.15;
    document.write(`Dear customer your purchased cost  is ${totalcost} Rs/-`)
}*/


//govt-property tax
// pay-2023 due -5%
// pay-2023 no discount on due
// pay-2022/2021- +5%

// var ptax=Number(prompt("enter proprty tax"));
// var due=prompt("enter yes or no if you have due").toLowerCase;
// var year=prompt("enter year");

// if( due==="no" && year===2023 ){
//     var tax=ptax-ptax*5/100;
//     document.write(`Dear customer your payable tax is ${total} Rs/-`);
// }

// else if(due==="yes" && year===2023  ){
//     document.write(`Dear customer your payable tax  is ${ptax} Rs/-`);
// }

// else if( due==="yes" && year<=2022){
//     var tax=ptax+ptax*5/100;
//     document.write(`Dear customer your payable tax  is ${total} Rs/-`);
// }

// else{
//     document.write("invalid input")
// }

// !day-monday
// schedule

// ch=Number(prompt("enter your choice 1.Monday 2.Tues 3.wed 4.thur 5.fri 6.sat 7.sun"));
// switch(ch){
//     case 1:var sched="java";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     case 2:var sched="c";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;
    
//     case 3:var sched="C++";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     case 4:var sched="react";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     case 5:var sched="js";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     case 6:var sched="html";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     case 7:var sched="css";
//            document.write(`your schedule on ${ch} is ${sched}`);
//            break;

//     default:document.write("invalid choice");
//             break;
// }


//!initializer , updation,condition

// console.log(Math.floor(Math.random)*1000000);
function sendotp(){
    var num='svit2023';
var otp='';
var len=num.length;
for(i=0;i<=3;i++){
    otp += num[Math.floor(Math.random()*len)]
}
alert(`OTP valid for 30sec : ${otp}`)

var userotp=prompt("enter otp");
if(otp===userotp){
    document.write("successful, login mail will be drope")
}

else{
    document.write("invalid")
}

}

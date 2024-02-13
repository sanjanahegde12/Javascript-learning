function olalogiccar(){
    var kms=document.getElementById("kmsc").value;
    console.log(kms);
    var travelcost=kms*45;
    console.log(travelcost);
    var check=document.getElementById("checkc");
    console.log(check);
    check.innerHTML=`THE TRAVEL COST IS ${travelcost}`;
    check.style.backgroundColor="lavender";
    check.style.display=block;
}

function olalogicjeep(){
    var kms=document.getElementById("kmsj").value;
    console.log(kms);
    var travelcost=kms*35;
    console.log(travelcost);
    var check=document.getElementById("checkj");
    check.innerHTML=`THE TRAVEL COST IS ${travelcost} Rs/-`;
    check.style.backgroundColor="purple";
    check.style.display=block;

}

function olalogicbike(){
    var kms=document.getElementById("kmsb").value;
    console.log(kms);
    var travelcost=kms*25;
    console.log(travelcost);
    var check=document.getElementById("checkb");
    check.innerHTML=`THE TRAVEL COST IS ${travelcost} Rs/-`;
    check.style.backgroundColor="pink";
    check.style.display=block;

}

var count=0;
var likebtn=document.getElementById("likebtn");
likebtn.addEventListener("click",()=>{
    count++;
    likebtn.innerHTML=`❤️ ${count}`;
})


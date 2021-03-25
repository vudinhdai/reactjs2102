// console.log("hello");
// var a =30;
// var a=30;

// let b =10;
// b=10;
// const c = 30;
// //c=50;

// PI=3,14;
// document.getElementById("a=",a, "b=",b,"c=",c);
var currentYear = 2021;
var birthYear =1999;
var age = currentYear - birthYear;
console.log("age :", age);
console.log("3+4=", 3+4);
console.log("3*4=", 3*4);
console.log("3/' a ' =", 3/"a");
console.log('3 + "4" = ', 3+"4", typeof( 3+"4") );
console.log('3 - "4" = ', 3-"4",  typeof( 3-"4"));
//String
let studentName1 ="\"Vu Dinh Dai\"";
let studentName2 ="Nguyen Minh Truong";
console.log("studentName1:", studentName1);
console.log("studentName2:", studentName2);
console.log(studentName1 + studentName2);
//temelate string
 let studentName = "Hai";
 let studentAge  = 20
 let className="reactjs"
 let intro = "Name:" + studentName + ";Age:" +studentName;
 let tenIntro = 'Name : ${studentName}; Age: ${studentAge} , Class: ${className}'
 console.log("Intro:" , intro , tenIntro)

 // object gom nhieu cai 
 var student={
     name :"",
     age : 20,
     className: "react"
 }
 console.log("studentName:", student.name)

 //Array

 let ages =[20, 30, 40];
 console.log('ages:', ages);

 //gender
 let isBoy = true;//false

 //instrucment --cau lenh
 //if-else if-else

 let today =4;
//  if( today == 3){
//      console.log("go to class!")
//  }else if(today==5){
//      console.log("go to class!")
//  }else{
//     console.log("fall")
//  }

if(today === 3 || today === 5){
    console.log("go to class")
}else{
    console.log("fall!")
}
console.log('3=="3"', 3 =="3")
console.log('3=="3"', 3==="3")
// su khac nhau giua == vs === ngoai so sanh ve kieu du lieu ma con so sanh ve bien

//swith case
//break mang nghia dung lai 
let month =4;
switch (month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("feb");
    case 3:
        console.log("March");
    default:
        console.log("fall");
        
}
switch(month){
    case 1 :
    case 3 :
    case 5 :
         console.log("31");
    break;
    case 4:
        console.log("30");
    
}
//lop  for-while-do while
 //for 
 let begin = 1;
 let end   = 6;
 for(let i = begin;i<= end;i=i+1){
    console.log("i:", i)
    if(i==10){
        console.log("Found");
        break;
    }
 }
 for(let i =0;i<end;i++){
     console.log("i:"+(i+1))
     for(let j=0;j<end;j++){
         console.log("i,j",i,j);

     }
 }

 let i= 0;
 while(true){
    if(i>=end){
        break;
    }
    console.log("student " + i);
    i++;


 }
 i=17;
 do{
     console.log("never mind  ")

 }while(i<15){
     console.log("please print  me")
 }

//enter number
// let value = window.prompt("enter a number" ,0)
// console.log("value", value, typeof(value))


let a ;
a=prompt("nhap vao so a ")
a=parseInt(a);
 if(a%2 == 0){
     console.log("laf so chan", a)
 }else{
     console.log("la so le",a)
 }



















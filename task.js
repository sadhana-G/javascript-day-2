const prompt=require("prompt-sync")();
/*let age=prompt("Enter your age:")
if(age>=20 & age<23)
{
    console.log("PG students");
}
else if(age<20 & age>=18)
{
    console.log("UG students");
}
else if(age>0 & age<18)
{
    console.log("School students");
}
else if(age>23 & age<100)
{
    console.log("Working employee");
}
else{
    console.log("Invalid Input");
}*/
//////////////////////////// task 2 //////////////////////
let fruits=['apple','banana','orange'];
let numbers=[14,2,43,64,85];
let mixed=['hello',42,true,null];

fruits.push('grape');
fruits.unshift('mango');
fruits.pop();
fruits.shift();

console.log(fruits[2]);
console.log(mixed.slice(0,2));
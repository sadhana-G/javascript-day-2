/*console.log(a);
   var a=10;
console.log(a);

//////////////// function ///////////////////
    
   function baby(color)
   {
    return "My Babies favorite color is :" + color;

   }
   let fav=baby("violet");
   console.log(fav);
*/

/////////////// task /////////////////
   const man = (a) =>
   {
    return "Our Company Name is :" + a;

   }
   let res=man("Hsanainfotech");
   //console.log(res);

////////////////// add //////////////////

   const add = (a,b) =>
    {
     return a + b ;
 
    }
    //console.log(add(3,5));

 //////////////////// sub /////////////////////

    const sub = (a,b) =>
        {
         return a - b ;
     
        }
       // console.log(sub(3,5));

///////////////////// square ////////////////
        const squ = (a) =>
            {
             return a*a ;
         
            }
           // console.log(squ(5));

/////////////////// cube ////////////////////////
const cube= (a) =>
    {
     return a*a*a;
 
    }
    //console.log(cube(3));

///////////////// simple index /////////////////
const add2 = (a,b) => a + b ;
//console.log(add2(3,5));

///////////////// asynchrnous //////////////////////
console.log("Start");
console.log("Middle");
console.log("End");

console.log("Start")
setTimeout(()=>
{
   console.log("This is delied message")
}, 2000);
console.log("End")

////////////////// synchrnous ///////////////
function syncTask()
{
   console.log("Task 1");
   console.log("Task 2");
}
console.log("Before");
syncTask();
console.log("After");
var b = "Hello"; // Implicit Type
//b = 100;
var a:number=100; // Explicit Type
//a="Hello";
++a;
console.log("A is "+a);

function add(x:number,y:number):number{
    return x + y;
}
var result:number = add(10,20);
console.log("Result ",result);

var e:any;
e = 100;
e = "Hello";
e = true;
var m:string[]= ["amit","ram"];
type mytype = {id:number,name:string};
var obj:mytype = {id:1001, name:'Ram'};
//var obj2:mytype = {salary:999};
//var obj:{id:number,name:string} = {id:1001, name:'ram'};
var g:number|string ;
g = 100;
g = "hello";
//g = true;
var e1:[string,number,boolean] = ["Hello",1001, true];
e1[1] = 1002;
console.log(e1);
enum MyColor {
    RED=100, GREEN=200,BLUE=300
}

var r:MyColor ;
if(e1[1]==1002){
    r =  MyColor.RED;
}
else{
    r = MyColor.GREEN;
}

switch(r){
    case MyColor.RED:
    console.log("I am Red");
    break;
    case MyColor.GREEN:
    console.log("I am Green");
    break;
}
console.log("R is ",r);


var balance:number = 0;
if(balance<0){
    bug();
}
function bug():never{
    throw new Error("I am a Bug");
}
var pp = 999;
pp=null;

function showA():void{
return ;
    //return 1000;
}
var fn:(first:number, second:number)=>number;
fn = add;
//fn = show;
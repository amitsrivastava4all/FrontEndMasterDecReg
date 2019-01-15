abstract class B{
    constructor(){
        console.log("B Cons Call");
    }
}
class A extends B{
    private a:number;
    private b:number;
    constructor(a:number, b:number,private c:number){
        super();
        this.a = a;
        this.b = b;

    }
    print():void{
        console.log("A is "+this.a+" B is "+this.b+" C is "+this.c);
    }
}
var w = 100;
var w1:number = 200;
var obj:A = new A(10,20,30);
obj.print();

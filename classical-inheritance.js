// Classical/Prototypal  inheritence in JavaScript

// Shape - superclass
function Shape(){
    this.x = 0;
    this.y = 0; 
}

// Super Class method
Shape.prototype.move = function(x,y){
    this.x+=x;
    this.y+=y;
    console.info('Shape Moved')
}

//Rectangl - subclass

function Rectangl(){
    Shape.call(this)
}


// subclass extends superclass
Rectangl.prototype = Object.create(Shape.prototype)
Rectangl.prototype.constructor = Rectangl;


var rect = new Rectangl();
 // Only single class inhertance.
// -------------------------------------------------------------
 // if we wish to inherit from mutiple class the use of mixins

 
 //inherir one class
 MyClass.prototype = Object.create(SuperClass.prototype);
 
 //mixin another
 Object.assign(MyClass.prototype,OtherSuperClass.prototype)
 
 function MyClass(){
     SuperClass.call(this);
     OtherSuperClass.call(this);
 }
 // re-assign contructors
 MyClass.prototype.constructor = MyClass;

 MyClass.prototype.myMethod = function(){

 }



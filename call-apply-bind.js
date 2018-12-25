/**
 * Here we will go through some functions whic helps in changing the context of a running function
 * these are 
 * 1. call
 * 2. apply
 * 3. bind
 * 
 * Note : these functions are only available for functions types.
 */

 // call 
var person = {
    name : "Ujjal"
}

 function add(a,b,c){
     console.log(`${this.name}----${a+b+c}`)
 }

 add(1,2,3) // prints undefined----6 | this is because there is no name in the this of add()

 add.call(person)
 // here we assign the 'this' of add to the person | prints -> Ujjal-----Nan | Ooops..
 // this is because we dont have the params no which addition will occur.

 add.call(person,1,2,3)
 // here we first send the 'this' ie 'person' and then the parameters
 // prints -> Ujjal----6

 // One most common use of call is convert Array type objects to Array.
 // Example of Array type object : "arguments" of a function
 
 function add_again(){
    var sum = arguments.reduce((acc,val)=> acc+val)
    console.log(sum)
 }
 add_again()
 // prints reduce is not defined. Because arguments is a array but it does not have all the array functions.

 function add_again_correctly(){
    var sum = [].slice.call(arguments).reduce((acc,val)=> acc+val)
    console.log(sum)
 }
 add_again_correctly(1,2,3)
 // prints -> 6

 // well in es6 you can use Array.from()



 // apply()
 /**
  * apply takes only two params at the max
  * apply(this,[params])
  * set the function with the given 'this'
  * takes the function parameters as array
  */

  add.apply(person,[1,2,3])

  // Only deifference between call and apply is that call can take any number of "," separated args,
  // while apply can take only two argmments 

  /**
   * Bind
   * this is different kind of function which actually returns a brand new function with 'this' value
   * provided to it. Also it remembers the number of params the host function will take and number of
   * params supplied to it. 
   */

   var addFunction = add.bind(person);
   addFunction(1,2,3) // prints -> 6

   var addFunction2 = add.bind(person,1);
   addFunction2(2,3) // prints ->6 | see it remembers number of arguments already provided.

   addFunction2(2,3,4,5) // prints -> 6 | ignores any extra params passed to it.

    // Implement my bind
    function bind(fn,ctx,...params){
        return (...innerparams)=>{
            fn.call(ctx,...[...params,...innerparams])
        }
    }

    bind(add,person,1,2,3)
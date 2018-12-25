
/**
 * here we will see the how to find out this.
 */

 // --> This is only created/initialized when function is run.

 /** Rule 1.
  global Rule : If function is declared in such a way that there is 
  * no parent object
  * no call , apply ,bind
  * no new , then 
  * window or global(node)
  */

  function first(){
      this.name = 'Ujjal',
      this.job = 'sleep'
  }
  first()
  console.log(name)

  console.log(job)

  /**
   * Rule 2.
   * Implicit or Object binding
   * Here when a function is declare in a object this of this function is the closest Object itself 
   * Note : Arrow functions in object binding takes the nearest available this.
   */

var obj = {
    fname : 'Ujjal',
    fn : function(){
        console.log(this.fname)
    }
}
// obj.fn();
// prints -> Ujjal

var obj = {
    fname : 'Ujjal',
    oobj : {
        lname :'Dutta',
        fn: function(){
            console.log(`${this.fname} --- ${this.lname}`)
        }
    }
}
// obj.oobj.fn()
// prints -> undefined --- Dutta

var obj = {
    fname : 'Ujjal',
    fn : () => console.log(this.fname)
}
// obj.fn();
// prints -> undefined

/**
 * Rule 3. Explicit Binding
 * Here we have the power to specify the value of this of a function
 * JS gives us following options to do so :
 * * call
 * * apply
 * * bind
 */

var obj = {
    fname : 'Ujjal',
    fn : function(){
        console.log(this.fname)
    }
}

var oobj = {
    fname : 'JavaScript',
}

obj.fn()
// prints -> Ujjal

obj.fn.call(oobj)
// prints -> JavaScript because now we changes the this of obj's fn from obj to oobj using call

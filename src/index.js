class Calculator {
    constructor(perem) {
            this.perem = perem;
        }
    add(x) {
      this.perem = x;
    }
    sum(y) {
      this.perem = this.perem + y;
      
    }
    multiply(y){
      this.perem = this.perem * y;
     
    }
    difference(y){
      this.perem = this.perem - y;
     
    }
    division(y){
      this.perem = this.perem / y;
     
    }
    result(){
      return this.perem;
    }
    reset(){
      return this.perem = 0;
    }
  }
  class Scientific_calculator extends Calculator{
    cos(){
      this.perem = Math.cos(this.perem)
    }
  
    sin(){
      this.perem = Math.sin(this.perem)
    }

    tg(){
      this.perem = Math.tan(this.perem)
    }

    log(){
      this.perem = Math.log(this.perem)
    }

    log10(){
      this.perem = Math.log(this.perem)
    }

    exp(){
      this.perem = Math.exp(this.perem)
    }

    sqrt(){
      this.perem = Math.sqrt(this.perem)
    }

    factorial(){
      this.perem = Math.factorial(this.perem)
    }

    acos(){
      this.perem = Math.acos(this.perem)
    }

    asin(){
      this.perem = Math.asin(this.perem)
    }

    atg(){
      this.perem = Math.atan(this.perem)
    }
  }
  const calculator = new Calculator();
  const scientific_calculator = new Scientific_calculator();
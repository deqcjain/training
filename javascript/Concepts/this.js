const test = {
    prop: 42,
    func: ()=> {
      return this.prop;
    },
  };
  
  console.log(test.func());
  

  const globalObject = this;
const foo = () => this;
console.log(foo() === globalObject);

let a=new Number(10)
b=Object.parse(a)
console.log(b);
a=20
console.log(a);
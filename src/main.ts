// class Car {
//   brand: string;
//   model: string;
//   price: number;
//   constructor(brand: string, model: string, price: number) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   drive() {
//     return " Car is draving";
//   }
// }

// class NewCar extends Car {
//   yoqilgiTuri: string;
//   modelPlus: string;
//   constructor(brand: string, model: string, price: number,yoqilgiTuri: string, modelPlus: string) {
//     super(brand, model, price);
//     this.yoqilgiTuri = yoqilgiTuri;
//     this.modelPlus = modelPlus;
//   }
// }

// const result = new Car("GM", "Captiva", 25000);
// const result2 = new NewCar("Tesla", "X2", 75000, "ECO", "Super X2");

// console.log(result);
// console.log(result2);

// let a = [];
// a = [1, 2, "a", "b", function myApp() {}, { naem: "sd" }];

// let b = [ 1,2,34]

class Person {
  name: string;
  age: number;
  marreid: boolean;
  constructor(name: string, age: number, marreid: boolean) {
    this.name = name;
    this.age = age;
    this.marreid = marreid;
  }
}

class newPerson extends Person{
  group: number;
  years: number;
  grand: number;
  constructor(name: string, age: number, marred: boolean, group: number, years: number, grand: number){
   
    super(name, age, marred)
    this.group = group;
    this.years = years;
    this.grand = grand;
  }
}


let results = new Person("john", 23, false)
let results2 = new newPerson("john", 23, false, 3319, 2023,4)

// ! 

namespace Utils {
  function log(text: string, color: string, fontSize?: string): void{
    if(fontSize){
      console.log(`%c${text}`, `color: ${color}; font-size: ${fontSize} `)
    }else{
      console.log(`%c${text}, color: ${color}; `)
    }
  }
  log("Salom Typescript", "red", "32px")
}
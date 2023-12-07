/* function Person(name, age) {
    this.name = name;
    this.age = age;
}

//objeto
let userPerson = {
  nombre: "Maria" ,
  edad: 23,
  nacionalidad: "brazil",
  datos: function(){
    console.log(`sus datos son: nombre - ${this.nombre}, edad - ${this.edad} nacionalidad: ${this.nacionalidad}   `)
  }
}

let user_1 = Object.create(userPerson)
user_1.nombre = "Rodrigo"

user_1.datos()

 */
/* function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";

const user = new Person("John", "wake", 23, "rojo")

console.log(user); */

//objeto
/* let userPerson = {
    nombre: "Maria" ,
    edad: 23,
    nacionalidad: "brazil",
    datos: function(){
      console.log(`sus datos son: nombre - ${this.nombre}, edad - ${this.edad} nacionalidad: ${this.nacionalidad}   `)
    }
  }
  
  let user_1 = Object.create(userPerson)
  user_1.lastname = "Rodrigo"
  user_1.datos()

  console.log(userPerson);
   */

  "use strict"

  let animal = {
    tipo: "mamifero"
  }

  let perro = {
    raza: "labrador"
  }
/* console.log(animal);
console.log(perro); */
perro.__proto__ = animal;

Object.setPrototypeOf(perro, animal)

console.log(perro.tipo);
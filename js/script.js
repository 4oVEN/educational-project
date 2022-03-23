'use strict';

class User{
  constructor(name, age){
    this.name = name;
      this._age = age;
  }
  
  #surname = 'Demidov';

  say = () => {
    console.log(`Имя пользователя: ${this.name}${this.#surname}, возвраст ${this._age}`);
  }

  get age (){
    return this._age;
  }

  set age (age){
    if (typeof  age === 'number' && age > 0 && age < 110){
      this._age = age;
    } else {
      console.log('Недопустимые значения');
    }
  }
}

const nikita = new User('nikita', 33);
console.log(nikita._age);
nikita._age = 99;
console.log(nikita._age);
console.log(nikita.surname);

nikita.say();
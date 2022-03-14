function User(name, id){
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function(){
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function(){
  console.log(`Пользователь ${this.name} ушел`);
};

const N = new User('Nikita', 33);
const A = new User('Alex', 20);

N.exit();

N.hello();
A.hello();

console.log(N);
console.log(A);
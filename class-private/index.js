class Greet {
  #name = 'World';
  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.#name}`);
  }
}

const hoge = new Greet();

hoge.sayHello();
// Hello, World

hoge.name = 'aaaaaa';

hoge.sayHello();
// Hello, aaaaaa
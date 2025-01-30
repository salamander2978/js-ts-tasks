class User {
  #firstName;
  #secondName;
  #age;

  constructor(firstName, secondName, age) {
      if (typeof firstName !== 'string') throw new Error('firstName must be a string');
      if (typeof secondName !== 'string') throw new Error('secondName must be a string');
      if (typeof age !== 'number') throw new Error('age must be a number');
      
      this.#firstName = firstName;
      this.#secondName = secondName;
      this.#age = age;
  }

  get age() {
      return this.#age;
  }

  set age(value) {
      if (typeof value !== 'number') throw new Error('age must be a number');
      this.#age = value;
  }

  set firstName(value) {
      if (typeof value !== 'string') throw new Error('firstName must be a string');
      this.#firstName = value;
  }

  set secondName(value) {
      if (typeof value !== 'string') throw new Error('secondName must be a string');
      this.#secondName = value;
  }

  get name() {
      return `${this.#firstName} ${this.#secondName}`;
  }

  introduce() {
      return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }

  celebrateBirthday() {
      this.#age += 1;
  }
}

const createUser = (firstName, secondName, age) => new User(firstName, secondName, age);

const createUsers = (data) => data.map(user => new User(user.firstName, user.secondName, user.age));

const findUsersByAge = (users, age) => users.filter(user => user.age === age);

const createUsersSortFn = (TestUtils) => (users) => users.sort(TestUtils.comparator);

const celebrate = (users) => {
  users.forEach((user, index) => {
      if (index % 2 !== 0) user.celebrateBirthday();
  });
};



// ex:1

const student = {
  name: "Али",
  age: 18,
  course: "Frontend"
};

student.age = 19;
student.city = "Бишкек";
delete student.course;

// console.log(student);


// ex:2

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Black"
};

const keys = Object.keys(car);
// console.log(Object.keys(car));
// console.log("Количество свойств:", keys.length);
for (const key of keys) {
  // console.log(key);
}

// ex:3

const product = {
  name: "Laptop",
  price: 50000,
  quantity: 3
};

const values = Object.values(product)
// console.log(Object.values(product));
for (const value of values) {
  // console.log(value);
}
const number = values.includes(50000);
// console.log("Есть ли 50000:", number);


// ex:4

const user = {
  name: "Руслан",
  age: 20,
  city: "Ош"
};
const entries = Object.entries(user);
// console.log(Object.entries(user));
for (const [key, value] of entries) {
  // console.log(`${key}: ${value}`);
}


// ex:5

const user1 = {
  name: "Азамат",
  age: 18
};

const user2 = {
  city: "Бишкек",
  course: "JavaScript"
};

const user3 = Object.assign({}, user1, user2);
// console.log("user3:", user3);
// console.log("user1:", user1);
// console.log("user2:", user2);


// ex:6

const phone = {
  brand: "Apple",
  model: "iPhone 15",
  price: 80000
};

Object.freeze(phone);

phone.price = 70000; 
phone.color = "pink";
delete phone.model;

// console.log(phone);

// Вопрос: Почему объект не изменяется?
// Ответ: Потому что этот метод не позволяет удаление или изменение старых значей и запрещает добавление новых значений.


// ex:7

const employee = {
  name: "Бекзат",
  position: "Developer",
  salary: 40000
};

Object.seal(employee);

employee.salary = 50000;
employee.age = 25;
delete employee.position;

// console.log(employee);

// Вопрос: Чем Object.seal() отличается от Object.freeze()?
// Ответ: Seal запрещает добавлять и удалять свойства но разрешает менять значения существующих свойств. Freeze запрещает любые изменения.


// ex:8

const shop = {
  name: "Tech Store",
  products: 25,
  city: "Ош",
  rating: 4.5
};

// console.log(Object.keys(shop));
// console.log(Object.values(shop));
// console.log(Object.entries(shop));

shop.delivery = true;
delete shop.rating;

Object.freeze(shop);
shop.products = 50;

// console.log(shop);


// ex:9

const profile = {
  username: "coder123",
  age: 17,
  city: "Ош"
};

const newData = {
  age: 18,
  city: "Бишкек",
  course: "Backend"
};

const updatedProfile = Object.assign({}, profile, newData);
const profileKeys = Object.keys(updatedProfile);
// console.log(profileKeys);
// console.log("Количество свойств:", profileKeys.length);

for (const [key, value] of Object.entries(updatedProfile)) {
  // console.log(`${key}: ${value}`);
}

Object.seal(updatedProfile);
updatedProfile.username = "pro_coder";
updatedProfile.email = "test@mail.com";

// console.log(updatedProfile);


// ex:10

const student2 = {
  name: "Айбек",
  age: 19,
  course: "JavaScript",
  grade: 85
};

const additionalInfo = {
  city: "Бишкек",
  active: true
};

const allStudent = Object.assign({}, student2, additionalInfo);
console.log(Object.keys(allStudent));
console.log(Object.values(allStudent));

for (const [key, value] of Object.entries(allStudent)) {
  console.log(`${key} -> ${value}`);
}

if (allStudent.grade >= 80) {
  console.log("Отличный студент");
} else {
  console.log("Нужно улучшить результат");
}

allStudent.grade = 95;

Object.freeze(allStudent);
allStudent.name = "Дилшод";

console.log("Объект заморожен?", Object.isFrozen(allStudent));
console.log(allStudent);
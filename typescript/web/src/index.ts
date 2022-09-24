import { User } from "./models/User";

const user = new User({ name: "John", age: 18 });

user.set({ age: 21 });

console.log(user.get("name"));
console.log(user.get("age"));

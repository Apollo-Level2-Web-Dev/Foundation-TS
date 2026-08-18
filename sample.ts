// const add = (num1, num2) => {
//   return num1 + num2;
// };

// add(2, "4");

// // Primitive

// const studentName: string = "Md Ashik"; // string type
// const age: number = 21;
// const isActive: boolean = true;

// const coupon: null = null;
// const deliveryAddress: undefined = undefined;

// //NoN Primitive

// // object
// // array
// //function

// const foodName: string[] = ["Orosh Biriyani", "Mejabani", "French Fry"];

// // tuple , fixed length array & fixed data type
// const studentLocation: [number, number] = [22.356, 91.224];
// const studentWithRollNum: [string, number] = ["Mr. Mezba", 3];

// studentWithRollNum.push(200);

// // object data type

// // interface User {
// //   id: number;
// //   age: number;
// //   name: string;
// //   organization?: string;
// //   address?: string;
// // }

// // type User = {
// //   id: number;
// //   age: number;
// //   name: string;
// //   organization?: string; // literal type
// //   address?: string;
// // };

// const user1: User = {
//   id: 222,
//   age: 20,
//   name: "Mr. Jhankar Mahbub",
//   organization: "Programming Hero",
// };

// const user2: User = {
//   id: 333,
//   age: 22,
//   name: "Mr. Spiderman",
// };

// type Food = {
//   name: string;
//   price: number;
// };

// const food: Food = {
//   name: "burger",
//   price: 250,
// };

// const getFoodPrice = (product: Food) => {
//   return product.price;
// };

// // rest operator , spread operator
// type User = {
//     name: string;
//     profession: string;
//     age: number;
//     address?: {
//         city: string
//     }
// }

// const user : User = {
//   name: "Mr Ashik",
//   profession: "developer",
//   age: 21,
//   address: {
//     city: 'dhaka',

//   }

// };

// console.log(user?.address?.postalCode);

// //const userName = user.name;

// const { name: namKoron } = user;
// console.log(namKoron);

// const userprofession = user.profession;

// const updateUser = {
//   ...user,
//   age: 22,
// };

// const arr: number[] = [10, 20, 30];

// const homeFood = ["daal", "murgi"];

// const fastFood = ["burger", "sandwich"];

// const AllFood: string[] = [...homeFood, ...fastFood];
// console.log(AllFood);

// const sum = (...numbers: number[]) => {
//   console.log(numbers);
//   const result = numbers.reduce((total, number) => total + number, 0);
// };

// sum(10, 30, 40, 50);

// union types
// intersection

let userID: string | number;

userID = "22";

type Paymentmethod = "bkash" | "nagad" | "bank";

const payment = (paymentGatway: Paymentmethod) => {
  console.log(`paying using ${paymentGatway}`);
};

payment("bkash");

type Profile = {
  name: string;
  profilePicture?: undefined;
  nationalId: string;
};

type Employee = {
  employeeId: number;
  role: "admin" | "user";
};

type EmployeProfile = Profile & Employee;

const user: EmployeProfile = {
  name: "Mr. ashik ",
  nationalId: "123",
  employeeId: 222,
  role: "admin",
};

// same same but different=> ?  ??

const ashikVaierBoyosh = 20;

const msg: string =
  ashikVaierBoyosh >= 21 ? "biye korte parbe" : "biye korte parbena ";

console.log(msg);

// ??  undefined/ null
const userName: string | null | boolean = false;
const displayName = userName ?? "Guest";

console.log(displayName);

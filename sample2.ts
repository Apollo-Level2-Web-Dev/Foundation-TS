// type User = {
//   name: string;
//   age: number;
// };

// type Role = {
//   role: "admin" | "user";
// };

// type UserWithRole = User & Role;

interface IUser {
  name: string;
  age: number;
}

interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

type IsBoolean = boolean;

const isAdmin: IsBoolean = false;

const isStudent: IsBoolean = true;

interface IFriends {
  [index: number]: string;
}

type Add = (num1: number, num2: number) => number;

// Type Guard , Type assertion

let anything: any;

anything = "Mezba";
anything = false;
anything = 22;

//(anything as number).

const calculateDeliveryFee = (distance: string | number | null) => {
  if (typeof distance === "number") {
    return distance * 20;
  } else if (typeof distance === "string") {
    const [value] = distance.split(" ");
    return Number(value) * 20;
  }
};

//const result1 = calculateDeliveryFee(5);
//const result2 = calculateDeliveryFee("5 km");
//const result3 = calculateDeliveryFee(null);

// const friends: string[] = ["Mim", "Fahim", "Tamim"];
// const rollNumbers: number[] = [1, 2, 3];
// const isEligible: boolean[] = [true, false, true];

//generic > generalize

type GenArray<T> = Array<T>; // string[]

const friends: GenArray<string> = ["Mim", "Fahim", "Tamim"];
const rollNumbers: GenArray<number> = [1, 2, 3];
const isEligible: GenArray<boolean> = [true, false, true];

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [10, 20];
const coordinates: Coordinates<string, string> = ["10", "20"];

// const add: Add = (x, y, z) => {
//   return x+y+z;
// };

// add(3, 8)

// constraint: id, name

const addCustomerToOrder = <T extends { id: number; name: string }>(
  customerInfo: T,
) => {
  return {
    orderStatus: "pending",
    ...customerInfo,
  };
};

const customer1 = {
  id: 222,
  name: "Ashraful",
  hasCoupon: true,
};

type CommonCustomerproperties = {
  id: number;
  name: string;
  hasCoupon: boolean;
};

const result = addCustomerToOrder<{
  id: number;
  name: string;
  hasCoupon: boolean;
}>(customer1);

const result2 = addCustomerToOrder<
  CommonCustomerproperties & { moneyBag: number }
>({
  id: 333,
  name: "Tariq",
  hasCoupon: false,
  moneyBag: 20000,
});

const result3 = addCustomerToOrder<{ id: number; name: string; emni: string }>({
  id: 444,
  name: "Mezba",
  emni: "emni",
});

//console.log(result);

type FoodMenu = {
  burger: string; // key : value
  pizza: string;
  fuchka: string;
};

const myfavFood: keyof FoodMenu = "burger";

type UserWithRole = {
  name: string;
  age: number;
  role: string;
};

//type X = keyof UserWithRole;  //'name' |'age'| 'role'

const user1: UserWithRole = {
  name: "Mr. X",
  age: 30,
  role: "admin",
};

const product = {
  brand: "Toyota",
  modelYear: "1997",
};

const myName = user1["name"];

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const res = getPropertyFromObj(user1, "name");
console.log(res);

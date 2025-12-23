/* =========================
   Basic types
========================= */

const appName: string = "DemoApp";
const version: number = 1.0;
const isProduction: boolean = false;
let notDefined: undefined;
const emptyValue: null = null;

/* =========================
   Union & Literal types
========================= */

let status: "success" | "error";
status = "success";

/* =========================
   Array & Tuple
========================= */

const scores: number[] = [10, 20, 30];
const point: [number, number] = [10, 20];

/* =========================
   Interface & Object
========================= */

interface User {
  id: number;
  name: string;
  active: boolean;
}

const user: User = {
  id: 1,
  name: "Chris",
  active: true
};

/* =========================
   Function
========================= */

function add(a: number, b: number): number {
  return a + b;
}

/* =========================
   Condition
========================= */

function checkScore(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 60) {
    return "Pass";
  }
  return "Fail";
}

/* =========================
   Enum
========================= */

enum Role {
  Admin,
  User,
  Guest
}

/* =========================
   Class & Access modifiers
========================= */

class Person {
  private id: number;
  protected role: Role;
  public name: string;

  constructor(id: number, name: string, role: Role) {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  greet(): string {
    return `Hello, I am ${this.name}`;
  }
}

const p = new Person(1, "Alice", Role.User);
console.log(p.greet());

/* =========================
   Generics
========================= */

function wrap<T>(value: T): T[] {
  return [value];
}

const wrappedNumber = wrap<number>(123);
const wrappedString = wrap("hello");

/* =========================
   Async / Promise
========================= */

function fakeRequest(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("OK"), 500);
  });
}

async function run(): Promise<void> {
  const result = await fakeRequest();
  console.log("result:", result);
}

run();

/* =========================
   Type narrowing
========================= */

function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

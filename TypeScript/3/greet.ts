// one way to
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
  return `Hello ${person.name}! I know you are ${person.age} years old.`;
}


console.log(greet({ name: "John", age: 30 }));
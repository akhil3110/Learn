// one way to
 function greet(person: {
    name: string;
    age: number;
}): string {
  return `Hello ${person.name}! I know you are ${person.age} years old.`;
}


console.log(greet({ name: "John", age: 30 }));
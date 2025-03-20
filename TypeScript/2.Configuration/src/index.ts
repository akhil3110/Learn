// number types
let sales: number  = 123_456_789;
let course: string = "TypeScript";
let is_published: boolean = true;


// array types
let numbers: number[] = [1, 2, 3];
console.log(numbers);

//tupple types (A particular array where each element have a particular type)
let person: [string, number] = ["John", 25];
console.log(person);

//enums (A way of giving more friendly names to sets of numeric values)
// const small = 0;
// const medium = 1;
// const large = 2;

const enum Size {Small= 1, Medium, Large};
let mySize: Size = Size.Small; 
console.log(mySize);

//funcions 
function callculateTax (income: number, taxier =2022) : number{
    if(taxier < 2022){
        return income * 1.2;
    }
    return income * 1.4;
}
console.log(callculateTax(100, 2021));


//objects 

//type alias
type Employee = {
    readonly id: number,
    name?: string,
    retire: (date:Date) => void 

}


let employee:Employee = {
        id: 1,
        retire: (date: Date) => {
           console.log(date);
        }
    };
employee.name = "John";
console.log(employee);


//union types
function KgToLb(weight: number | string ) : number{
    //narowing

    if(typeof weight === "number"){
        return weight * 2.2;;        
    }
    else
        return parseInt(weight)*2.2
}

console.log(KgToLb(10));
console.log(KgToLb("10"));


//intersection types
type Draggable = {
    drag: () => void

}  

type Resizable = {
    resize: () => void
}

type uiWidget = Draggable & Resizable;

let textBox: uiWidget = {
    drag: () => {},
    resize: () => {}
}




//literal types (exact or specific values)
type Quantity = 50 | 100 | 150;
let quantity: Quantity = 50;

type metric = "kg" | "lb" | "g";
let metric: metric = "kg";


//nullables types 
function greet(name: string | null){
    if(name){
    return console.log(`Hello ${name.toUpperCase()}`);
    }
    return console.log("Holla");
}

greet(null);

//optional Chaining 
type Customer = {
    birthDate?: Date
};

function getBirthDate (id:number): Customer | null{
    return  id==0 ? null : {birthDate: new Date()};
}

let Customer = getBirthDate(1);

// optional property access operator
console.log(Customer?.birthDate?.getFullYear());


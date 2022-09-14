// console.log("hello")


//string,boolean,object,number

// it allows you define your own data type and shows you your error even before runtime

//boolean
// let isMe: boolean = false
// isMe = true

//object
const fruit:{
    name:string;
    heigth:string,
    beautiful:string,
}={
    name: "orange",
    heigth: "tall",
    beautiful: "yes"
}

console.log(fruit)

//array
let arr: (string | number | boolean | null)[] =[
    true,
    "me",
    10,
    "see",
    null
]
//or
let am : string[] = ["see", "lucia", "cute"]

//to insert/change an item in an array
am [1] ="lucia"
console.log(am)
am.push("chidera")//pushes item inside the array


//turple
let arr2: [string, number, number,  ] = ["peter", 102, 123 ]; 

arr2.push(34);

console.log(arr2)
// console.log(arr2 [3])

//declaring a global or reuseable data type
//to make it optional, you use the ?
type myData = {
    name: string,
    qty? : number,
    isReady: boolean,
};

// let stuck:myData ={
//     name:"orange",
//     qty: 15,
//     isReady:true
// }

//undefined is also a data type
// using the pipe or | allows you choose between a data type
//e.g pagination : string | number ......so the user can either input a string or number



//to extend a data instaed of using type.....😍😘🥰

interface luciana extends myData{
    user: any[]
};

interface presh extends luciana{
    product: any[]
}

let stuck: presh ={
    name:"orange",
    qty: 15,
    isReady:true,
    user:["lulu"],
    product:[10]
}

console.log(stuck)

//reverse codelab on the terminal using typescript


// const mmm = (s : string) =>{
//     return s.split("").reverse().join("")
    

// }

// console.log("codelab")


// const myString = (x: string): string =>{
//     let xx: string[] = x.split("")
//     let xxx : string = xx.reverse().join("")
//     return parseInt(xxx)
// }
let newFunc = (x: string) : number=>{
    let mytext : string[] = x.split("")
    let newFile: string = mytext.reverse().join("")

    return parseInt (newFile)
};

console.log(newFunc("33567"))

// console.log(xxx("codelab"))

const getData = (x: any[]): void => {
    let index = Math.floor(Math.random() * x.length);
    let d = x[index];
    console.log(d)

}
getData([1,2,3,4,5])

//a function that sum 5 values and another function add 18% of the total sum

const getData2 = <Arr>(x : Arr[]):void =>{
    let index2 = Math.floor(Math.random()*x.length);
    let b = x[index2]
    console.log(b)
}
const arr1 = [1,2,3,4,5,6,7]
const arr3 = ["pee", "cee", "tee"]

getData2(arr3)


class TheName{
    name : string;
    color : string;
    ripe : boolean;
    qty : number

    constructor(name: string, color:string, ripe:boolean, qty:number){
        this.name = name;
        this.color = color;
        this.ripe = ripe;
        this.qty = qty;
    }
        review(){
            console.log(`this lady ${this.name} has ${this.color} and she is ${this.ripe}`)
        }
}

const newBuild = new TheName ("lucy", "pink", true, 25)
newBuild.review()
console.log(newBuild.ripe)

class Student{
    score: number[]
    name : string
    constructor(score: number[], name: string){
        this.score = score;
        this.name = name;
    }

    sumUp(){
       let x = this.score.reduce((a,b) => a + b);
        return x;
    }

    avr(){
        let sum = this.sumUp();
        let av = sum / this.score.length;
        return av;
    }
}


const Try = new Student([32,34,43], "Lulu")
console.log(Try.sumUp())
// console.log("hello")
//string,boolean,object,number
// it allows you define your own data type and shows you your error even before runtime
//boolean
// let isMe: boolean = false
// isMe = true
//object
var fruit = {
    name: "orange",
    heigth: "tall",
    beautiful: "yes"
};
console.log(fruit);
//array
var arr = [
    true,
    "me",
    10,
    "see",
    null
];
//or
var am = ["see", "lucia", "cute"];
//to insert/change an item in an array
am[1] = "lucia";
console.log(am);
am.push("chidera"); //pushes item inside the array
//turple
var arr2 = ["peter", 102, 123];
arr2.push(34);
console.log(arr2);
;
var stuck = {
    name: "orange",
    qty: 15,
    isReady: true,
    user: ["lulu"],
    product: [10]
};
console.log(stuck);
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
var newFunc = function (x) {
    var mytext = x.split("");
    var newFile = mytext.reverse().join("");
    return parseInt(newFile);
};
console.log(newFunc("33567"));
// console.log(xxx("codelab"))
var getData = function (x) {
    var index = Math.floor(Math.random() * x.length);
    var d = x[index];
    console.log(d);
};
getData([1, 2, 3, 4, 5]);
//a function that sum 5 values and another function add 18% of the total sum
var getData2 = function (x) {
    var index2 = Math.floor(Math.random() * x.length);
    var b = x[index2];
    console.log(b);
};
var arr1 = [1, 2, 3, 4, 5, 6, 7];
var arr3 = ["pee", "cee", "tee"];
getData2(arr3);
var TheName = /** @class */ (function () {
    function TheName(name, color, ripe, qty) {
        this.name = name;
        this.color = color;
        this.ripe = ripe;
        this.qty = qty;
    }
    TheName.prototype.review = function () {
        console.log("this lady ".concat(this.name, " has ").concat(this.color, " and she is ").concat(this.ripe));
    };
    return TheName;
}());
var newBuild = new TheName("lucy", "pink", true, 25);
newBuild.review();
console.log(newBuild.ripe);
var Student = /** @class */ (function () {
    function Student(score, name) {
        this.score = score;
        this.name = name;
    }
    Student.prototype.sumUp = function () {
        var x = this.score.reduce(function (a, b) { return a + b; });
        return x;
    };
    Student.prototype.avr = function () {
        var sum = this.sumUp();
        var av = sum / this.score.length;
        return av;
    };
    return Student;
}());
var Try = new Student([32, 34, 43], "Lulu");
console.log(Try.sumUp());

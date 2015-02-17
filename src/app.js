import {myFunction,myFunction2} from './modules/myFunction'
import Animal from './model/Animal'
import Bird from './model/Bird'

let app = function () {
//module
myFunction()
myFunction2()
//class
let elephant = new Animal("elephant","slow")
let eagle = new Bird("eagle","fast")
let chiken = new Bird("chiken","slow","walks")
console.log(elephant.toString())
console.log(eagle.toString())
console.log(chiken.toString())
//multiline strings
console.log(`line1
line2
line3`)
//for ... of
let myArray = [1,2,3]
for(let item of myArray){
	console.log(item)
}
//Sets Maps
let set = new Set()
set.add("hello").add("goodbye").add("bye")
console.log("size "+set.size + ", hello presence "+set.has("hello"))

let map = new Map()
map.set("name", "someone") 
map.set(45, "Fortry five") 
map.set(undefined, "undefined")
let func = function(){console.log("i'm a function")}
map.set(func, "my key is a function")

console.log(map.has("name")) //true
console.log(map.has(45)) //true
map.delete(45)
console.log(map.has(45)) //false
console.log(map.get(func));
//arrow
let greater = (a,b) => a > b ? a : b
let greater_old = (function(a,b){return (a > b) ? a : b})

console.log(greater(1,2))
console.log(greater_old(6,4))
//iterable string
let string = "ABC"
let iterator = string[Symbol.iterator]()

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
//custom Iterator
let iterable = new String("ABC")
iterable[Symbol.iterator] = function(){
	let index = 0
	return{
		next : function(){
			return index < iterable.length ? {"letter" : iterable.charAt(index++).toLowerCase(), "end" : false} : {end : true}
		}
	}
}

let iterator1 = iterable[Symbol.iterator]()

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
//rest parameters 
let stringifyy = function(...args){
	console.log(args.join(' and '));
}
stringifyy("lemon","orange","tomato","apple")

}

app();
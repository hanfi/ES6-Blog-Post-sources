class Animal {
    constructor(name,speed) {
        this.name = name
        this.speed = speed
    }
    toString() {
        return "the " + this.name + " is " + this.speed
    }
}
export default Animal

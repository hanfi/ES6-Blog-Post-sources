import Animal from './Animal'

class Bird extends Animal{
	constructor(name,speed,movement="flies"){
		super(name,speed)
		this.movement = movement
	}
	toString(){
		return super.toString() + " and it "+this.movement
	}
}
export default Bird
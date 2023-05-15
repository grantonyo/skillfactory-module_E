// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class Electro { // класс "электроприборы"
	constructor(type){
		this.type = type;
		this.plugedIn = 'False'
	}
	
	switch(){ // переключатель(включение/выключение прибора) 
		if (this.plugedIn == 'False'){
			this.plugedIn = 'True'
			console.log(`You switched ${this.type} on`)
		}else {
			this.plugedIn = 'False'
			console.log(`You switched ${this.type} off`)
		}
	}
	
	getPower(power){ // определние потребялемой мощности 
		this.power = power;
		console.log(`Power of this ${this.type} is ${power} KWh`)
	}
}

class ElectricKettle extends Electro{
	constructor(capacity){
      super();
      this.type = 'kettle';
      this.capacity = capacity; // capacity in liters
      this.showCapacity = function(){
        console.log(`Capacity of this ${this.type} is ${this.capacity} liters`)
      }	
    }
}

class Tablet extends Electro{
   constructor(os){
      super();
      this.type = 'tablet';
      this.os = os; // operating system
      this.showOS = function(){
        console.log(`This ${this.type} uses ${this.os} operting system`)
      }
  }
}


kettle1 = new ElectricKettle(2);
kettle1.switch();
kettle1.switch();
kettle1.showCapacity();
kettle1.getPower(2);

tablet1 = new Tablet('Android');
tablet1.switch();
tablet1.switch();
tablet1.showOS();
tablet1.getPower(0.05);

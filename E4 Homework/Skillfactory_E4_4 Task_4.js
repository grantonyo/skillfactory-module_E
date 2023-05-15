// Задание 4.
//Определить иерархию электроприборов. 
// Включить некоторые в розетку. 
// Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.
// План:
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой.

function Electro(type){ // класс "электроприборы"
  this.type = type,
  this.plugedIn = 'False'
}

Electro.prototype.switch = function (){// переключатель (включение/выключение прибора) 
    if (this.plugedIn == 'False'){
       this.plugedIn = 'True'
       console.log(`You switched ${this.type} on`)
    }else {
       this.plugedIn = 'False'
       console.log(`You switched ${this.type} off`)
    }
}

Electro.prototype.getPower = function (power){// определние потребялемой мощности 
    this.power = power,
    console.log(`Power of this ${this.type} is ${power} KWh`)
}


function ElectricKettle (capacity) {
  this.type = 'kettle',
  this.capacity = capacity // capacity in liters
  this.showCapacity = function(){
    console.log(`Capacity of this ${this.type} is ${this.capacity} liters`)
  }
}
  
ElectricKettle.prototype = new Electro();

function Tablet (os) {
  this.type = "tablet",
  this.os = os // operating system
  this.showOS = function(){
    console.log(`This ${this.type} uses ${this.os} operting system`)
  }
}

Tablet.prototype = new Electro();


const kettle1 = new ElectricKettle("2");
const tablet1 = new Tablet("Android");

kettle1.switch();
kettle1.switch();
kettle1.getPower(1);
kettle1.showCapacity();
tablet1.switch();
tablet1.switch()
tablet1.getPower(0.05);
tablet1.showOS();
// Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль 
// все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

const obj1 = {a:1, b:2, c:3};

const func1 = function (object) {
  for (let key in object ){
    if (object.hasOwnProperty(key)){
      console.log(key + ': ' + obj1[key] )
    }
  }
}

func1(obj1) // "a: 1", "b: 2", "c: 3"


// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, 
// а затем проверяет есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

const obj2 = {a:1, b:2, c:3};

const func2 = function (str, object) {
  console.log(str in object)
}

func2('a', obj2) //True
func2('d', obj2) //False


// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function createObj(){
}

const obj3 = new createObj();

console.log(obj3)


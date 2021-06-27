"use strict";
class Door {
}
class SecurityDoor extends Door {
    alert() {
        console.log('SecurityDoor alert');
    }
}
class Car {
    alert() {
        console.log('Car alert');
    }
}
// 創建利用Car類別作為原型的新物件
const car = new Car();
car.alert();

class Test_00 {
    public n: number;
    constructor(a: number) {
        this.n = a;
    }
    isEven(): boolean {
        return this.n % 2 === 0;
    }
}

// Task 01
// Создан класс Test_00, изучите код ниже и разберитесь, почему есть баг между ожидаемым результатом и полученным. 
 
const obj_01 = new Test_00(5);
obj_01.n = 10;

// В конструкторе внесено 5, и ожидаем что isEven() даст false
// однако вмешательство программиста перезаписало n и теперь 
// результат - true
console.log(obj_01.isEven());



// Task 02
// Давайте напишем копию класса Test_00, т.е. создадим класс Test_01 в него скопируем код из Test_00 и заменим public на private. 

// тут создаем Test_01
class Test_01 {
    private n: number;
  
    constructor(a: number) {
      this.n = a;
    }
  
    isEven(): boolean {
      return this.n % 2 === 0;
    }
  }
  

// проверяем
const obj_02 = new Test_01(5); 
// теперь попытка изменить n напрямую приведет к ошибке. Убедитесь в этом:
//  obj_02.n = 10;
console.log(obj_02.isEven()); 



// Task 03
// Создайте класс Test_03, который содержит приватное свойство _taxIndex - массив чисел [0.05, 0.21] и приватное свойство _isResident по умолчанию равное true. И свойство приватное _cost - число, равное нулю. Создайте конструктор, который принимает свойство isResident и сost в указанном порядке. Напишите метод taxSum, который  возвращает т сумму налога с  указанной _cost. Для резидента используется коєффициент 0.05 из массива, для не резидента - 0.21. 

// тут пишем класс
class Test_03{
    private _taxIndex: number[] = [0.05,0.21];
    private _isResident : boolean = true;
    private _cost : number = 0;

      constructor(_isResident: boolean, _cost : number) {
          this._isResident = _isResident;
          this._cost = _cost;
      }

      taxSum() : number {
        if(this._isResident) return  this._taxIndex[0] * this._cost;
        else return this._taxIndex[1] * this._cost;
        
      }
}


// Для проверки кода снимите комментарий ниже
const obj_03 = new Test_03(true, 1000);
console.log(obj_03.taxSum()); // ожидаю 50

// Task 04
// Итак, мы выяснили зачем нужны private свойства. Давайте закрепим. Private свойства доступны только внутри класса где они объявлены. Проверим. Создайте класс Test_04 содержащий private свойство _n - число равное 200 и метод showN () в котором делается return this._n. Запустите проверку.

class Test_04{
    private _n : number = 200;

      showN() : number {
        return this._n;
      }
}

// Для проверки кода снимите комментарий ниже
const obj_04 = new Test_04();
// console.log(obj_04._n); // приводит к ошибке
console.log(obj_04.showN()); // покажет результат

// Task 05
// Посмотрим как private свойство ведет себя в наследуемых классах. Снимите комментарий с класса Test_05. Изучите ошибку... Ошибка возникает потому что приватное свойство видно только в классе где объявлено. 

// тут пишем класс
   
// class Test_05 extends Test_04 {
//     showN2 () : number {
//         return 300 + this._n;
//     }
// }

// Task 06
// Давайте изучим как работает protected свойства. Как гласит теория, protected свойство доступно как внутри класса, так и в наследуемых классах. Создайте класс Test_06 содержащий protected свойство _n - число равное 200 и метод showN () в котором делается return this._n. Запустите проверку.

// тут пишем класс
class Test_06 {
    protected _n :number = 200;

      showN() : number {
        return this._n;
      }
}

// Для проверки кода снимите комментарий ниже
const obj_06 = new Test_06();
// console.log(obj_04._n); // приводит к ошибке
console.log(obj_06.showN()); // покажет результат
// как видите здесь в поведении нет различий между private и protected

// Task 7. 
// Напишите класс Test_07, наследующийся от Test_06. Класс Test_07  содержит метод showN2, возвращающий this._n. 
class Test_07 extends Test_06{
    showN2(): number {
       return this._n;
    }
}
// тут пишем класс


// Для проверки кода снимите комментарий ниже
const obj_07 = new Test_07();
// console.log(obj_07._n); // приводит к ошибке
console.log(obj_07.showN()); // покажет результат
console.log(obj_07.showN2()); // покажет результат
// как видите здесь и есть вся соль отличия private и protected. Protected доступен в классах наследниках (внутри класса);

// Task 08
// Теперь давайте поработаем с конструктором. Создайте класс Test_08, задайте ему private свойство _count - число. Напишем метод step(), который увеличивает _count на единицу. Напишем метод showCount, который возвращает _count. Напишите в классе конструктор, который задает начальное значение _count из аргумента.

class Test_08{
    private _count: number;
    constructor(_count: number) {
        this._count = _count;
    }
     step(): number{
    return    this._count++;
  
     }
     showCount() : number {
        return this._count;
     }
}
// Для проверки кода снимите комментарий ниже
const obj_08 = new Test_08(11);
obj_08.step();
obj_08.step();
obj_08.step();
console.log(obj_08.showCount());

// Task 09
// Создайте класс Test_09 наследник класса Test_08. Запустите код для проверки. Сделайте выводы.

class Test_09 extends Test_08{}

// Для проверки кода снимите комментарий ниже

const obj_09 = new Test_09(100);
obj_09.step();
obj_09.step();
console.log(obj_09.showCount());

// Task 10
// Давайте теперь проделаем то же, но с protected. Создайте класс Test_10, задайте ему protected свойство _count - число. Напишем метод step(), который увеличивает _count на единицу. Напишем метод showCount, который возвращает _count. Напишите в классе конструктор, который задает начальное значение _count из аргумента.

class Test_10{
    protected _count: number;
    constructor(_count:number){
        this._count = _count;
    }
    step():number {
        return this._count++;
    }
    showCount() : number {
        return this._count;
    }
}
// тут пишем класс


// Для проверки кода снимите комментарий ниже
const obj_10 = new Test_10(205);
obj_10.step();
obj_10.step();
obj_10.step();
console.log(obj_10.showCount());

// Task 11
// Теперь наследуйтесь от Test_10 и создайте класс Test_11. В нем создайте step5() метод, который увеличивает _count на 5.

class Test_11 extends Test_10{
    step5(): number {
         return this._count+= 5;
    }
}


// Для проверки кода снимите комментарий ниже
const obj_11 = new Test_11(505);
obj_11.step5();
obj_11.step5();
console.log(obj_11.showCount());
// обратите внимание, напрямую оперировать в классе наследнике со свойством private не получилось бы
// а вот protected позволяет в классе наследнике манипулировать protected напрямую.


// Task 12
// Создайте класс Test_12, содержащий свойство public n число равное нулю. Создайте метод rand, private, который присваивает свойству n случайное число от 0 до 100. Запускайте данный метод в конструкторе.
class Test_12{
    public n : number = 0;
    constructor() {
        this.rand();
    }
    private rand() : number{
        this.n = Math.floor(Math.random() * 101);
        return this.n;
    }
    
}
// тут пишем класс

// Для проверки кода снимите комментарий ниже
const obj_12 = new Test_12();
console.log(obj_12.n);
// а вот такой запуск выдаст ошибку
// obj_12.rand();


// Task 13
// Снимите комментарий с класса Test_13 - здесь мы в классе наследнике пытаемся обратиться к private методу. И получаем ошибку. Изучите ошибку. Закомментируйте класс обратно.

// class Test_13 extends Test_12 {
//     constructor () {
//         super();
//     }
//     test () : void {
//         this.rand();
//     }
// }


// Task 14
// Проделаем то же с protected. Есть класс Test_14. Создайте класс Test_141, который наследуется от класса Test_14. Реализуйте в нем метод test(), который реализует код:
//this.rand()
//return this.n;

class Test_14 {
    public n: number = 0;
    protected rand(): void {
        this.n = Math.floor(Math.random() * 101);
    }
    constructor() {
        this.rand();
    }
}

// тут пишем класс

// Для проверки кода снимите комментарий ниже
// const obj_14 = new Test_141();
// console.log(obj_14.test());


// Task 15
// Создайте класс Test_15 содержащий свойства private num1 и protected num2. С помощью конструктора заполните данные числа. Напишите метод isBig() возвращающий большее из двух чисел. 

// тут пишем класс

// Для проверки кода снимите комментарий ниже
// const obj_15 = new Test_15(22, 17);
// console.log(obj_15.isBig());

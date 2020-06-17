// Ex1

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    toStringAuthor() {
        console.log(this._name + this._email + this._gender)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value
    }
}


class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    toStringBook() {
        console.log(this._title + "-" + this._author.name + "-" + this._price + "-" + this._quantity)
    }

    getProfit() {
        let profit = this._price * this._quantity
        console.log(profit)
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (value instanceof Author) {
            this._author = value
        }
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value
    }
}

// let a = new Author("aname", "aemail", "agender")
//
// let b = new Book("title", a, 4, 8)
//
// let c = new Book("title", "notObjectAuthor", 4, 8)
//
//
// console.log(b.getProfit())


// Ex 2

class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    credit(amount) {
        return this._balance = amount + this._balance
    }

    debit(amount) {
        if (amount < this._balance) {
            return this._balance = this._balance - amount
        } else {
            console.log("“Amount exceeded\n" +
                "balance.”")
        }
    }

    transferTo(anotherAccount, amount) {
        if (amount < this._balance) {
            anotherAccount.credit(amount)
            return this._balance = this._balance - amount
        } else {
            console.log("“Amount exceeded\n" +
                "balance.”")
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.toStringAcount() == accountSecond.toStringAcount()
    }


    toStringAcount() {
        return (this._id + "-" + this._name + "-" + this._balance)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value
    }


    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value
    }

    get id() {
        return this.id;
    }

    set id(value) {
        this._id = value
    }
}

//
// let a= new Account("1", "accountA", 2000);
//
// let b= new Account("2", "accountB", 4000);
//
// let c= new Account("3", "accountC", 8000);
//
//
// console.log(b.toStringAcount())


// Ex 3

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }


    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    toStringAcount() {
        return (this._firstName + "-" + this._lastName + "-" + this._gender + "-" + this._age)
    }
}

class Student extends Person {

    constructor(firstName, lastName, gender, age, program, year, fee) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._year = year;
        this._fee = fee;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        this._fee = value;
    }

    passExam(program, grade) {
        if (this._program[0] == program) {
            this._program[1] = grade
        }
        if (grade > 50) {
            this._year++
        }
    }

    toStringAcount() {
        return (this._firstName + "-" + this._lastName + "-" + this._gender + "-" + this._age + "-" + this._program + "-" + this._year + "-" + this._fee)
    }

}

class Teacher extends Person {
    get program() {
        return this._program;
    }

    set program(value) {
        this._program = value;
    }

    get pay() {
        return this._pay;
    }

    set pay(value) {
        this._pay = value;
    }

    constructor(firstName, lastName, gender, age, program, pay) {
        super(firstName, lastName, gender, age);
        this._program = program;
        this._pay = pay;
    }

    toStringAcount() {
        return (this._firstName + "-" + this._lastName + "-" + this._gender + "-" + this._age + "-" + this._program + "-" + this._pay)
    }
}



// let a= new Person("pers", "pers", "pers", 28);
//
// let b= new Student("stud", "stud", "stud", 28, ["prog1",0],1,"fee200");
//
// let c= new Teacher("teahc", "teahc", "teahc", 28, "prog1", "pat3000");


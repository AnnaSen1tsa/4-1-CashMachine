//Задача на 8 баллов
/*
let card1 = {
    number: 1,
    bank: "PRIVAT",
    name: "Vasya",
    surname: "Sharicov",
    code: 1111,
    account: 2000,
};

let card2 = {
    number: 2,
    bank: "PRIVAT",
    name: "Olya",
    surname: "Scvortsova",
    code: 4321,
    account: 500,
};

let cashMachine = {
    number: 3,
    ShowBalance: function(card) {
        alert("You have " + card.account + "$ on your account");
    },
    TakeTheMoney: function(card) {
        alert("You have " + card.account + "$ on your account");
        let userCode = +prompt("Enter the code");
        if (userCode == card.code) {
            let userSum = +prompt("Enter the sum, please!");
            //alert(card.account -= userSum);
            alert("You have " + (card.account -= userSum) + "$ on your account");
        }
        else {
            alert("Smth wrong!");
        }
    }
};

cashMachine.TakeTheMoney(card2);
//cashMachine.ShowBalance(card2);
//cashMachine.TakeTheMoney(card2);
//cashMachine.TakeTheMoney(card1);
*/

//Задача на 11 баллов
let card1 = {
    number: 1234,
    bank: "PRIVAT",
    name: "Vasya",
    surname: "Sharicov",
    code: 1111,
    account: 2000,
};

let card2 = {
    number: 1235,
    bank: "PRIVAT",
    name: "Olya",
    surname: "Scvortsova",
    code: 2222,
    account: 500,
};

let cashMachine = {
    number: 1,
    ShowBalance: function(card) {
        if (userNum == card.number, userCode == card.code) {
            alert("You have " + card.account + "$ on your account");
        }
    },
    TakeTheMoney: function(card) {
        let userNum = +prompt("Enter the number");
        let userCode = +prompt("Enter the code");
        if (userNum == card.number, userCode == card.code) {
            alert("You have " + card.account + "$ on your account");
            let userSum = +prompt("Enter the sum, please!");
            //alert(card.account -= userSum);
            alert("You have " + (card.account -= userSum) + "$ on your account");
        }
        else {
            alert("Smth wrong!");
        }
    }
};

cashMachine.TakeTheMoney(card1);
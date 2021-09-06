const sayed = {
    id: 453,
    name: 'Sayed Ahmed',
    major: 'Mathematics',
    money: 4564,
    sayedTreat: function (money, tips) {
        this.money = this.money - money - tips;
        console.log(this)
        return this.money
    },
}

const ahmed = {
    id: 456,
    name: 'Ahmed Mia',
    money: 5000
}
const kalam = {
    id: 458,
    name: 'Kalam Mia',
    money: 50000
}

/* sayed.sayedTreat(300, 50)
const ahmedTreat = sayed.sayedTreat.bind(ahmed);
ahmedTreat(555, 55)
ahmedTreat(800, 100)
sayed.sayedTreat(500, 43)

const kalamTreat = sayed.sayedTreat.bind(kalam)
kalamTreat(567, 8) */


const student = {
    id: 453,
    name: 'Sayed Ahmed',
    major: 'Mathematics',
    money: 4564,
    subject: ['English', 'Math 101', 'Calculus'],
    bestFriend: {
        id: 456,
        name: 'Kabir Ahmed',
        major: 'Mathematics',
        subject: ['English', 'Math 101', 'Calculus']
    },
    isExam: function () {
        console.log(this.bestFriend.name, 'taking exam')
    },
    giveTreat: function (food, tips) {
        this.money = this.money - food - tips;
        return this.money
    },
}
student.isExam();
const remaining = student.giveTreat(566, 45);
console.log(remaining)
const pc = { color: 'black', keyboard: true, mouse: true, keyboardColor: 'red' };

const getKeys = Object.keys(pc)
const getValues = Object.values(pc)
const getPairs = Object.entries(pc)
// delete any object
delete pc.keyboardColor;
// seal object- can update but not delete or add new object
Object.seal(pc)
// freeze object- can't update and delete and add new object
Object.freeze(pc)
console.log(getKeys)
console.log(getValues)
console.log(getPairs)
console.log(pc)
/* 
for(let i = 0; i <= 10 i++){}
for(const name of names){} - on array
for(const name in names){} - on object
*/
const pc = { color: 'black', keyboard: true, mouse: true, keyboardColor: 'red' };
for (const prop in pc) {
    // console.log(prop, pc[prop])
}

const keys = Object.keys(pc)
for (const prop of keys) {  // keys is a array, so used for of
    console.log(prop, pc[prop])
}
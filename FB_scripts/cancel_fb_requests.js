javascript: 
// var inputs = document.querySelectorAll('span.x1lliihq.x6ikm8r.x10wlt62.x1n2onr6.xlyipyv.xuxw1ft');
// console.log(inputs)


var inputs = document.getElementsByClassName('x9f619 x1n2onr6 x1ja2u2z x78zum5 x2lah0s x1qughib x1qjc9v5 x1a02dak x1q0g3np xn6708d x1ye3gou xexx8yu xcud41i x139jcc6 x4vbgl9 x1rdy4ex');
console.log(inputs)

for (let i = 0; i < (inputs.length -5); i++) {
    inputs[i].lastChild.lastChild.click()
}

// inputs[0].lastChild
/* for (let elm in inputs) {
    console.log(elm.lastChild)
} */

inputs[0].lastChild.click() // works
inputs[0].lastChild.lastChild.click()   //perfect
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



// dec 2023 update
// -=-=-=-=-=-=-=-=- DELETE -=-=-=-=-=-=-=-=-=-=-
var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs)

// ERR check : for no mutual friends
for (let i = 0; i < (inputs.length -1); i++) {
    // first check any mutual friends
    if(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2]){
        console.log(parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText.split(' ')[0]))
        let mutual_friends = parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText.split(' ')[0])
        if (mutual_friends < 100) {     // delete all requests less than 100-mutual friends
            inputs[i].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[4].click()   // DELETE works
        } 
    }
}




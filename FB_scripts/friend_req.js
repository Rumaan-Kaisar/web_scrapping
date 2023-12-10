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


//     ####    Confirm Friend Requests    ####    

// grab the immidiate class containing : name, buttons, mutual friend info
class="x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj"

var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs)

// confirm button
<span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Confirm</span>
inputs[0].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click()   // works

// friends check
<span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa">3 mutual friends</span>
inputs[1].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2]

inputs[1].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText.split(" ")



txt = inputs[1].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText
txt_arr_num = parseInt(txt.split(' ')[0])

if (txt_arr_num > 100) {
    inputs[0].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click()   // works
}





//     ####    Send Friend Requests    ####    
<div class="x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj"></div>
// mutual friends check
<span class="x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa">3 mutual friends</span>

// confirm button
<span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Confirm</span>
<span class="x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft">Add friend</span>





// ---------------------    clean code    ---------------------

// -=-=-=-=-=-=-=-=-    Confirm  Friend Requests    -=-=-=-=-=-=-=-=-
var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs)

// ERR check : for no mutual friends
for (let i = 0; i < (inputs.length -1); i++) {
    // first check any mutual friends
    if(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2]){
        console.log(parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText.split(' ')[0]))
        let mutual_friends = parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[2].innerText.split(' ')[0])
        if (mutual_friends > 100) {
            inputs[i].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click()   // works
        } 
    }
}



// -=-=-=-=-=-=-=-=-    Send  Friend Requests    -=-=-=-=-=-=-=-=-
var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs)

// ERR check : for no mutual friends
for (let i = 0; i < (inputs.length -1); i++) {
    // first check any mutual friends
    if(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1]){
        console.log(parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0]))
        let mutual_friends = parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0])
        if (mutual_friends > 100) {
            inputs[i].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click()   // works
        } 
    }
}




// Below is sample code which uses ES6’s async/await to resume execution of a function after a delay.
/* 
const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

const sample = async () => {
  console.log('a');
  console.log('waiting...')
  let delayres = await delay(3000);
  console.log('b');
};
sample();
 */



// Below is modified cod ewith random

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

const sample = async () => {
    console.log('a');
    console.log('waiting...')
    let delayres = await delay(Math.random()*30000);
    console.log('b');
};

sample();



// -=-=-=-=-=-=-=-=-    Send  Friend Requests (with wait)    -=-=-=-=-=-=-=-=-
// wait mechanism
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

const sleep_baby = async () => {
    console.log('a');
    console.log('waiting...');
    let delayres = await delay(Math.random()*50000);
    console.log('b');
};


// sending request
var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs);

// ERR check : for no mutual friends
for (let i = 0; i < (inputs.length -1); i++) {
    // first check any mutual friends
    if(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1]){
        console.log(parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0]));
        let mutual_friends = parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0]);
        if (mutual_friends > 100) {
            inputs[i].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click();   // works
        } 
    }
    sleep_baby();   // Issue: delayed after all click happened :(
}




// ####################################       fixing Waiting issues       ####################################

// -=-=-=-=-=-=-=-=-    Send  Friend Requests (with wait)    -=-=-=-=-=-=-=-=-
// wait mechanism
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};

const sleep_baby = async (i) => {
    console.log('a');
    console.log('waiting...');
    let delayres = await delay(Math.random()*50000);
    console.log('b');
    inputs[i].getElementsByClassName('x1lliihq x6ikm8r x10wlt62 x1n2onr6 xlyipyv xuxw1ft')[1].click();   // works
};


// sending request
var inputs = document.getElementsByClassName('x1q0q8m5 x1qhh985 xu3j5b3 xcfux6l x26u7qi xm0m39n x13fuv20 x972fbf x9f619 x78zum5 x1r8uery x1iyjqo2 xs83m0k x1qughib x11i5rnm x1mh8g0r x2lwn1j xeuugli x4uap5 xkhd6sd xz9dl7a xsag5q8 x1n2onr6 x1ja2u2z x6s0dn4 x1q0g3np x1a02dak x4cne27 xifccgj');
console.log(inputs);

// ERR check : for no mutual friends
for (let i = 0; i < (inputs.length -1); i++) {
    // first check any mutual friends
    if(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1]){
        console.log(parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0]));
        let mutual_friends = parseInt(inputs[i].getElementsByClassName('x193iq5w xeuugli x13faqbe x1vvkbs x1xmvt09 x1nxh6w3 x1sibtaa xo1l8bm xi81zsa')[1].innerText.split(' ')[0]);
        if (mutual_friends > 100) {
            sleep_baby(i);  // also works !!
        } 
    }
}

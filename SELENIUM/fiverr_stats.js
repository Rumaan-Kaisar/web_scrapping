
<div class="checkbox-list"><label class="tKumvjp LFMwg3P qFWrIB7 checkbox"><input type="checkbox" name="top_rated_seller" data-testid="checkbox-filter-top_rated_seller" value="top_rated_seller"><span class="YgpbAto checkmark-box"><span class="glAQDp5 QcGQdIt" aria-hidden="true" style="width: 10px; height: 10px;"><svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span></span><div class="inner-checkbox"><div class="label" style="width: 112px;"><span>Top Rated Seller</span></div><span class="count">(832)</span></div></label><label class="tKumvjp LFMwg3P qFWrIB7 checkbox"><input type="checkbox" name="level_two_seller" data-testid="checkbox-filter-level_two_seller" value="level_two_seller"><span class="YgpbAto checkmark-box"><span class="glAQDp5 QcGQdIt" aria-hidden="true" style="width: 10px; height: 10px;"><svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span></span><div class="inner-checkbox"><div class="label" style="width: 49px;"><span>Level 2</span></div><span class="count">(20,807)</span></div></label><label class="tKumvjp LFMwg3P qFWrIB7 checkbox"><input type="checkbox" name="level_one_seller" data-testid="checkbox-filter-level_one_seller" value="level_one_seller"><span class="YgpbAto checkmark-box"><span class="glAQDp5 QcGQdIt" aria-hidden="true" style="width: 10px; height: 10px;"><svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span></span><div class="inner-checkbox"><div class="label" style="width: 47px;"><span>Level 1</span></div><span class="count">(14,041)</span></div></label><label class="tKumvjp LFMwg3P qFWrIB7 checkbox"><input type="checkbox" name="na" data-testid="checkbox-filter-na" value="na"><span class="YgpbAto checkmark-box"><span class="glAQDp5 QcGQdIt" aria-hidden="true" style="width: 10px; height: 10px;"><svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg"><path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path></svg></span></span><div class="inner-checkbox"><div class="label" style="width: 74px;"><span>New Seller</span></div><span class="count">(155,621)</span></div></label></div>





// Initialize an empty array to store label objects
var labelObjects = [];

// Selecting elements by class name
var checkboxList = document.querySelector('.checkbox-list');

// Selecting elements by tag name
var labels = checkboxList.getElementsByTagName('label');

// Loop through each label element
for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    
    // Get the text content of each label
    var labelText = label.querySelector('.inner-checkbox .label span').textContent;
    
    // Get the count content of each label
    var count = label.querySelector('.inner-checkbox .count').textContent;
    
    // Create a label object with text and count properties
    var labelObject = {
        label: labelText,
        count: count
    };
    
    // Push the label object to the labelObjects array
    labelObjects.push(labelObject);
}

// Print the array of label objects
console.log(labelObjects);

[
    {
        "label": "Top Rated Seller",
        "count": "(832)"
    },
    {
        "label": "Level 2",
        "count": "(20,807)"
    },
    {
        "label": "Level 1",
        "count": "(14,041)"
    },
    {
        "label": "New Seller",
        "count": "(155,621)"
    }
]



// -----   as list   ----------
// Selecting elements by class name
var checkboxList = document.querySelector('.checkbox-list');

// Selecting elements by tag name
var labels = checkboxList.getElementsByTagName('label');

// Loop through each label element
for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    
    // Get the text content of each label
    var labelText = label.querySelector('.inner-checkbox .label span').textContent;
    
    // Get the count content of each label
    var count = label.querySelector('.inner-checkbox .count').textContent;
    
    // Print the text content of each label
    console.log("Label Text:", labelText);
    console.log("Count:", count);
}




// -=-=-=-=-=-=-=-=- FIVERR -=-=-=-=-=-=-=-=-=-=-
// Select all elements with the class name 'more-filter-menu'
var sellerDetailsMenus = document.querySelectorAll('.more-filter-menu');

// Click on the second element with class name 'more-filter-menu'
setTimeout(function() {
    sellerDetailsMenus[1].click(); // Click on the second element
}, 2000); // Wait for 2000 milliseconds (2 seconds)


// Initialize an empty array to store label objects
var labelObjects = [];

// Selecting elements by class name
var checkboxList = document.querySelector('.checkbox-list');

// Selecting elements by tag name
var labels = checkboxList.getElementsByTagName('label');

// Loop through each label element
for (var i = 0; i < labels.length; i++) {
    var label = labels[i];
    
    // Get the text content of each label
    var labelText = label.querySelector('.inner-checkbox .label span').textContent;
    
    // Get the count content of each label
    var count = label.querySelector('.inner-checkbox .count').textContent;
    
    // Create a label object with text and count properties
    var labelObject = {
        label: labelText,
        count: count
    };
    
    // Push the label object to the labelObjects array
    labelObjects.push(labelObject);
}

// Select the element with the class 'number-of-results'
var numberOfResults = document.querySelector('.number-of-results');

// Print the text content of the selected elements
// console.log("Number of results:", numberOfResults.textContent);


var totalSeller = {
    label: 'Total seller',
    count : document.querySelector('.number-of-results').textContent

};
labelObjects.push(totalSeller);


// Print the array of label objects
console.log(labelObjects);





// ===========      stats      ===========
{
    key: 'logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(963)"
        },
        {
            "label": "Level 2",
            "count": "(24,313)"
        },
        {
            "label": "Level 1",
            "count": "(16,637)"
        },
        {
            "label": "New Seller",
            "count": "(214,578)"
        },
        {
            "label": "Total seller",
            "count": "250,000+ services available"
        }
    ]
},
{
    key: 'logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(1,331)"
        },
        {
            "label": "Level 2",
            "count": "(33,194)"
        },
        {
            "label": "Level 1",
            "count": "(22,317)"
        },
        {
            "label": "New Seller",
            "count": "(232,131)"
        },
        {
            "label": "Total seller",
            "count": "280,000+ services available"
        }
    ]
},
{
    key: 'logo designer',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(830)"
        },
        {
            "label": "Level 2",
            "count": "(20,805)"
        },
        {
            "label": "Level 1",
            "count": "(14,040)"
        },
        {
            "label": "New Seller",
            "count": "(155,698)"
        },
        {
            "label": "Total seller",
            "count": "190,000+ services available"
        }
    ]
},
{
    key: 'wordmark logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(6)"
        },
        {
            "label": "Level 2",
            "count": "(192)"
        },
        {
            "label": "Level 1",
            "count": "(212)"
        },
        {
            "label": "New Seller",
            "count": "(1,030)"
        },
        {
            "label": "Total seller",
            "count": "1,400+ services available"
        }
    ]
},
{
    key: 'best logo designer',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(682)"
        },
        {
            "label": "Level 2",
            "count": "(16,083)"
        },
        {
            "label": "Level 1",
            "count": "(11,304)"
        },
        {
            "label": "New Seller",
            "count": "(84,843)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'logo redesign',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(3)"
        },
        {
            "label": "Level 2",
            "count": "(428)"
        },
        {
            "label": "Level 1",
            "count": "(313)"
        },
        {
            "label": "New Seller",
            "count": "(2,205)"
        },
        {
            "label": "Total seller",
            "count": "2,900+ services available"
        }
    ]
},
{
    key: 'animated logo intro video',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(212)"
        },
        {
            "label": "Level 2",
            "count": "(4,523)"
        },
        {
            "label": "Level 1",
            "count": "(2,742)"
        },
        {
            "label": "New Seller",
            "count": "(9,077)"
        },
        {
            "label": "Total seller",
            "count": "16,000+ services available"
        }
    ]
},
{
    key: 'logo and brand Identity',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(68)"
        },
        {
            "label": "Level 2",
            "count": "(1,496)"
        },
        {
            "label": "Level 1",
            "count": "(1,088)"
        },
        {
            "label": "New Seller",
            "count": "(5,968)"
        },
        {
            "label": "Total seller",
            "count": "8,600+ services available"
        }
    ]
},
{
    key: 'logo design business',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(1,352)"
        },
        {
            "label": "Level 2",
            "count": "(31,160)"
        },
        {
            "label": "Level 1",
            "count": "(23,534)"
        },
        {
            "label": "New Seller",
            "count": "(214,747)"
        },
        {
            "label": "Total seller",
            "count": "270,000+ services available"
        }
    ]
},
{
    key: 'real estate logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(191)"
        },
        {
            "label": "Level 2",
            "count": "(4,436)"
        },
        {
            "label": "Level 1",
            "count": "(3,156)"
        },
        {
            "label": "New Seller",
            "count": "(31,229)"
        },
        {
            "label": "Total seller",
            "count": "39,000+ services available"
        }
    ]
},
{
    key: 'streetwear logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(30)"
        },
        {
            "label": "Level 2",
            "count": "(969)"
        },
        {
            "label": "Level 1",
            "count": "(621)"
        },
        {
            "label": "New Seller",
            "count": "(2,920)"
        },
        {
            "label": "Total seller",
            "count": "4,500+ services available"
        }
    ]
},
{
    key: 'restaurant logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(55)"
        },
        {
            "label": "Level 2",
            "count": "(1,715)"
        },
        {
            "label": "Level 1",
            "count": "(1,441)"
        },
        {
            "label": "New Seller",
            "count": "(11,994)"
        },
        {
            "label": "Total seller",
            "count": "15,000+ services available"
        }
    ]
},
{
    key: 'sports logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(141)"
        },
        {
            "label": "Level 2",
            "count": "(2,794)"
        },
        {
            "label": "Level 1",
            "count": "(1,932)"
        },
        {
            "label": "New Seller",
            "count": "(14,442)"
        },
        {
            "label": "Total seller",
            "count": "19,000+ services available"
        }
    ]
},
{
    key: 'minimalist business logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(444)"
        },
        {
            "label": "Level 2",
            "count": "(13,409)"
        },
        {
            "label": "Level 1",
            "count": "(9,387)"
        },
        {
            "label": "New Seller",
            "count": "(87,662)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},



{
    key: 'letter logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(68)"
        },
        {
            "label": "Level 2",
            "count": "(1,921)"
        },
        {
            "label": "Level 1",
            "count": "(1,365)"
        },
        {
            "label": "New Seller",
            "count": "(7,481)"
        },
        {
            "label": "Total seller",
            "count": "10,000+ services available"
        }
    ]
},
{
    key: 'lettermark logo',
    seller: [
        {
            "label": "Level 2",
            "count": "(90)"
        },
        {
            "label": "Level 1",
            "count": "(91)"
        },
        {
            "label": "New Seller",
            "count": "(407)"
        },
        {
            "label": "Total seller",
            "count": "588 services available"
        }
    ]
},




{
    key: 'minimal logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(242)"
        },
        {
            "label": "Level 2",
            "count": "(6,236)"
        },
        {
            "label": "Level 1",
            "count": "(4,252)"
        },
        {
            "label": "New Seller",
            "count": "(29,903)"
        },
        {
            "label": "Total seller",
            "count": "40,000+ services available"
        }
    ]
},
{
    key: 'modern minimal logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(358)"
        },
        {
            "label": "Level 2",
            "count": "(11,225)"
        },
        {
            "label": "Level 1",
            "count": "(7,916)"
        },
        {
            "label": "New Seller",
            "count": "(72,905)"
        },
        {
            "label": "Total seller",
            "count": "92,000+ services available"
        }
    ]
},
{
    key: 'minimal logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(608)"
        },
        {
            "label": "Level 2",
            "count": "(17,414)"
        },
        {
            "label": "Level 1",
            "count": "(12,642)"
        },
        {
            "label": "New Seller",
            "count": "(120,244)"
        },
        {
            "label": "Total seller",
            "count": "150,000+ services available"
        }
    ]
},
{
    key: 'modern minimal timeless logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(379)"
        },
        {
            "label": "Level 2",
            "count": "(11,576)"
        },
        {
            "label": "Level 1",
            "count": "(8,159)"
        },
        {
            "label": "New Seller",
            "count": "(75,920)"
        },
        {
            "label": "Total seller",
            "count": "96,000+ services available"
        }
    ]
},
{
    key: 'minimalist gaming logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(27)"
        },
        {
            "label": "Level 2",
            "count": "(404)"
        },
        {
            "label": "Level 1",
            "count": "(264)"
        },
        {
            "label": "New Seller",
            "count": "(1,881)"
        },
        {
            "label": "Total seller",
            "count": "2,500+ services available"
        }
    ]
},
{
    key: 'minimalist business logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(444)"
        },
        {
            "label": "Level 2",
            "count": "(13,409)"
        },
        {
            "label": "Level 1",
            "count": "(9,387)"
        },
        {
            "label": "New Seller",
            "count": "(87,666)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'modern minimalist business logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(691)"
        },
        {
            "label": "Level 2",
            "count": "(19,767)"
        },
        {
            "label": "Level 1",
            "count": "(14,330)"
        },
        {
            "label": "New Seller",
            "count": "(134,781)"
        },
        {
            "label": "Total seller",
            "count": "160,000+ services available"
        }
    ]
},
{
    key: 'esports minimalist logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(9)"
        },
        {
            "label": "Level 2",
            "count": "(156)"
        },
        {
            "label": "Level 1",
            "count": "(82)"
        },
        {
            "label": "New Seller",
            "count": "(796)"
        },
        {
            "label": "Total seller",
            "count": "1,000+ services available"
        }
    ]
},
{
    key: 'minimalist business logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(449)"
        },
        {
            "label": "Level 2",
            "count": "(13,454)"
        },
        {
            "label": "Level 1",
            "count": "(9,435)"
        },
        {
            "label": "New Seller",
            "count": "(88,022)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'sports minimalist logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(28)"
        },
        {
            "label": "Level 2",
            "count": "(854)"
        },
        {
            "label": "Level 1",
            "count": "(554)"
        },
        {
            "label": "New Seller",
            "count": "(4,633)"
        },
        {
            "label": "Total seller",
            "count": "6,000+ services available"
        }
    ]
},
{
    key: 'flat minimalist logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(453)"
        },
        {
            "label": "Level 2",
            "count": "(13,211)"
        },
        {
            "label": "Level 1",
            "count": "(9,387)"
        },
        {
            "label": "New Seller",
            "count": "(92,521)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'line art logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(69)"
        },
        {
            "label": "Level 2",
            "count": "(1,678)"
        },
        {
            "label": "Level 1",
            "count": "(1,302)"
        },
        {
            "label": "New Seller",
            "count": "(6,109)"
        },
        {
            "label": "Total seller",
            "count": "9,100+ services available"
        }
    ]
},
{
    key: 'geometric logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(6)"
        },
        {
            "label": "Level 2",
            "count": "(124)"
        },
        {
            "label": "Level 1",
            "count": "(100)"
        },
        {
            "label": "New Seller",
            "count": "(605)"
        },
        {
            "label": "Total seller",
            "count": "835 services available"
        }
    ]
},
{
    key: 'golden ratio logo',
    seller: [
        {
            "label": "Level 2",
            "count": "(26)"
        },
        {
            "label": "Level 1",
            "count": "(44)"
        },
        {
            "label": "New Seller",
            "count": "(160)"
        },
        {
            "label": "Total seller",
            "count": "230 services available"
        }
    ]
},



{
    key: 'flat logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(18)"
        },
        {
            "label": "Level 2",
            "count": "(678)"
        },
        {
            "label": "Level 1",
            "count": "(466)"
        },
        {
            "label": "New Seller",
            "count": "(1,974)"
        },
        {
            "label": "Total seller",
            "count": "3,100+ services available"
        }
    ]
},
{
    key: 'flat minimalist logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(453)"
        },
        {
            "label": "Level 2",
            "count": "(13,211)"
        },
        {
            "label": "Level 1",
            "count": "(9,387)"
        },
        {
            "label": "New Seller",
            "count": "(92,521)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'minimalist flat logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(453)"
        },
        {
            "label": "Level 2",
            "count": "(13,211)"
        },
        {
            "label": "Level 1",
            "count": "(9,387)"
        },
        {
            "label": "New Seller",
            "count": "(92,528)"
        },
        {
            "label": "Total seller",
            "count": "110,000+ services available"
        }
    ]
},
{
    key: 'farm logo ',
    seller: [
        {
            "label": "Level 2",
            "count": "(40)"
        },
        {
            "label": "Level 1",
            "count": "(47)"
        },
        {
            "label": "New Seller",
            "count": "(2,428)"
        },
        {
            "label": "Total seller",
            "count": "2,500+ services available"
        }
    ]
},
{
    key: 'fashion brand logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(91)"
        },
        {
            "label": "Level 2",
            "count": "(2,183)"
        },
        {
            "label": "Level 1",
            "count": "(1,637)"
        },
        {
            "label": "New Seller",
            "count": "(9,746)"
        },
        {
            "label": "Total seller",
            "count": "13,000+ services available"
        }
    ]
},
{
    key: 'fantasy logo ',
    seller: [
        {
            "label": "Level 2",
            "count": "(29)"
        },
        {
            "label": "Level 1",
            "count": "(11)"
        },
        {
            "label": "New Seller",
            "count": "(95)"
        },
        {
            "label": "Total seller",
            "count": "135 services available"
        }
    ]
},
{
    key: 'fashion logo design ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(121)"
        },
        {
            "label": "Level 2",
            "count": "(3,280)"
        },
        {
            "label": "Level 1",
            "count": "(2,616)"
        },
        {
            "label": "New Seller",
            "count": "(16,536)"
        },
        {
            "label": "Total seller",
            "count": "22,000+ services available"
        }
    ]
},
{
    key: 'cartoon logo ',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(79)"
        },
        {
            "label": "Level 2",
            "count": "(829)"
        },
        {
            "label": "Level 1",
            "count": "(405)"
        },
        {
            "label": "New Seller",
            "count": "(2,470)"
        },
        {
            "label": "Total seller",
            "count": "3,700+ services available"
        }
    ]
},
{
    key: 'flower logo',
    seller: [
        {
            "label": "Level 2",
            "count": "(15)"
        },
        {
            "label": "Level 1",
            "count": "(16)"
        },
        {
            "label": "New Seller",
            "count": "(506)"
        },
        {
            "label": "Total seller",
            "count": "537 services available"
        }
    ]
},




{
    key: 'modern logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(197)"
        },
        {
            "label": "Level 2",
            "count": "(5,856)"
        },
        {
            "label": "Level 1",
            "count": "(3,811)"
        },
        {
            "label": "New Seller",
            "count": "(35,825)"
        },
        {
            "label": "Total seller",
            "count": "45,000+ services available"
        }
    ]
},    
{
    key: 'modern minimalist business logo design',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(691)"
        },
        {
            "label": "Level 2",
            "count": "(19,766)"
        },
        {
            "label": "Level 1",
            "count": "(14,330)"
        },
        {
            "label": "New Seller",
            "count": "(134,793)"
        },
        {
            "label": "Total seller",
            "count": "160,000+ services available"
        }
    ]
},    
{
    key: 'motion graphics logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(171)"
        },
        {
            "label": "Level 2",
            "count": "(2,048)"
        },
        {
            "label": "Level 1",
            "count": "(1,516)"
        },
        {
            "label": "New Seller",
            "count": "(7,812)"
        },
        {
            "label": "Total seller",
            "count": "11,000+ services available"
        }
    ]
},    
{
    key: 'motorsport logo',
    seller: [
        {
            "label": "Level 2",
            "count": "(11)"
        },
        {
            "label": "Level 1",
            "count": "(13)"
        },
        {
            "label": "New Seller",
            "count": "(99)"
        },
        {
            "label": "Total seller",
            "count": "123 services available"
        }
    ]
},    
{
    key: 'social media logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(1,465)"
        },
        {
            "label": "Level 2",
            "count": "(33,223)"
        },
        {
            "label": "Level 1",
            "count": "(24,463)"
        },
        {
            "label": "New Seller",
            "count": "(240,426)"
        },
        {
            "label": "Total seller",
            "count": "290,000+ services available"
        }
    ]
},    
{
    key: 'motion logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(6)"
        },
        {
            "label": "Level 2",
            "count": "(58)"
        },
        {
            "label": "Level 1",
            "count": "(47)"
        },
        {
            "label": "New Seller",
            "count": "(274)"
        },
        {
            "label": "Total seller",
            "count": "385 services available"
        }
    ]
},    
{
    key: 'rebrand logo',
    seller: [
        {
            "label": "Level 2",
            "count": "(13)"
        },
        {
            "label": "Level 1",
            "count": "(17)"
        },
        {
            "label": "New Seller",
            "count": "(84)"
        },
        {
            "label": "Total seller",
            "count": "114 services available"
        }
    ]
}, 
{
    key: 'monogram logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(20)"
        },
        {
            "label": "Level 2",
            "count": "(699)"
        },
        {
            "label": "Level 1",
            "count": "(435)"
        },
        {
            "label": "New Seller",
            "count": "(2,195)"
        },
        {
            "label": "Total seller",
            "count": "3,300+ services available"
        }
    ]
},    
{
    key: 'modify logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(1)"
        },
        {
            "label": "Level 2",
            "count": "(209)"
        },
        {
            "label": "Level 1",
            "count": "(138)"
        },
        {
            "label": "New Seller",
            "count": "(587)"
        },
        {
            "label": "Total seller",
            "count": "935 services available"
        }
    ]
},   
{
    key: 'icon logo',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(15)"
        },
        {
            "label": "Level 2",
            "count": "(380)"
        },
        {
            "label": "Level 1",
            "count": "(250)"
        },
        {
            "label": "New Seller",
            "count": "(1,841)"
        },
        {
            "label": "Total seller",
            "count": "2,400+ services available"
        }
    ]
},
{
    key: 'gradient Logos',
    seller: [
        {
            "label": "Level 2",
            "count": "(30)"
        },
        {
            "label": "Level 1",
            "count": "(29)"
        },
        {
            "label": "New Seller",
            "count": "(118)"
        },
        {
            "label": "Total seller",
            "count": "177 services available"
        }
    ]
},
{
    key: 'logo and brand identity',
    seller: [
        {
            "label": "Top Rated Seller",
            "count": "(68)"
        },
        {
            "label": "Level 2",
            "count": "(1,496)"
        },
        {
            "label": "Level 1",
            "count": "(1,087)"
        },
        {
            "label": "New Seller",
            "count": "(5,924)"
        },
        {
            "label": "Total seller",
            "count": "8,500+ services available"
        }
    ]
},

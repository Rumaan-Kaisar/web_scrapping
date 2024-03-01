

// Select all elements with the specified classes
var elements = document.querySelectorAll('.x1yztbdb.x1n2onr6.xh8yej3.x1ja2u2z');

// Initialize an empty list to store dictionaries
var competitorList = [];

// Iterate through each element
elements.forEach(function(element) {
    // Find elements with the specified class within the current element
    var targetElements = element.querySelectorAll('.x9f619.x1n2onr6.x1ja2u2z.x2bj2ny.x1qpq9i9.xdney7k.xu5ydu1.xt3gfkd.xh8yej3.x6ikm8r.x10wlt62.xquyuld');
    console.log(targetElements.length);
    
    // Loop through the NodeList of target elements
    targetElements.forEach(function(targetElement) {
        // Initialize a dictionary for the current competitor
        var competitorDict = {
            "competitor_name": 'oip',
            "Extracted_number": 0,
            "ImageLinks": []
        };

        // NAMES: Find elements with the specified class within the current targetElement
        var targetElements_2 = targetElement.querySelectorAll('.x9f619.x1ypdohk.xt0psk2.xe8uvvx.xdj266r.x11i5rnm');
        // Initialize name variable
        var name = '';
        // NAMES: Loop through the NodeList of targetElements_2
        targetElements_2.forEach(function(targetElement_2) {
            // Select the span containing the name
            var nameSpan = targetElement_2.querySelector('span');
            if (nameSpan) {
                // Get the name text
                name = nameSpan.textContent.trim();
                if(name){competitorDict["competitor_name"] = String(name);}
            }
        });
        

        // Likes: 
        var likes_count = targetElement.querySelectorAll('.xt0b8zv.x2bj2ny.xrbpyxo.xl423tq span.x1e558r4');
        likes_count.forEach(function(span) {
            var text = span.textContent.trim();
            var splitText = text.split(' '); // Split the text by space
            var number = splitText[splitText.length - 2]; // Extract the number
            // Add the extracted number to the dictionary
            competitorDict["Extracted_number"] = number;
        });

        // images: Find all images using class "x1ey2m1c xds687c x5yr21d x10l6tqk x17qophe x13vifvy xh8yej3" and grab image links
        var imageLinks = [];
        var images = targetElement.querySelectorAll('.x1ey2m1c.xds687c.x5yr21d.x10l6tqk.x17qophe.x13vifvy.xh8yej3');
        images.forEach(function(image) {
            var link = image.getAttribute('src');
            if (link) {
                imageLinks.push(link);
            }
        });

        // Add the image links to the dictionary
        competitorDict["ImageLinks"] = imageLinks;

        // Add dictionary to the list
        competitorList.push(competitorDict);
    });
});


// Print the list of dictionaries
console.log(competitorList);



// Note: the list varies in the viewport: so the list updates
    // scroll and execute afetr 9/10 people
    // copy several different dictionaries
    // combine those dictionary into 1
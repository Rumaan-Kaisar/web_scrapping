// Unchanged 

var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {
  var link = links[i].getAttribute("href");
  console.log(link);
}

// edited. Collecting "javaTpoint" links
var groups = document.querySelectorAll(".workThumbnail--thumbnail");

// var links = document.querySelectorAll("a");
const array_of_links = []; 
for (var i = 0; i < groups.length; i++) {
//   var Heading = groups[i].querySelectorAll(" .h3")[0].textContent;
  var links = groups[i].querySelectorAll("img");

//   console.log("----------  "+ Heading);

  for (var k = 0; k < links.length; k++) {
    var link = links[k].getAttribute("src");
    console.log(link);
    array_of_links[i] = link;
    // document.write('"'+link+'",');
  }
  
}

console.log(array_of_links);
// document.write(array_of_links);
for (var i = 0; i < array_of_links.length; i++) {
    document.write('"'+array_of_links[i]+'",');
  }

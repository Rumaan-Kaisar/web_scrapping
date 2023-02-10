// Unchanged 

var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {
  var link = links[i].getAttribute("href");
  console.log(link);
}

// edited. Collecting "javaTpoint" links
var groups = document.querySelectorAll(".gra1");

// var links = document.querySelectorAll("a");

for (var i = 0; i < groups.length; i++) {
  var Heading = groups[i].querySelectorAll(" .h3")[0].textContent;
  var links = groups[i].querySelectorAll("a");

  console.log("----------  "+ Heading);

  for (var k = 0; k < links.length; k++) {
    var link = links[k].getAttribute("href");
    console.log(link);
  }
  
}

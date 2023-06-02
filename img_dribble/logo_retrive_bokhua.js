// Unchanged 
// document.querySelectorAll(".shot-thumbnail")
// document.getElementsByClassName("shot-thumbnail js-thumbnail shot-thumbnail-container")


// let all_lis = document.getElementsByClassName("shot-thumbnail js-thumbnail shot-thumbnail-container");

let all_lis = document.getElementsByClassName("shot-thumbnail js-thumbnail shot-thumbnail-container");

const img_arr = [];

/* 
console.log(all_lis);

console.log(img_arr);

for(let k = 0; k < all_lis.length; k++){
  img_arr[k] = all_lis[k].getElementsByTagName("img");
}

console.log(img_arr); */

console.log(all_lis);

console.log(img_arr);

for(let k = 0; k < all_lis.length; k++){
  img_arr[k] = all_lis[k].getElementsByTagName("img")[0].getAttribute("src").split("?")[0];
}

console.log(img_arr);

for (var i = 0; i < img_arr.length; i++) {
  document.write('"'+img_arr[i]+'",');
}




// --------------------------------------------------    ABOVE CODE    -----------------------------------------------------------
/* 
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
 */


  // li clsaaes


  "https://cdn.dribbble.com/userupload/7479919/file/original-90…2a72fff893b84eb86.jpg?compress=1&resize=400x300&vertical=top"


  

<div class="js-thumbnail-base shot-thumbnail-base disabled-shot-section dribbble-shot dribbble  ">
      <figure class="js-thumbnail-placeholder shot-thumbnail-placeholder">
  <noscript>
      <img src="https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?resize=400x0" alt="G1 branding design identity illustration logo logotype mark milash symbol">
  </noscript>
    <img alt="G1 branding design identity illustration logo logotype mark milash symbol" data-srcset="https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=1200x900&amp;vertical=top 1200w" data-src="https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=400x300&amp;vertical=top" data-sizes="auto" class="lazyautosizes lazyloaded" src="https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=400x300&amp;vertical=top" sizes="480px" srcset="https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=320x240&amp;vertical=top 320w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=400x300&amp;vertical=top 400w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=450x338&amp;vertical=top 450w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=640x480&amp;vertical=top 640w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=700x525&amp;vertical=top 700w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=800x600&amp;vertical=top 800w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=840x630&amp;vertical=top 840w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=1000x750&amp;vertical=top 1000w, https://cdn.dribbble.com/userupload/7418962/file/original-41d06544aab15f275a726ce55a646bd0.jpg?compress=1&amp;resize=1200x900&amp;vertical=top 1200w">
</figure>


    <div class="shot-thumbnail-extras">
      
    </div>

        <a class="shot-thumbnail-link dribbble-link js-shot-link" href="/shots/21599946-G1">
          <span class="accessibility-text">View G1</span>
</a>
    <div class="shot-thumbnail-overlay">
      <div class="shot-thumbnail-overlay-content">
            <div class="shot-title">G1</div>

            <ul class="js-dribbble-shot-actions shot-actions-container">
                <li data-bucket-container="true" class="shot-action">
                  

  <a class="bucket-shot form-btn" title="Save shot" data-signup-trigger="true" data-href="/signup/new" data-context="bucket-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m22 5h-11l-2-3h-7c-1.104 0-2 .896-2 2v16c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-13c0-1.104-.896-2-2-2zm-6 10h-3v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-3c0-.55.45-1 1-1s1 .45 1 1v3h3c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>

</a>
                </li>

                

  <div class="like-action-21599946   shot-action">
    <script>
      if (typeof(Dribbble) != "undefined" && typeof(Dribbble.Shots) != "undefined") {
        Dribbble.Shots.update(21599946, {
          likes_count: 237,
          liked: false
      });
      }
    </script>
      <a class="form-btn tipsy-mobile-disabled stats-action like-shot" rel="no-follow" title="Like this shot" data-signup-trigger="" data-href="/signup/new" data-context="like-shot" href="/signup/new">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" role="img" class="icon "><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>

          <span class="accessibility-text">Like</span>
</a>  </div>

            </ul>
      </div>
    </div>
</div>

#screenshot-21619816
<li id="screenshot-21619816" data-thumbnail-id="21619816" class="shot-thumbnail js-thumbnail shot-thumbnail-container      " data-ad-data="" data-boost-id="" data-is-boost-fallback="">
  



NodeList(24) [ li#screenshot-21619816.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-21599946.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-21471185.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-21420015.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-20684849.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-20596880.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-20533210.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-19536810.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-19392377.shot-thumbnail.js-thumbnail.shot-thumbnail-container, li#screenshot-19368370.shot-thumbnail.js-thumbnail.shot-thumbnail-container, … ]
​
0: <li id="screenshot-21619816" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="21619816" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
1: <li id="screenshot-21599946" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="21599946" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
2: <li id="screenshot-21471185" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="21471185" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
3: <li id="screenshot-21420015" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="21420015" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
4: <li id="screenshot-20684849" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="20684849" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
5: <li id="screenshot-20596880" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="20596880" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
6: <li id="screenshot-20533210" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="20533210" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
7: <li id="screenshot-19536810" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="19536810" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
8: <li id="screenshot-19392377" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="19392377" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
9: <li id="screenshot-19368370" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="19368370" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
10: <li id="screenshot-18755288" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18755288" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
11: <li id="screenshot-18598240" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18598240" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
12: <li id="screenshot-18588746" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18588746" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
13: <li id="screenshot-18541742" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18541742" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
14: <li id="screenshot-18532017" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18532017" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
15: <li id="screenshot-18489032" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18489032" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
16: <li id="screenshot-18476718" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18476718" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
17: <li id="screenshot-18401222" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18401222" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
18: <li id="screenshot-18384977" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18384977" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
19: <li id="screenshot-18365600" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18365600" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
20: <li id="screenshot-18265018" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18265018" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
21: <li id="screenshot-18157081" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18157081" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
22: <li id="screenshot-18151833" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18151833" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
23: <li id="screenshot-18022758" class="shot-thumbnail js-thumbn…umbnail-container      " data-thumbnail-id="18022758" data-ad-data="" data-boost-id="" data-is-boost-fallback="">
​
length: 24
​
<prototype>: NodeListPrototype { item: item(), keys: keys(), values: values(), … }


videos = "";
menuItems = ""; 
var videosArr;
const codes = [];

const menuElement = document.getElementById("menu");
const galleryElement = document.getElementById("image-gallery");

fetch("https://json-static-api-mournkid.vercel.app/menuVideos.json")
  .then(res => res.json())
  .then(data => {
    if (data) {
      data.forEach((item) => {
      hint = item.hint;
      href = item.href;
      menuItems += `
      <li><a class="menu__item" href=${href}>${hint}</a></li>
      `;
      menuElement.innerHTML = menuItems;
      })
  }});




// fetch("https://json-static-api-mournkid.vercel.app/videos.json")
//   .then(res => res.json())
//   .then(returnedData => {
//     if (returnedData) {
//       returnedData.forEach((video) => {
//       path = JSON.stringify(video.url);
//       width = JSON.stringify(video.width);
//       height = JSON.stringify(video.height);
//       code = video.code;
//       videos += `
//       <li class="video">
//         <video width=${width} height=${height} controls >
//           <source src=${path} type="video/mp4">
//         </video>  
//         <p>${code}</p> 
//       </li>
//       `;
//       galleryElement.innerHTML = videos;
//       })
//       var video = document.querySelectorAll('video');
//       video.forEach(play => play.addEventListener('click', () => {
//       play.classList.toggle('active');

//       if(play.paused){
//         play.play();
//       }else{
//         play.pause();
//         play.currentTime = 0;
//       }
//       }));
//   }});

async function displayVideos() {
  const response = await fetch("https://json-static-api-mournkid.vercel.app/videos.json");
  videosArr = await response.json();
  videosArr.forEach((video) => {
  path = JSON.stringify(video.url);
  width = JSON.stringify(video.width);
  height = JSON.stringify(video.height);
  code = video.code;
  videos += `
    <li class="video">
      <video width=${width} height=${height} controls >
        <source src=${path} type="video/mp4">
      </video>  
      <p>${code}</p> 
    </li>
    `;
  galleryElement.innerHTML = videos;
  })

    var video = document.querySelectorAll('video');
    video.forEach(play => play.addEventListener('click', () => {
    play.classList.toggle('active');

    if(play.paused){
      play.play();
    }else{
      play.pause();
      play.currentTime = 0;
    }}));
}

function myFunction(){
  var a, i, txtValue;
  var input = document.getElementById("myInput");
  var li = galleryElement.getElementsByTagName("li");
  var filter = input.value.toUpperCase();
  nome = document.getElementById("name");
  nome.innerHTML = "Catálogo";
  // for(i = 0; i < li.length; i++){
  //   a = li[i].getElementsByTagName("p")[0];
  //   txtValue = a.textContent || a.innerText;
  //   if (txtValue.toUpperCase().indexOf(filter) > -1){
  //         li[i].style.display = "";
  //   }else{
  //     li[i].style.display = "none";
  //   }
  // }
  for(i = 0; i < li.length; i++){
    li[i].style.display = "";
  } 
}



function myFunction1(){
  for(i = 0; i < videosArr.length; i++){
    codes[i] = videosArr[i].code;
  } 
}

window.addEventListener("load", (event) => {
  displayVideos();
});

// const galleryElement = document.getElementById("image-gallery");

// async function fetchImage(value) {
//   imgs = "";
//   try {
//     await fetch(
//       `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${value}&client_id=b1ZDS2G2jorTwN7_kiH9DPt_3c0Gkhk2Xpv-KjVaP3Y`
//     ).then((res) =>
//       res.json().then((data) => {
//         const pictures = data.results;
//         if (pictures) {
//           pictures.forEach((pic) => {
//             imgs += `
//             <li>
//               <img src=${pic.urls.small} alt="" />
//               <div class="overlay"><span>${pic.description}</span></div>
//             </li>
//             `;
//             galleryElement.innerHTML = imgs;
//           });
//         }
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// }

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();

      
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      setTimeout(function(){
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                myFunction();
                inp.value = this.getElementsByTagName("input")[0].value;
                nome = document.getElementById("name");
                nome.innerHTML = `${inp.value}`;
                // nome.style.display = "none";
                // catalog = document.getElementById("catalog");
                // catalog.innerHTML = `<h1>${inp.value}</h1>`
                var a, i, txtValue;
                var filter = inp.value.toUpperCase();
                var li = galleryElement.getElementsByTagName("li");
                for(i = 0; i < li.length; i++){
                  a = li[i].getElementsByTagName("p")[0];
                  txtValue = a.textContent || a.innerText;
                  if (txtValue.toUpperCase().indexOf(filter) > -1){
                    li[i].style.display = "";
                  } else {
                    li[i].style.display = "none";
                  }
                }
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
      }, 500);
      
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      } else if (e.keyCode == 8 || e.keyCode == 46){
        myFunction();
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}






/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), codes);

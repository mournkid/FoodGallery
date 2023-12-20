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
  for(i = 0; i < videosArr.length; i++){
    codes[i] = videosArr[i].code;
  }
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
  var input = document.getElementById("search");
  var filter = input.value.toUpperCase();
  var li = galleryElement.getElementsByTagName("li");

  for(i = 0; i < li.length; i++){
    a = li[i].getElementsByTagName("p")[0];
    console.log(a);
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
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



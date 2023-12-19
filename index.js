videos = "";
menuItems = ""; 

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


fetch("https://json-static-api-mournkid.vercel.app/videos.json")
  .then(res => res.json())
  .then(data => {
    if (data) {
      data.forEach((video) => {
      path = JSON.stringify(video.url);
      videos += `
      <li class="video">
        <video width="320" height="240" controls >
          <source src=${path} type="video/mp4">
        </video>  
        <p>modelo número</p> 
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
      }
      }));
  }});


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



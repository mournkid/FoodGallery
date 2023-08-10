const galleryElement = document.getElementById("image-gallery");

async function fetchImage(value) {
  imgs = "";
  try {
    await fetch(
      `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${value}&client_id=b1ZDS2G2jorTwN7_kiH9DPt_3c0Gkhk2Xpv-KjVaP3Y`
    ).then((res) =>
      res.json().then((data) => {
        const pictures = data.results;
        if (pictures) {
          pictures.forEach((pic) => {
            imgs += `
            <li>
              <img src=${pic.urls.small} alt="" />
              <div class="overlay"><span>${pic.description}</span></div>
            </li>
            `;
            galleryElement.innerHTML = imgs;
          });
        }
      })
    );
  } catch (error) {
    console.log(error);
  }
}



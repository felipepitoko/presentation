const gifCarousel = document.getElementById("gif-carousel");

// Fetch the contents of the "assets" folder
fetch("./assets/")
  .then(response => response.text())
  .then(data => {
    // Parse the list of files from the HTML response
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const fileList = Array.from(html.querySelectorAll("a")).map(link => link.getAttribute("href")).filter(href => href.endsWith(".gif"));
    console.log(fileList)
    // Loop through the list of files and create new img elements
    for (let i = 0; i < fileList.length; i++) {
      const img = document.createElement("img");
      img.src = "." + fileList[i];
      img.alt = "GIF " + (i + 1);
      gifCarousel.appendChild(img);
    }
  });
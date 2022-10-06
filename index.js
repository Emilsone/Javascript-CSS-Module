import cardStyle from "./src/cardStyle.css";

document.getElementById("app").innerHTML = `
<div class="${cardStyle.card}">
<img src="https://img.freepik.com/free-photo/tractor-agricultural-machine-cultivating-field_342744-896.jpg?w=996&t=st=1660627603~exp=1660628203~hmac=fd1cb771af3a1c50fab957c0b88646fbe15d27cd0dfe5753f96cab390f4e7857" alt="Trulli" class="${cardStyle.img}">

  <div class="${cardStyle.container}">
    <h1 class="${cardStyle.heading}">Our Products</h1> 
    <p> To provide the best-tasting produce, we take extra care to choose and develop certain crop kinds where the excellent flavor is the focus.</p> 
    <a 
    class="${cardStyle.link}" href="https://parceljs.org" target="_blank" rel="noopener noreferrer">Learn More</a>
  </div>
</div>

`;
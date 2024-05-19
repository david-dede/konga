let product = [
  {
    id: 1,
    product_name: "Hot Choc Vending",
    price: "¥861.09",
    images: "image/1.jpeg",
  },
  {
    id: 2,
    product_name: "Eggplant Italian",
    price: "¥537.05",
    images: "image/1.jpg",
  },
  {
    id: 3,
    product_name: "Wine - Shiraz Wolf Blass Premium",
    price: "¥536.86",
    images: "image/1.webp",
  },
  {
    id: 4,
    product_name: "Potatoes - Idaho 80 Count",
    price: "¥467.76",
    images: "image/2.jpg",
  },
  {
    id: 5,
    product_name: "Cocoa Feuilletine",
    price: "¥921.56",
    images: "image/2.webp",
  },
  {
    id: 6,
    product_name: "Appetizer - Cheese Bites",
    price: "¥348.46",
    images: "image/3.webp",
  },
  {
    id: 7,
    product_name: "Cake - Pancake",
    price: "¥55.35",
    images: "image/1.jpg",
  },
  {
    id: 8,
    product_name: "Sambuca - Opal Nera",
    price: "¥478.15",
    images: "image/1.jpeg",
  },
  {
    id: 9,
    product_name: "Soup - Campbells, Creamy",
    price: "¥125.98",
    images: "image/2.jpg",
  },
  {
    id: 10,
    product_name: "Pork - Shoulder",
    price: "¥174.15",
    images: "image/1.webp",
  },
  {
    id: 11,
    product_name: "Cheese - Mozzarella",
    price: "¥312.78",
    images: "image/1.jpeg",
  },
  {
    id: 12,
    product_name: "Cookies - Amaretto",
    price: "¥464.66",
    images: "image/1.jpg",
  },
  {
    id: 13,
    product_name: "Sugar - Sweet N Low, Individual",
    price: "¥915.31",
    images: "image/1.webp",
  },
  {
    id: 14,
    product_name: "Burger Veggie",
    price: "¥424.06",
    images: "image/3.webp",
  },
  {
    id: 15,
    product_name: "Cheese - Mozzarella",
    price: "¥434.89",
    images: "image/2.jpg",
  },
];
// function midnigth(){
//     // let card = document.getElementById("container");
//     // card.innerHTML=""
//     let david=document.createElement('div') // to create an element like div, p, h1,h2 .......
//     david.classList.add("classdavid") //to add class name
//     david.innerHTML="david" // innerHTML is to target the things that are inside the Div
//     document.body.appendChild(david); // to add david inside the body


//     product.forEach((item)=>{
//         let benson=document.createElement("div")
//         benson.classList.add("benson")
        
       
//     })
// }
function weMustUnderstand() {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Clear container before adding new elements

  product.forEach((item) => {
    let col = document.createElement("div");
    col.classList.add("col");

    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");

    let imageElement = document.createElement("img"); // Changed div to img for images
    imageElement.classList.add("card_image");
    imageElement.src = item.images;

    cardBody.appendChild(imageElement);
    cardBody.innerHTML += `
      <h5 class="card-title">${item.product_name}</h5>
      <p class="card-text">Price: ${item.price}</p>
    `;

    card.appendChild(cardBody);
    col.appendChild(card);
    container.appendChild(col);
  });
}

window.onload = weMustUnderstand;


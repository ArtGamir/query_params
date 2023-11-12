let productEntries = [];
const PRODUCT_ENDPOINT = "https://fakestoreapi.com/products";

//alert ("funciona")

let entriesWrapper = document.getElementById("entries-wrapper");

const getAllProducts = async () => {
  let response = await fetch(`${PRODUCT_ENDPOINT}`);
  let data = await response.json();
  console.log(data)
  productEntries= [...data]
  
  if (productEntries) {
    printAllEntries(productEntries);
  }
};

const createEntryCard = (entryData) => {
  let { title, price, image, id } = entryData;
  let cardCol = document.createElement("div");
  cardCol.classList.add("col");

  cardCol.addEventListener("click", () => {
    window.open(`views/detail.html?entryKey=${id}`, "_blank");
  });

  let card = document.createElement("div");
  card.classList.add("card");

  let cardImage = document.createElement("img");
  cardImage.classList.add("card-img-top");
  cardImage.src = image;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("title");
  cardTitle.textContent = title;

  let cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.textContent = "$" + price.toFixed(2);

  cardBody.append(cardTitle, cardPrice);

  card.append(cardImage, cardBody);
  cardCol.append(card);

  return cardCol;
};

const printAllEntries = (entriesArray) => {
  entriesWrapper.innerHTML = "";
  entriesArray.forEach((entry) => {
    let entryCard = createEntryCard(entry);
    entriesWrapper.append(entryCard);
  });
};

getAllProducts();
printAllEntries(productEntries)
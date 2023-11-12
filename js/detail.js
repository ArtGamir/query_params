const PRODUCT_ENDPOINT = "https://fakestoreapi.com/products";

console.log("entry detail");

let queryString = location.search;
console.log(queryString);

let params = new URLSearchParams(queryString);
console.log(params);

let entryKey = params.get("entryKey");
console.log(entryKey);

const getEntryById = async (entryId) => {
  let response = await fetch(`${PRODUCT_ENDPOINT}/${entryId}`);
  console.log(response)
  let data = await response.json();
  console.log(data);
  if (data) {
    let { title, image, price, description } = data;
    document.getElementById("entry-image").src = image;
    document.getElementById("entry-title").textContent = title;
    document.getElementById("entry-price").textContent = "$" + price.toFixed(2);
    document.getElementById("entry-description").textContent = description;
  } /*else {
    document.getElementById("detail-wrapper").innerHTML = `
    <div class="alert alert-secondary" role="alert">
  No se encontró el contenido de esta entrada
</div>
<img class="w-100" src="https://thumbs.dreamstime.com/z/page-not-found-error-hand-drawn-vector-doodle-illustration-internet-connection-problem-concept-cat-holds-computer-mouse-119417440.jpg" alt="" />
    `;
  }*/
};

getEntryById(entryKey);
// selectors
const cards = document.querySelector(".cards");
const nameinput = document.querySelector(".input-name");
const priceinput = document.querySelector(".input-price");
const createBtn = document.querySelector(".btn-create");
const form = document.querySelector("form");



// vars

let phones = JSON.parse(localStorage.getItem("phones")) || [];
let updateIndex = null;
let editing = false;
showPhone() 
// function

function createPhone() {
  const phone = {
    name: nameinput.value,
    price: priceinput.value,
  };

  phones.push(phone);

  localStorage.setItem("phones", JSON.stringify(phones));

  clearinput();
  showPhone();
}


function showPhone() {
     cards.innerHTML ="";
    phones.forEach((phone,i) => {
 cards.innerHTML +=
                `<div class="card shadow  ">
                <h2 class="py-2 text-center">${phone.name}</h2>
                <p class=" text-center">Lorem ipsum dolor sit amet consectetur.</p>
                <span class="fs-4 fw-bold text-center py-2">$${phone.price}</span>
                <button class="btn ">buy now</button>
                 <svg
                 onclick="editPhone(${i})"
                class="text-warning fs-4 fw-bold"
                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
		<path d="m16.475 5.408l2.117 2.117m-.756-3.982L12.109 9.27a2.1 2.1 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621" />
		<path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3" />
	</g>
</svg>
<svg 
                                 onclick="deletePhone(${i})"
 class="text-danger fs-4 fw-bold"
xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
	<path d="M0 0h20v20H0z" fill="none" />
	<path fill="currentColor" d="M11.5 4a1.5 1.5 0 0 0-3 0zm-4 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-.485 4.196a5.5 5.5 0 0 0-.986-.176L15.44 5H4.561l1.18 10.23A2 2 0 0 0 7.728 17H9.6q.276.538.657 1H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z" />
</svg>
            </div>
                `
            
});
};

function updatePhone() {
  const phone = {
    name: nameinput.value,
    price: priceinput.value,
  };

  phones.splice(updateIndex, 1, phone);
  localStorage.setItem("phones", JSON.stringify(phones));
  showPhone();
  clearinput();
  createBtn.textContent = "Create";
  updateIndex = null;
  editing = false;
}

function clearinput(){
    nameinput.value = "";
    priceinput.value = "";
}

function editPhone(index) {
  nameinput.value = phones[index].name;
  priceinput.value = phones[index].price;
  createBtn.textContent = "Update";

  updateIndex = index;
  editing = true
}

function deletePhone(index) {
  phones.splice(index, 1);
  localStorage.setItem("phones", JSON.stringify(phones));
  showPhone();
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (editing) {
    updatePhone();
  } else {
    createPhone();
  }
});
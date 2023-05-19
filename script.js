var saveTo = document.getElementById("saveItem");
var allItems = [];
var items;

saveTo.addEventListener('click', ()=> {
    items = {
        itemName: itemName.value,
        itemPrice: itemPrice.value,
        itemQty: itemQty.value,
        itemDesc: itemDesc.value
    }

    if (itemName.value == "" || itemPrice.value == "" || itemQty.value == "" || itemDesc.value == "") {
        errorMsg.innerHTML = "Enter value for all above space provided"
       
    } else {
        allItems.push(items);
    }

    displayItem();
})

const displayItem = () => {
    disp.innerHTML = "";
    for (let index = 0; index < allItems.length; index++) {
    disp.innerHTML += `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">${allItems[index].itemName}</h5>
      <p class="card-text">${allItems[index].itemDesc}</p>
      <div id="priQty"><h5 class="card-title">${allItems[index].itemPrice}</h5>
      <h5 class="card-title">${allItems[index].itemQty}</h5></div>
      <div id="btnCrud"><a href="#" class="btn btn-primary" onclick="delItem(${index})">Delete</a>
      <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a></div>
    </div>
  </div> ` 

}
}

const delItem = (index) => {

    var response = confirm("Are You Sure You want to detele this?")

    if (response) {
        allItems.splice(index, 1);
        displayItem()
    } else {
        displayItem()
    }
   
}

const editItem = (index) => {
    allItems.splice(index, 1, 
        items = {
            itemName: mitemName.value,
            itemPrice: mitemPrice.value,
            itemQty: mitemQty.value,
            itemDesc: mitemDesc.value
        })

        displayItem()
}
/*'use strict';

const foodMenu =[];
function Food (foodName,type,price) {
    
    this.foodID= this.randomIDNumber();
    this.foodName=foodName;
    this.type=type;
    this.price=price;
    
    foodMenu.push(this);
    console.log (this);
}

Food.prototype.randomIDNumber= function() {
      return (Math.floor(Math.random()*(9999-1000+1))+1000);
    }


Food.prototype.render = function() {

    let tablePlace = document.getElementById("jsTableID");

    let tableRow = document.createElement("tr");
    let tableData1st = document.createElement("td");
    let tableData2nd = document.createElement("td");
    let tableData3rd = document.createElement("td");
    let tableData4th = document.createElement("td");

    tableData1st.textContent = this.foodID;
    tableData2nd.textContent = this.foodName;
    tableData3rd.textContent = this.type;
    tableData4th.textContent = this.price;

    tableRow.appendChild(tableData1st);
    tableRow.appendChild(tableData2nd);
    tableRow.appendChild(tableData3rd);
    tableRow.appendChild(tableData4th);
    tablePlace.appendChild(tableRow);
}


let newFood = document.getElementById("formID");
newFood.addEventListener("submit",doSubmit);
function doSubmit(event) {
event.preventDefault();
let foodName = event.target.foodNameID.value;  
let type = event.target.foodTypeID.value;
let price = event.target.priceID.value;

let newFoodOnMenu = new Food (foodName,type,price);
newFoodOnMenu.render();

store();
}


function store() {

    let stringArr = JSON.stringify(foodMenu);
    localStorage.setItem("menuKey",stringArr);
}


function get() {
    let menu = localStorage.getItem("menuKey");
    let newArr = JSON.parse(menu);

    if (newArr != null) {
    for(let i =0 ; i<newArr.length ; i++){

    let  newFood = new Food(newArr[i].foodName,newArr[i].type,newArr[i].price);
    newFood.render();
    }
  }
}
get();*/
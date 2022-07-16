'use strict';

const foodMenu =[];

function Food (foodID,foodName,type,price) {
    
    this.foodID= function(){
         Math.floor(Math.random() * (9999-1000+1))+1000;
         return foodID;
    };

    this.foodName=foodName;
    this.type=type;
    this.price=price;
    foodMenu.push(this);
}

let newFood = document.getElementById("form")
newFood.addEventListener("submit",doSubmit)
function doSubmit(event) {
event.preventDefault();
let foodName = event.target.foodName.value;
let type = event.target.type.value;
let price = event.target.price.value;
}


Food.prototype.render = function() {

    let x = document.getElementById("table");
    let tableRow = document.createElement("tr");
    let tableData1 = document.createElement("td");
    let tableData2 = document.createElement("td");
    let tableData3 = document.createElement("td");
    let tableData4 = document.createElement("td");
    tableData1.textContent = this.foodID;
    tableData2.textContent = this.foodName;
    tableData3.textContent = this.type;
    tableData4.textContent = this.price;
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);
    tableRow.appendChild(tableData4);
    x.appendChild(tableRow);
}



let newDish = new Food(foodID,foodName,type,price);


newDish.render();


'use strict';

function getData(){
    let menu = localStorage.getItem("menuKey");
    let newArr = JSON.parse(menu);

    if (newArr != null) {
        for(let i =0 ; i<newArr.length ; i++){
            
    let tablePlace = document.getElementById("jsTableID");
    let tableRow = document.createElement("tr");
    let tableData1st = document.createElement("td");
    let tableData2nd = document.createElement("td");
    let tableData3rd = document.createElement("td");
    let tableData4th = document.createElement("td");

    tableData1st.textContent = newArr[i].foodID;
    tableData2nd.textContent = newArr[i].foodName;
    tableData3rd.textContent = newArr[i].type;
    tableData4th.textContent = newArr[i].price;

    tableRow.appendChild(tableData1st);
    tableRow.appendChild(tableData2nd);
    tableRow.appendChild(tableData3rd);
    tableRow.appendChild(tableData4th);
    tablePlace.appendChild(tableRow);

        }
      }
}
getData();

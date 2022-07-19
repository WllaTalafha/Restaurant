'use strict';

let menu = localStorage.getItem("menuKey");
let newArr = JSON.parse(menu);

function getData(){
  
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



const names =[];
const prices =[];
const types =[];

for (let i=0 ; i<newArr.length ; i++)
{
    names.push(newArr[i].foodName);
    prices.push(newArr[i].price);
  
};


{const data = {
    labels: names,
    datasets: [{
      label: 'bar chart',
      data: prices,
      backgroundColor: [
        'rgb(255,94,128,0.5)',
            'rgb(255,159,64,0.5)',
            'rgb(255,205,86,0.5)',
            'rgb(75,192,192,0.5)',
            ' rgb(54,162,235,0.5)'      
      ],
      borderColor: [
        'rgb(255,94,128,0.5)',
        'rgb(255,159,64,0.5)',
        'rgb(255,205,86,0.5)',
        'rgb(75,192,192,0.5)',
        ' rgb(54,162,235,0.5)'
      ],
      barPercentage: 0.5
     
    }]
  };

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        },
        x: {
            grid: {
              offset: true
            }
      }}
    },
  };



const barChart = new Chart(
    document.getElementById('barChartID'),
    config
  );

}

/////////////

let Counter1=0;
let Counter2=0;
let Counter3=0;
let Counter4=0;
let Counter5=0;

for(let i =0 ; i<newArr.length ; i++){
if (newArr[i].type==='Fruit and vegetables')
{
    Counter1+=1;
};
if (newArr[i].type==='Starchy food')
{
    Counter2+=1;
};
if (newArr[i].type==='Dairy')
{
    Counter3+=1;
};
if (newArr[i].type=== 'Protein')
{
    Counter4+=1;
};
if (newArr[i].type==='Fat')
{
    Counter5+=1;
};

};

{
    const data = {
        labels: ['Fruit and vegetables','Starchy food','Dairy','Protein','Fat'],
        datasets: [{
          label: 'pie chart',
          data: [Counter1,Counter2,Counter3,Counter4,Counter5],
          backgroundColor: [
            'rgb(255,94,128,0.5)',
            'rgb(255,159,64,0.5)',
            'rgb(255,205,86,0.5)',
            'rgb(75,192,192,0.5)',
            ' rgb(54,162,235,0.5)'
          ],
         
        }]
      };


      const config = {
        type: 'pie',
        data: data,
      };

      const barChart = new Chart(
        document.getElementById('pieChartID'),
        config
      );

 }
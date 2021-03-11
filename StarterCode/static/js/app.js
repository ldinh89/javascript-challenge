// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
function createTable(ufoDisplay) {
    
    ufoDisplay.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};

console.log(tableData);
createTable(tableData);


var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.event.preventDefault();
    tbody.html("");
    var date = d3.select("#datetime").property("value").trim();
    var dataFiltered = tableData;
    if (date) {
         dataFiltered = tableData.filter(ufoDisplay => ufoDisplay.datetime === date);
    }; 
        
    

   

    console.log(dataFiltered);
    createTable(dataFiltered);

});



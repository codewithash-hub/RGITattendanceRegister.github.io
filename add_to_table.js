
// JavaScript code to handle form submission and update the table
const form = document.getElementById('record-form');
const table = document.getElementById('record-table').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form input values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Create a new row in the table
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Populate the new row with data
    cell1.innerHTML = name;
    cell2.innerHTML = age;
    
    // Clear the form fields
    form.reset();
});
document.getElementById("driverForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
});

function addRow() {
    let table = document.querySelector("table"); // Select the table

    let newRow = document.createElement("tr"); // Create a new row

    newRow.innerHTML = `
        <td><input type="date" name="text" id="text"></td>
                    <td><textarea rows="3" id="text"></textarea></td>
                    <td><input type="text" name="text" id="text"></td>
                    <td><input type="text" name="text" id="text"></td>
        <td><button type="button" onclick="removeRow(this)">Remove</button></td>
    `;

    table.appendChild(newRow); // Append the new row to the table
}

// Function to remove a row
function removeRow(button) {
    button.parentElement.parentElement.remove();
}

function addEmployment() {
    let section = document.createElement("div");
    section.classList.add("pastEmployment-section");

    section.innerHTML = `
        <label><strong>Past Employer where you drove the heavy truck: </strong></label><br>

        <label for="pastCompany">Company Name:</label>
        <input type="text" name="company" required>

        <label for=" Address">Address:</label>
        <input type="text" name="address" required>

        <label for="supervisor">Supervisor’s Name:</label>
        <input type="text" name=" Supervisor" required>

        <label for="phone">Phone #:</label>
        <input type="tel" name="phone" required>

        <label for="startDate"><strong>Employment Start Date: </strong></label>
        <input type="date" name="startDate" required>

        <label for="endDate"><strong>Employment End Date: </strong></label>
        <input type="date" name="endDate" required>

         

        <label>Type of Vehicle(s) most often driven for this employer: </label><br>
        Tractor <input type="checkbox">

        <button type="button" onclick="removeEmployment(this)">Remove</button>
    `;

    document.querySelector(".pastEmployment-section").parentNode.appendChild(section);
}

// Function to remove an employment section
function removeEmployment(button) {
    button.parentElement.remove();
}

function downloadForm() {
    window.open("driverApplication.pdf", "_blank"); // Ensure this file is in the same directory

}


function printForm() {
    window.print();
}

function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

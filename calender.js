
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("month-year");
    const calendarDays = document.getElementById("calendar-days");

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const currentDate = today.getDate(); // Get today's date

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    monthYear.innerText = `${monthNames[currentMonth]} ${currentYear}`;

    function generateCalendar() {
        calendarDays.innerHTML = "";
        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Adjust for Monday start (firstDay 0 is Sunday, so shift it)
        firstDay = firstDay === 0 ? 6 : firstDay - 1;

        for (let i = 0; i < firstDay; i++) {
            calendarDays.innerHTML += ` <div></div>`; // Empty slots for alignment
        }

        for (let day = 1; day <= lastDate; day++) {
            // Check if the current day is today and apply the class
            if (day === currentDate) {
                calendarDays.innerHTML += `<div class="current-day" id="day" >${day} </div>`;
            } else {
                calendarDays.innerHTML += `<div>${day}</div>`;
            }
        }
    }

    generateCalendar();
});


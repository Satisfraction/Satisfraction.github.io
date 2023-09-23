// counter.js

// Function to increment and display the visit count
function incrementVisitCount() {
    if (localStorage.getItem('visitCount')) {
        var count = parseInt(localStorage.getItem('visitCount'));
        count++;
        localStorage.setItem('visitCount', count);
    } else {
        localStorage.setItem('visitCount', 1);
    }

    var visitCountElement = document.getElementById('visitCount');
    if (visitCountElement) {
        visitCountElement.textContent = localStorage.getItem('visitCount');
    }
}

// Call incrementVisitCount function when the page loads
window.addEventListener('load', incrementVisitCount);
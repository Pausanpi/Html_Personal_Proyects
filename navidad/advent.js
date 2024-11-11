document.addEventListener("DOMContentLoaded", function() {
    var today = new Date();
    var currentDay = today.getDate();
    var currentMonth = today.getMonth(); // 0-indexed, so December is 11

    // Loop through each button and enable/disable based on the date
    for (var i = 1; i <= 24; i++) {
        var button = document.querySelector('.div' + i + ' button');
        if (currentMonth === 11 && i <= currentDay) { // December is month 11
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }
});

function showImage(src) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeImage() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
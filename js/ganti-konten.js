const btnA = document.getElementById('button-a');
const btnB = document.getElementById('button-b');
const btnC = document.getElementById('button-c');
const btnD = document.getElementById('button-d');
const contentA = document.getElementById('content-a');
const contentB = document.getElementById('content-b');
const contentC = document.getElementById('content-c');
const contentD = document.getElementById('content-d');

btnA.addEventListener('click', function() {
    contentA.style.display = "block";
    contentB.style.display = "none";
    contentC.style.display = "none";
    contentD.style.display = "none";
});

btnB.addEventListener('click', function() {
    contentA.style.display = "none";
    contentB.style.display = "block";
    contentC.style.display = "none";
    contentD.style.display = "none";
});

btnC.addEventListener('click', function() {
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "block";
    contentD.style.display = "none";
});

btnD.addEventListener('click', function() {
    contentA.style.display = "none";
    contentB.style.display = "none";
    contentC.style.display = "none";
    contentD.style.display = "block";
});

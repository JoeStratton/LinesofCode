var lines = 0;
var programmers = 0;

function termClick(number) {
    lines = lines + number;
    document.getElementByID("lines").innerHTML = lines;
};
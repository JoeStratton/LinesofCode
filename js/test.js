var lines = 0;
var programmers = 0;
var cps = 1;

function termClick(number) {
    lines = lines + number;
    document.getElementByID("lines").innerHTML = lines;
};

function buyProgrammer() {
    var progCost = Math.floor(10 * Math.pow(1.1,programmers));
    if(lines >= progCost){
        programmers = programmers + 1;
        lines = lines - progCost;
        document.getElementByID('programmers').innerHTML = programmers;
        document.getElementByID('lines').innerHTML = lines;
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,programmers));
    document.getElementByID('progCost').innerHTML = nextCost;
};

window.setInterval(function(){
    //stuff runs in here every second
    //termClick(programmers);
}, 1000);

//var terminal = document.getElementByID('ui_terminal');

//terminal.addEventListener('click', function() {
//    console.log("you wrote a line of code");
//   termClick(cps);
//}, false);

$("ui_terminal").click(function() {
    console.log("you wrote a line of code");
    termClick(cps);
});
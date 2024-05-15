
function toggleNav_andFloatRight() {


    var element = document.getElementById("control");
    var fontSize = window.getComputedStyle(element).getPropertyValue('font-size');
    var scrollbarButton = document.getElementById("scrollbar-opening-button");
    var currentColor = window.getComputedStyle(scrollbarButton).getPropertyValue("color");

    if (fontSize === '10px') {
        scrollbarButton.style.color = "#fff";
        var scrollbar = document.getElementById("scrollbar");
        var button = document.getElementById("scrollbar-closing-button-item");
        scrollbar.style.width = "400px";
        scrollbar.style.padding = "5px";
        button.style.display = "block";
        

        var div = document.getElementById("header-logo");
        div.style.marginLeft = "350px";

        var targetDiv = document.getElementById("contentDiv");
        targetDiv.classList.toggle("blurred");
    }


    else {

        if (currentColor === "rgb(255, 255, 255)") {
            scrollbarButton.style.color = "#B6A070";
            var rotation = 90;
            scrollbarButton.style.transform = "rotate(" + rotation + "deg)";

            var menubar = document.getElementById("mobileMenubar");
            menubar.style.padding = "0.5px";
            menubar.style.height = "40px";

        }

        else {
            scrollbarButton.style.color = "rgb(255, 255, 255)";
            var rotation = 180;
            scrollbarButton.style.transform = "rotate(" + rotation + "deg)";

            var menubar = document.getElementById("mobileMenubar");
            menubar.style.height = "0";
            menubar.style.padding = "0";

        }

    }











}


function reverseNav_andFloatLeft() {
    var scrollbar = document.getElementById("scrollbar");
    var button = document.getElementById("scrollbar-closing-button-item");
    scrollbar.style.width = "0px";
    button.style.display = "none";
    scrollbar.style.borderRight = "0px";

    var div = document.getElementById("header-logo");
    div.style.marginLeft = "0px";
    scrollbar.style.padding = "0px";

    var menubar = document.getElementById("menubar-item");
    var rotation = 180;
    menubar.style.transform = "rotate(" + rotation + "deg)";

    var targetDiv = document.getElementById("contentDiv");
    targetDiv.classList.toggle("non_blurred");
}


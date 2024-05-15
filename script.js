

function toggleNav_andFloatRight() {
    var scrollbar = document.getElementById("scrollbar");
    var div = document.getElementById("header-logo");
    var windowWidth = window.innerWidth;

    //Açılır menünün sağdan sola açılmasını ve header bölümündeki elementlerin gerektiği kadar sağa kaymasını sağlayan kod bölümü
    //Mantık Komutları eğer pencerenin boyutları değişirse açılır menünün ve kayan div'lerin konumunu optimize etmeyi sağlar
    if (windowWidth <= 576) {
        scrollbar.style.width = "200px";
        div.style.marginLeft = "175px";
    }
    else if (windowWidth <= 768) {
        scrollbar.style.width = "250px";
        div.style.marginLeft = "218px";
    }
    else if (windowWidth <= 992) {
        scrollbar.style.width = "300px";
        div.style.marginLeft = "262px";
    }
    else if (windowWidth <= 1200) {
        scrollbar.style.width = "350px";
        div.style.marginLeft = "306px";
    }
    else {
        scrollbar.style.width = "400px";
        div.style.marginLeft = "350px";
    }

    //Gerekli optimizasyon işlemlerini içerir
    scrollbar.style.padding = "5px";


    //İkon animasyonları
    var menubar = document.getElementById("scrollbar-opening-button-icon");
    var rotation = 90;
    menubar.style.transform = "rotate(" + rotation + "deg)";
}


function reverseNav_andFloatLeft() {
    var scrollbar = document.getElementById("scrollbar");
    var div = document.getElementById("header-logo");

    //Açılır menünün soldan sağa kapanmasını ve header bölümündeki elementlerin gerektiği kadar sola kaymasını sağlayan kod bölümü
    scrollbar.style.width = "0px";
    div.style.marginLeft = "0px";
    
    //Gerekli optimizasyon işlemlerini içerir
    scrollbar.style.padding = "0";
    scrollbar.style.borderRight = "0px";

    //İkon animasyonları
    var menubar = document.getElementById("scrollbar-opening-button-icon");
    var rotation = 180;
    menubar.style.transform = "rotate(" + rotation + "deg)";
}



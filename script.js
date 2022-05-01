

// The code below is used for the carousel in the index page. With a global variable slideIndex, calling this function onload hides all slides and increments the slideIndex, displaying different indexes of the slides array by changing the hidden display property to block. Furthermore, using recursion, the function calls itself on a timer ever 5 seconds. The logic behind this JS function was copied from w3schools, slightly adjusting some values to suit my webpage.

var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);

}

// The code below is used in the return to top button. Being called on scroll, the function displays the button if the users scroll position in the viewport is more than 30. When the button is displayed an event listener in the function checks for a click on the button and brings the user's scroll position back to the top. The JS logic behind the code was copied from w3schools.

window.onscroll = function () { scrollFunction() };
var scrollTopButton = document.getElementsByClassName("return-to-top-btn");
function scrollFunction() {
    console.log("scrolling");
    for (i = 0; i < scrollTopButton.length; i++) {

        if (document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
            scrollTopButton[i].style.display = "block";
        } else {
            scrollTopButton[i].style.display = "none";
        }

        scrollTopButton[i].addEventListener("click", function () {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });
    }
};

// The code below is used in the video.html webpage. Being called onload, the function hides all multimedia elements. The argument in the function serves as the index of the array of multimedia elements, the argument of the function is then used to display the specific multimedia element. Each article onclick calls the same function but runs a different argument, therefore allowing the users to show the video they would like to see by clicking on the corresponding article. Furthermore, the function helps to scroll the users position up to where the multimedia element would be when it is selected. The planning and implementation of this code component is done by myself.

function displaySection(x) {

    var y = document.getElementsByClassName("main-highlight-video-container");
    var z = document.getElementById("video" + x);
    var a = document.getElementsByClassName("video-box-container");
    for (i = 0; i < y.length; i++) {

        y[i].style.display = "none";
        a[i].style.display = "inline-block";
    }

    y[x].style.display = "block";

    for (i = 0; i < a.length; i++) {
        a[i].style.border = "0px";

    }
    z.style.border = "5px solid red";


    if (document.documentElement.clientWidth < 600) {
        document.documentElement.scrollTop = 130;
        document.body.scrollTop = 130;
    } else {
        document.documentElement.scrollTop = 225;
        document.body.scrollTop = 225;
    }

    var p = document.getElementById("loading");
    p.innerHTML = "";

};

// The code below is used for the video in the tech.html webpage. Being called onload, an inner function when the selected id divs are clicked. Where a global variable b will change values and mute/play sound depending on its value. When the webpage is loaded the video is muted by default, but with this users are able to hear the video sound if they like by clicking on the video container. The planning and implementation of this code component is done by myself.

var b = -1;
function videoSound() {
    var x = document.getElementById("techVideo");
    var y = document.getElementById("techVideo1");
    x.onclick = function () {
        b *= -1;
        if (b == 1) {
            x.muted = false;
            x.volume = 0.7;
        }
        else {
            x.muted = true;
        }
    }

    y.onclick = function () {
        b *= -1;
        if (b == 1) {
            x.muted = false;
            x.volume = 0.7;
        }
        else {
            x.muted = true;
        }
    }
}

// The code below is used for the subscription popup form . The function is called onclick when the newsletter link is clicked on, displaying the popup and giving it the animation name and timing fade .5s, making use of the fade animation already written in the CSS. The planning and implementation of this code component is done by myself.

function popup() {
    var popup = document.getElementsByClassName("popup-container");
    for (i in popup) {
        popup[i].style.display = "inline";
        popup[i].style.animation = "fade .5s";
    }
}

// The code below is also used for the subscription popup form. The function is called onclick when the close icon is being clicked on. The function resets the popup subscription form into its original state and changes the display property to none. The planning and implementation of this code component is done by myself.

function closePopup() {
    var popup = document.getElementsByClassName("popup-container");
    var text = document.getElementsByClassName("popup-textbox-text");
    for (i in popup) {
        popup[i].style.display = "none";

        text[i].innerHTML = "Sign up for our Weekly Newsletter";
        text[i].style.fontSize = "25px";
        text[i].style.padding = "3% 3%";
        text[i].style.marginTop = "17%";

        var inputField = document.getElementsByClassName("popup-textbox-big-container");
        inputField[i].style.display = "block";

        var suscribeButtonBox = document.getElementsByClassName("popup-textbox-button-container");
        suscribeButtonBox[i].style.display = "block";
    }
}

// The code below is also used for the subscription popup form. The function is called onclick when the the submit button is being clicked on. The function changes the innerHTML of the original popup-textbox-text to a thank you for subscribing message. All other inputs and labels are not displayed afterwards, leaving only the close button so that the next time popup is reopened the original state of the popup is restored. The planning and implementation of this code component is done by myself.

function subscribedMessage() {
    var text = document.getElementsByClassName("popup-textbox-text");
    for (i in text) {
        text[i].innerHTML = "Thanks for suscribing to our newsletter. You should receive a confirmation email soon";
        text[i].style.fontSize = "18px";
        text[i].style.padding = "5px 20px";
        text[i].style.marginTop = "40%";

        var inputField = document.getElementsByClassName("popup-textbox-big-container");
        inputField[i].style.display = "none";

        var suscribeButtonBox = document.getElementsByClassName("popup-textbox-button-container");
        suscribeButtonBox[i].style.display = "none";
    }
}

// The code below is used for the top 10 webpage. The function is called when a rank-inner-container div is clicked on, changing the spotify-playlist-container display property to block if it's current display property is none. Further code includes adding certain animations into the appearance of the playlist and changing of button content/style to smoothen the user experience. Planning and implementation of the code is done by myself.

function spotifyPlaylist(x) {
    var playlist = document.getElementById("spotify" + x);
    var button = document.getElementsByClassName("button");
    if (playlist.style.display == "none") {
        playlist.style.display = "block";
        playlist.style.animation = "drop 1s";
        button[x - 1].style.marginTop = "20px";
        button[x - 1].innerHTML = "&#8963;"

        var index = setTimeout(function () {
            playlist.style.zIndex = 2;
        }, 1500)
        
        
    } else {
        playlist.style.zIndex = -1;
        playlist.style.display = "none";
        button[x - 1].style.marginTop = "-20px";
        button[x - 1].innerHTML = "&#8964;"
        clearTimeout(index);
    }
}


//Below this point onwards are all code meant for mobile devices/ devices on lower viewport width. //

// The code below is used for the menu bar when the viewport width is below 1000px and the menu icon is displayed. When the window is being clicked clickMenu is being called and when the window is being touched, touchMenu is being called. The function adds the corresponding event listener to the menu icon and displays the menu as block and creating a drop down animation. Prevent default is also being used to ensure that the touch and click events dont interfere with one another. The planning and implementation of this code component is done by myself, however I needed to look up help on specific threads in StackOverflow to prevent the clash of touch and click events.

var a = -1;

window.ontouchstart = touchMenu();
window.onclick = clickMenu();

function touchMenu() {
    var menuButton = document.getElementsByClassName("menu-icon");
    for (i = 0; i < menuButton.length; i++) {
        menuButton[i].addEventListener("touchstart", function () {
            a *= -1;
            var menuOptions = document.querySelectorAll(".topnav a");
            for (j = 0; j < menuOptions.length; j++) {
                if (a == 1) {
                    menuOptions[j].style.display = "block";
                    menuOptions[j].style.animation = "menu .8s"
                }
                else {
                    menuOptions[j].style.display = "none";

                }
            }
            menuOptions[0].style.display = "none";
            window.event.preventDefault();
        })
    }
};

function clickMenu() {
    var menuButton = document.getElementsByClassName("menu-icon");
    for (i = 0; i < menuButton.length; i++) {
        menuButton[i].addEventListener("click", function () {
            a *= -1;
            var menuOptions = document.querySelectorAll(".topnav a");
            for (j = 0; j < menuOptions.length; j++) {
                if (a == 1) {
                    menuOptions[j].style.display = "block";
                    menuOptions[j].style.animation = "menu 1s"

                }
                else {
                    menuOptions[j].style.display = "none";
                }
            }
            menuOptions[0].style.display = "none";
            window.event.preventDefault();
        })
    }
}


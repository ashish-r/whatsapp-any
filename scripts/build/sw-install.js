window.onload=function(){"use strict";function n(t){c.innerText=t,c.className="show"}function i(){c.className=""}var c=document.getElementById("snackbar");window.addEventListener("appinstalled",function(){i()}),window.addEventListener("beforeinstallprompt",function(t){t.preventDefault(),n("Click this for quick access WhatsApp Direct!"),c.addEventListener("click",function(){i(),t.prompt(),t.userChoice.then(function(t){"accepted"!==t.outcome&&n("Click this for quick access WhatsApp Direct!")}).catch(function(){n("Click this for quick access WhatsApp Direct!")})})}),"serviceWorker"in navigator&&navigator.serviceWorker.register("scripts/build/sw.js").then(function(e){e.addEventListener("updatefound",function(){if(navigator.serviceWorker.controller){var t=e.installing;t&&(t.onstatechange=function(){switch(t.state){case"installed":n("Update available. Click this to reload."),c.addEventListener("click",function(){i(),window.location.reload()})}})}})})};
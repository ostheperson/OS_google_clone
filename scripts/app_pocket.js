// In previouse iterations, clicking on the trigger icon while the pocket was
// open would close it, but then it would be opened again upon releasing the
// mouse. I wanted it to toggle the pocket like the real google home page.

// The logic here makes it so you can toggle the app pocket with the icon as 
// well as close it by clicking on the background.

const appPocket = document.getElementById('appPocket');
const appPocketTrigger = document.getElementById('appPocketTrigger');

// wether or not the trigger should open the pocket
var shouldOpenOnMouseUp = true;

window.addEventListener('mousedown', e=> {
    if (didNotClickPocket(e)) {
        if (clickedTrigger(e) && pocketIsShowing()) shouldOpenOnMouseUp = false;
        hidePocket();
    }
});

window.addEventListener('mouseup', e=> {
    if (clickedTrigger(e) && shouldOpenOnMouseUp) openPocket();
    else shouldOpenOnMouseUp = true;
});

function didNotClickPocket(e) { return e.target.id != appPocket.id; }
function clickedTrigger(e) { return e.target.id == appPocketTrigger.id; }
function pocketIsShowing() { return appPocket.style.display == 'block'; }

function openPocket() { appPocket.style.display = 'block'; }
function hidePocket() { appPocket.style.display = 'none' }
//Make the DIV element draggagle:
dragElement(document.getElementById("gallerybrowser"));
dragElement(document.getElementById("aboutbrowser"));
dragElement(document.getElementById("modelbrowser"));
dragElement(document.getElementById("conceptbrowser"));
dragElement(document.getElementById("videobrowser"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// -------------------close and open browsers-----------------------------------------

function galleryOpen() {
  document.getElementById("gallerybrowser").style.display = "block";
}

function galleryClose() {
  document.getElementById("gallerybrowser").style.display = "none";
}


function aboutOpen() {
  document.getElementById("aboutbrowser").style.display = "block";
}

function aboutClose() {
  document.getElementById("aboutbrowser").style.display = "none";
}


function modelOpen() {
  document.getElementById("modelbrowser").style.display = "block";
}

function modelClose() {
  document.getElementById("modelbrowser").style.display = "none";
}

function conceptOpen() {
  document.getElementById("conceptbrowser").style.display = "block";
}

function conceptClose() {
  document.getElementById("conceptbrowser").style.display = "none";
}

function videoOpen() {
  document.getElementById("videobrowser").style.display = "block";
}

function videoClose() {
  document.getElementById("videobrowser").style.display = "none";

}















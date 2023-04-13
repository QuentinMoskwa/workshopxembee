function connect(div1, div2, color, thickness, side) {
    var off1 = getOffset(div1);
    var off2 = getOffset(div2);
    // bottom right
    if(side === "right")
    {
        var x1 = off1.left + off1.width;
    }
    else
    {
        var x1 = off1.left;
    }
    var y1 = off1.top + off1.height/2;
    // top right
    var x2 = off2.left + off2.width/2;
    var y2 = off2.top + off2.height/2;
    // distance
    var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) -10;
    // center
    var cx = (x1 + x2) / 2 - length / 2;
    var cy = (y1 + y2) / 2 - thickness / 2;
    // angle
    var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
    // make hr
    var htmlLine =
        "<div class='ligne' style='padding:0px; margin:0px; z-index:5; height:" +
        thickness +
        "px; background-color:" +
        color +
        "; line-height:1px; position:absolute; left:" +
        cx +
        "px; top:" +
        cy +
        "px; width:" +
        length +
        "px; -moz-transform:rotate(" +
        angle +
        "deg); -webkit-transform:rotate(" +
        angle +
        "deg); -o-transform:rotate(" +
        angle +
        "deg); -ms-transform:rotate(" +
        angle +
        "deg); transform:rotate(" +
        angle +
        "deg);' />";
    //
    document.body.innerHTML += htmlLine;
}

function getOffset(el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.pageXOffset,
    top: rect.top + window.pageYOffset,
    width: rect.width || el.offsetWidth,
    height: rect.height || el.offsetHeight,
  };
}

window.addEventListener("load", tracerLigne);
function tracerLigne() {
    const elements = document.querySelectorAll(".ligne");

    // Parcours de tous les éléments et suppression un par un
    for (let i = 0; i < elements.length; i++) {
      elements[i].parentNode.removeChild(elements[i]);
    }
    var div1 = document.getElementById("description1");
    var div2 = document.getElementById("rondDescription1");
    connect(div1, div2, "#3F2C10", 5, "right");
    var div1 = document.getElementById("description2");
    var div2 = document.getElementById("rondDescription2");
    connect(div1, div2, "#3F2C10", 5, "right");
    var div1 = document.getElementById("description3");
    var div2 = document.getElementById("rondDescription3");
    connect(div1, div2, "#3F2C10", 5);
}

window.onresize = tracerLigne;




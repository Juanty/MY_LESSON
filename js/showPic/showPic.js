function showPic (whichPic) {
  if (!document.getElementById("placeholder")) return false;
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  if (placeholder.nodeName != "IMG") return false;
  placeholder.setAttribute("src", source);
  if (document.getElementById("description")) {
    // var text = whichPic.getAttribute("title");
    var text = whichPic.getAttribute("title") ? whichPic.getAttribute("title") : ""; // 判断title属性是否存在
    var description = document.getElementById("description");
    // console.log(description.nodeValue);
    // console.log(description.childNodes[0].nodeValue);
    // console.log(description.firstChild.nodeValue); // 等价于上一句 firstChild === childNodes[0] 
    // 同理：lastChild === childNode[childNode.length-1]
    if (description.firstChild.nodeType == 3) {
      description.firstChild.nodeValue = text;
    }
  }
  return true;
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  console.log(body_element.childNodes.length);
  console.log(body_element.nodeType);
}
countBodyChildren();

function prepareGallery () {
  if (!document.getElementById) return false;
  if (!document.getElementsByTagName) return false;
  if (!document.getElementById("imageGallery")) return false;
  var gallery = document.getElementById("imageGallery");
  var links = gallery.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      // return !showPic(this);
      return showPic(this) ? false : true;
    }
  }
}

function addLoadEvent (func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    }
  }
}

addLoadEvent(prepareGallery);


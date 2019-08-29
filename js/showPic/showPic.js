function showPic (whichPic) {
  var source = whichPic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  placeholder.setAttribute("src", source);
  var text = whichPic.getAttribute("title");
  var description = document.getElementById("description");
  // console.log(description.nodeValue);
  // console.log(description.childNodes[0].nodeValue);
  console.log(description.firstChild.nodeValue); // 等价于上一句 firstChild === childNodes[0] 
  // 同理：lastChild === childNode[childNode.length-1]
  description.firstChild.nodeValue = text;
}

function countBodyChildren() {
  var body_element = document.getElementsByTagName("body")[0];
  console.log(body_element.childNodes.length);
  console.log(body_element.nodeType);
}
countBodyChildren();


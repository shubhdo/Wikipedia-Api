(function(window, document) {

  var layout = document.getElementById('layout'),
    menu = document.getElementById('menu'),
    menuLink = document.getElementById('menuLink'),
    content = document.getElementById('main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll(e) {
    var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
  }

  menuLink.onclick = function(e) {
    toggleAll(e);
  };

  content.onclick = function(e) {
    if (menu.className.indexOf('active') !== -1) {
      toggleAll(e);
    }
  };

}(this, this.document));
var action = document.getElementById("button");
action.onclick = function() {
  var article = document.getElementById("article").value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "  https://en.wikipedia.org/w/api.php?action=parse&origin=*&section=0&prop=text&page=" + article + "&format=json", false);

  xhttp.send();
  var response = JSON.parse(xhttp.responseText);
  console.log(response);
  document.getElementById("title").innerHTML = article;
  document.getElementById("articleChange").innerHTML =
    JSON.stringify(response.parse.text);
}
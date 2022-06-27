function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openSchool(evt, schoolName) {
  var i, tabschool, tabstuff
 
  tabschool = document.getElementsByClassName("tabschool");
  for (i = 0; i < tabschool.length; i++) {
    tabschool[i].style.display = "none";
  }

  tabstuff = document.getElementsByClassName("tabstuff");
  for (i = 0; i < tabstuff.length; i++) {
    tabstuff[i].className = tabstuff[i].className.replace("active", "");
  }

  document.getElementById(schoolName).style.display = "block";
  evt.currentTarget.className += "active";
}

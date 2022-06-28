function openPage(pageName, elmnt, color) 
{
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}



function openSchool(evt, schoolName) 
{
  var i, tabschool, tabstuff
 
  tabschool = document.getElementsByClassName("tabschool");
  for (i = 0; i < tabschool.length; i++) 
  {
    tabschool[i].style.display = "none";
  }

  tabstuff = document.getElementsByClassName("tabstuff");
  for (i = 0; i < tabstuff.length; i++) 
  {
    tabstuff[i].className = tabstuff[i].className.replace("active", "");
  }

  document.getElementById(schoolName).style.display = "block";
  evt.currentTarget.className += "active";
}

const accordionBtns = document.querySelectorAll(“accordion”);
accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    
    this.classList.toggle(“is-open”);
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + “px”;
    }
  };
});

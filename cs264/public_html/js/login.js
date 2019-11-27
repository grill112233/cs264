function openCity(pageName,elmnt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  colortab = document.getElementsByClassName("tabFontWhite")
  for (i = 0; i < colortab.length; i++) {
    colortab[i].style.color = "white";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = "#DCDCDC";
  elmnt.style.color = "#696969";
}



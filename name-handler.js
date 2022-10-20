function nameSwap() {
  var x = document.getElementById("name");
  if (x.innerHTML === "Seb") {
      x.innerHTML = "Sasha";
    } else {
      x.innerHTML = "Seb";
    }
  
  if (document.getElementById("pfp").src.endsWith('assets/vee.png') == true)
    { 
      document.getElementById("pfp").src = "assets/veebigen.png";
    } 
  else if (document.getElementById("pfp").src.endsWith('assets/veebigen.png') == true) 
    { 
      document.getElementById("pfp").src = "assets/vee.png"; 
    }
  
  if (document.title === "Seb")
    {
      document.title = "Sasha";
    }
  else
    {
      document.title = "Seb";
    }
}

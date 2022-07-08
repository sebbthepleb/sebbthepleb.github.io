function nameSwap() {
  var x = document.getElementById("name");
  if (x.innerHTML === "Seb") {
    x.innerHTML = "Sasha";
  } else {
    x.innerHTML = "Seb";
  }
  
  if (document.getElementById("pfp").src.endsWith('assets/profile.png') == true)
  { 
    document.getElementById("pfp").src = "assets/lgbt-profile.png";
  } 
  else if (document.getElementById("pfp").src.endsWith('assets/lgbt-profile.png') == true) 
  { 
    document.getElementById("pfp").src = "assets/profile.png"; 
  }
}

var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame" ];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama" ]

function getAkanName(){
  var birthDay = document.getElementById("birthDay").value;
  var fmle = document.getElementById("fmle");
  var mle = document.getElementById("mle");
  conversionFunction(birthDay,fmle,mle)
}


function conversionFunction(birthDay,fmle,mle){
  var birthDate = new Date(birthDay);
  var dayOfWeek = birthDate.getDay();
  if(fmle.checked == true && dayOfWeek>=0){
    document.getElementById("yourAkanName").innerHTML = "Your Akan name is "+ femaleNames[dayOfWeek];
  }
  else if(mle.checked == true && dayOfWeek>=0){
    document.getElementById("yourAkanName").innerHTML = "Your Akan name is "+ maleNames[dayOfWeek];
  }
  else{
    alert("Please fill/check all items in form")
  }
}
let aboutImage =document.querySelectorAll("body > main > section > div > div.about__img > button");

let aboutInfo = document.querySelectorAll(".info");
console.log(aboutImage);

for (let i = 0; i < aboutImage.length; i++) {
    aboutInfo[i].style.display="none";


    aboutImage[i].addEventListener("click" , function(){
        
    if(aboutInfo[i].style.display == "none"){
        aboutInfo[i].style.display="block";
    }
    else{
        aboutInfo[i].style.display = "none"

    }
    // aboutInfo[i].style.display="block";
});
    // aboutImage[i].style.display = "none";
    
  }
// 
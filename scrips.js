var myimages = ["images/jellies.jpg", "images/shrimp.jpg", "images/angler.jpg", "images/squid.jpg", "images/seadragon.jpg", "images/Seahorsecoral.jpg"];

var endcount = myimages.length;

var currentImage = 0;

function buildImages() {
    for (var i = 0; i < myimages.length; i++) {
       document.getElementById("thepic").src=images[i++];
   }
}

function goHigher() {
  currentImage++;
  currentImage = currentImage%endcount;
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

function goLower() {
  currentImage--;
  if(currentImage<0){currentImage=(endcount-1);}
  else{currentImage = currentImage%endcount;}
  document.getElementById("demo").setAttribute("src",myimages[currentImage]);
}

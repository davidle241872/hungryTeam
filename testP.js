function dave(){
anime({
    targets: '#DaveChappelle',
    translateX: [-100],
    delay: 500,
    direction: 'alternate',
    loop: 1,
    duration:2000
    
  });
  anime({
    targets: '#Katwilliams',
    translateX: [-300],
    delay: 500,
    direction: 'alternate',
    loop: 1,
    duration:2000
    
  });
  anime({
    targets: '#EddieMurphy',
    translateX: [-900],
    delay: 500,
    direction: 'alternate',
    loop: 1,
    duration:2000
    
  });
  
}

function kat(){
    anime({
        targets: '#Katwilliams',
        translateX: [200],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#DaveChappelle',
        translateX: [-550],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#EddieMurphy',
        translateX: [-900],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
}
function richard(){
    anime({
        targets: '#RichardPryor',
        translateX: [500],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#DaveChappelle',
        translateX: [-550],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#EddieMurphy',
        translateX: [-900],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#Katwilliams',
        translateX: [-300],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
}

function eddie(){
    anime({
        targets: '#EddieMurphy',
        translateX: [-400],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#Katwilliams',
        translateX: [-300],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
      anime({
        targets: '#DaveChappelle',
        translateX: [-550],
        delay: 500,
        direction: 'alternate',
        loop: 1,
        duration:2000
        
      });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
     modal.style.display = "none";
   }
}

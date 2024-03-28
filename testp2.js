
// Comedian functions

//Dave Chappelle
function dave(){
    Chappelle.play()
    //Animation
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
    fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=2')

    .then(response => response.json())
    .then(user => { 
        console.log(user);
    for(let i = 0; i < 1; i++) {
        console.log(user.jokes)

    let setup = document.querySelector(".modal-body>p");
    setup.innerHTML = user.jokes[0].setup
    let punchline = document.querySelector(".modal-body>span")
    punchline.innerHTML = user.jokes[0].delivery
    
    // Popup

    // When the user clicks the button, open the modal 
    setTimeout(function() {
    modal.style.display = "block";
    },2000);
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
}
})
  
}
//Kat Williams
function kat(){
    Williams.play()
    //Animation
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
      fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=2')

      .then(response => response.json())
      .then(user => { 
          console.log(user);
      for(let i = 0; i < 1; i++) {
          console.log(user.jokes)

      let setup = document.querySelector(".modal-body>p");
      setup.innerHTML = user.jokes[0].setup
      let punchline = document.querySelector(".modal-body>span")
      punchline.innerHTML = user.jokes[0].delivery
      
      // Popup

      // When the user clicks the button, open the modal 
      setTimeout(function() {
      modal.style.display = "block";
      },2000);
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
}
})
}
//Richard Pryor
function richard(){
    Pryor.play()
    //Animation
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
      fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=2')

      .then(response => response.json())
      .then(user => { 
          console.log(user);
      for(let i = 0; i < 1; i++) {
          console.log(user.jokes)

      let setup = document.querySelector(".modal-body>p");
      setup.innerHTML = user.jokes[0].setup
      let punchline = document.querySelector(".modal-body>span")
      punchline.innerHTML = user.jokes[0].delivery
      
      // Popup

      // When the user clicks the button, open the modal 
      setTimeout(function() {
      modal.style.display = "block";
      },2000);
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
}
})
}
//Eddie Murphy
function eddie(){
    Murphy.play()
 //Animation
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
      fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=2')

        .then(response => response.json())
        .then(user => { 
            console.log(user);
        for(let i = 0; i < 1; i++) {
            console.log(user.jokes)

        let setup = document.querySelector(".modal-body>p");
        setup.innerHTML = user.jokes[0].setup
        let punchline = document.querySelector(".modal-body>span")
        punchline.innerHTML = user.jokes[0].delivery
        
        // Popup

        // When the user clicks the button, open the modal 
        setTimeout(function() {
        modal.style.display = "block";
        },2000);
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
}
})
};

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("EddieMurphy");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Comedian audio ID
let Chappelle = document.getElementById("Dave");
let Pryor = document.getElementById("Richard");
let Williams = document.getElementById("Kat")
let Murphy = document.getElementById("Eddie")

// Announcer audio ID
let announcer = document.getElementById("announcer")

//Background music ID
let background = document.getElementById("Backgroundmusic")


//Curtains Animation
function curtains(){
    announcer.play()
    background.play()
    background.volume = 0.3;
    background.loop = true;
    
anime({
    targets: '#left',
    translateX: [-700],
    delay: 500,
    direction: 'alternate',
    loop: false,
    duration:3000,
    complete: function(anim) {

    document.querySelector("#left").style.display = "none";
    }
  });

  anime({
    targets: '#right',
    translateX: [700],
    delay: 500,
    direction: 'alternate',
    loop: false,
    duration:3000,
    complete: function(anim) {

        document.querySelector("#right").style.display = "none";
        }
    //clickmeSign Animation
  });
  anime({
    targets: '#clickMe',
    translateX: [700],
    delay: 500,
    direction: 'alternate',
    loop: false,
    duration:3000,
    complete: function(anim) {

        document.querySelector("#clickMe").style.display = "none";
        }
    
  });
}
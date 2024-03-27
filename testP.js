
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
// submitInput is my button
const submitInput = document.getElementById("button");
const userInput = document.getElementById("SearchBar");
const eventContainer = document.getElementById("EventList");

const fetchData = () => {
  const inputValue = userInput.value;
  // url is dynamic for the user input
  const url = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&apikey=pjOyZm2wY8wpDMijKrvkbYyzGxigNnZH&city=${inputValue}`;

// I want an empty div, for my next input or else it'll display previous/current information
  eventContainer.innerHTML = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // using console.log to view the data within the browser console.log ( You can look through the array)
      if (data._embedded && data._embedded.events) {
        data._embedded.events.forEach((events) => {
          const eventItem = document.createElement("div");

          const titleElement = document.createElement("p");
          const urlElement = document.createElement("p");


            titleElement.innerText = events.name;
          

           //titleElement.innerText = events.url;

           //titleElement.innerText = events.info;

          // to add the empty container
          eventItem.appendChild(titleElement);
          eventItem.appendChild(urlElement);
          eventContainer.appendChild(eventItem);

        });
      } else {
        const errorMessage = document.createElement("p");
        errorMessage.innerText = "No events in the city currently.";
        eventContainer.appendChild(errorMessage);
      }
    });
};
// submitting the user input 
submitInput.addEventListener("click", () => {
  fetchData();
});   


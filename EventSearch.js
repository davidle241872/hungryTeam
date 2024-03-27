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
          

           //titleElement.innerText = events.url; - this would grab the url of the events

           //titleElement.innerText = events.info; - this would give details about the events

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

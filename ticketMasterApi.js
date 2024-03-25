fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&apikey=pjOyZm2wY8wpDMijKrvkbYyzGxigNnZH&city=atlanta')

.then(response => response.json())
.then(user => { 
	console.log(user);
for(let i = 0; i < user._embedded.events.length; i++) {
	console.log(user);

    let eventContainer = document.createElement('div');


    let eventImage = document.createElement('img');


	let nameTag = document.createElement('p');
    let urlTag = document.createElement('p');
	 

    let eventImg = user._embedded.events[i].images[i].url;
    
    eventImage.src = eventImg;
    // eventImage.setAttribute() targets all images by the name given.. Example: "event-image" Use elements within the developer tools

    // make sure to look up at developer tools to match up if it's correctly class = "event-image"
    eventImage.setAttribute("class","event-image")
    
	nameTag.innerText = 'Name of the event: ' + user._embedded.events[i].name;
   
    
    eventContainer.appendChild(eventImage);
	eventContainer.appendChild(urlTag);
	eventContainer.appendChild(nameTag);

	 document.body.appendChild(eventContainer);

}
});
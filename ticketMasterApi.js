fetch('https://app.ticketmaster.com/discovery/v2/events.json?classificationName=comedy&apikey=pjOyZm2wY8wpDMijKrvkbYyzGxigNnZH&city=atlanta')

.then(response => response.json())
.then(user => { 
	console.log(user);
for(let i = 0; i < user._embedded.events.length; i++) {
	console.log(user);

    let eventContainer = document.createElement('div');

    let eventImage = document.createElement('img');
	let nameTag = document.createElement('p');
    let timeTag = document.createElement('p');
    let urlTag = document.createElement('p');
    let addressTag = document.createElement('p');
    let infoTag = document.createElement('p');

    let eventImg = user._embedded.events[i].images[i].url;

    eventImage.src = eventImg;
    // eventImage.setAttribute() targets all images by the name given.. Example: "event-image" Use elements within the developer tools
    // make sure to look up at developer tools to match up if it's correctly class = "event-image"
    eventImage.setAttribute("class","event-image")
    
	nameTag.innerText = 'Name of the event: ' + user._embedded.events[i].name;
    timeTag.innerText = 'date & time of the event: ' + user._embedded.events[i].sales.public.startDateTime;
    urlTag.innerText = 'Url of the event: ' + user._embedded.events[i].url;
    // by adding 0 into the second array, we are able to pull the first data within the object 
    addressTag.innerText = 'Address of the event: ' + user._embedded.events[i]._embedded.venues[0].address.line1;
    infoTag.innerText = 'Info: ' + user._embedded.events[i].info;
    
    
    eventContainer.appendChild(eventImage);
    eventContainer.appendChild(nameTag);
    eventContainer.appendChild(addressTag);
    eventContainer.appendChild(urlTag);
	eventContainer.appendChild(timeTag);
    eventContainer.appendChild(infoTag);

	 document.body.appendChild(eventContainer);

}
});
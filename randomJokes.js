// found the API website for us, that's free and make sure to check off the options of the jokes we don't want to use
// idea of using a forloop
// being able to implement getElementbyId --> inner.Text --> .appendChild("jokeTag")
// idea of refreshing a new joke using button or possibly doubleClick function

fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=5')

.then(response => response.json())
.then(user => { 
	console.log(user);
for(let i = 0; i < user.jokes.length; i++) {
	console.log(user);

	let jokesContainer = document.createElement('div');

	jokesContainer.classList.add("card");

	let categoryTag = document.createElement('p');
	 let typeTag = document.createElement('p');
	 let jokeTag = document.createElement('p');
	 let deliveryTag = document.createElement('p');


	categoryTag.innerText = 'Category: ' + user.jokes[i].category;
	typeTag.innerText = 'Types: ' + user.jokes[i].type;
	jokeTag.innerText = 'Jokes: ' + user.jokes[i].setup;
	deliveryTag.innerText = 'Delivery: ' +  user.jokes[i].delivery;


	jokesContainer.appendChild(categoryTag);
	jokesContainer.appendChild(typeTag);
	jokesContainer.appendChild(jokeTag);
	jokesContainer.appendChild(deliveryTag);

	 document.body.appendChild(jokesContainer);
}
})


// //.then(user => {
//     console.log(user);
//     for(let i=0; i < user.results.length; i++) {

// 		let jokeTag = document.getElementById('p')

// 		jokeTag.innerText = user

// 	}

// 	detailContainer.appendChild(jokeTag);
// 	document.body.appendChild(jokeContainer);
// 	// console.log(jokeTag);
// });


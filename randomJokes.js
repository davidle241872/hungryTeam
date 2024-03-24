// found the API website for us, that's free and make sure to check off the options of the jokes we don't want to use
// idea of using a forloop
// being able to implement getElementbyId --> inner.Text --> .appendChild("jokeTag")
// idea of refreshing a new joke using button or possibly doubleClick function


fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10')

.then(response => response.json())
.then(user => {
    console.log(user);
    for(let i=0; i < user.results.length; i++) {

		let jokeTag = document.getElementById('p')

		jokeTag.innerText = user.results[i].joke

	}

	detailContainer.appendChild(jokeTag);
	document.body.appendChild(jokeContainer);
});


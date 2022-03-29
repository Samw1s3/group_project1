const buttonLoveCalculatorShow = document.getElementById('button-love-calculator-show');
const buttonLoveCalculatorSubmit = document.getElementById('button-love-calculator-submit');
const buttonLoveCalculatorTryAgain = document.getElementById('button-love-calculator-try-again');
const inputLoveCalculatorName1 = document.getElementById('input-love-calulator-name-1');
const inputLoveCalculatorName2 = document.getElementById('input-love-calulator-name-2');
const formLoveCalculatorNames = document.getElementById('form-love-calculator-names');
const h3LoveCalculatorFortune = document.getElementById('h3-fortune');
const h3LoveCalculatorRating = document.getElementById('h3-rating');
const h3LoveCalculatorSlogan = document.getElementById('h3-slogan');

// when the page renders
// then I want to see a love calculator button or a help me now button
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com',
		'X-RapidAPI-Key': '0c8fcd7cd3msh68dcf86fbee8a77p1bc6a6jsn718ffff2e555'
	}
};
// sectionQuestion.classList.add(message);
// getNames();

    
// when I click on the love calculator button
buttonLoveCalculatorShow.addEventListener('click', function(event){
	// then I want to see name form for love calculator lucky names
	formLoveCalculatorNames.classList.remove('hide');
	// lucky person 1 and lucky person 2
	// hide slogan, button show
	h3LoveCalculatorSlogan.classList.add('hide');
	buttonLoveCalculatorShow.classList.add('hide');
});

	// when I press the submit button
buttonLoveCalculatorSubmit.addEventListener('click', function(event){
	event.preventDefault();
	
	// when I type in the two names into the input
    const getName1 = inputLoveCalculatorName1.value;
	const getName2 = inputLoveCalculatorName2.value;
	console.log(getName1, getName2);
    // send as names object to api? 
    // fetch data from api for percentage
	fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${getName1}&fname=${getName2}`, options)
	.then(response => response.json())
	.then(function(data){
		console.log(data);
		
		// render the data
		h3LoveCalculatorRating.textContent = data.percentage + ' %';
		h3LoveCalculatorFortune.textContent = data.result;

		// hide the name form
		hideNameForm();
		showRatingAndFortune();
	});
});
	// hide the slogan
	// and I want the input names to disappear
	function hideNameForm(){
		formLoveCalculatorNames.classList.add('hide');
		h3LoveCalculatorSlogan.classList.add('hide');
		
	}

	// then I want to see a percentage render (in the heart) of our love likelihood
	function showRatingAndFortune(){
		h3LoveCalculatorFortune.classList.remove('hide');
		h3LoveCalculatorRating.classList.remove('hide');
		
		// render a percentage 
		//  renderLoveCalculation();
	}


    
    // render a percentage sign
	//  function renderLoveCalculation(rating, fortune){
	// 	h3LoveCalculatorFortune.textContent(fortune);
	// 	h3LoveCalculatorRating.textContent= rating;

	// 	//  
	// 	// clear the input names
	// 	inputLoveCalculatorName1.value = null;
	// 	inputLoveCalculatorName2.value = null;
	//  }
// render a try again button at top of heart 



// if the percentage renders and it is below 50 (low)
// then I want a gif of a broken heart to display briefly (6seconds)
    // z-index higher
// then I want to see an escape now with a good excuse (excuse generator) button show

// else if the percentage renders and it is higher than 50 (high)
// then I want a gif of a beating heart to display briefly (6seconds) 
    // z-index higher
// then I want to see a fun date activities (activity generator) button show

// else when a percentage renders (ALL) 
// then a weather card (mini dashboard or icon) shows
// and a joke generator button shows 

// button click 
const buttonHelpMe = document.getElementById("button-help-me-now");
const displayExcuse = document.getElementById("display-excuse");
// When the user clicks on the button
buttonHelpMe.addEventListener('click', function(event){
    event.preventDefault();
    console.log(event);
    // the array of excuses to display
        const excusesList = [
            "I'm sorry but you look exactly like my ex and I can't handle it", 
            "Constantly talk about your ex", 
            "Fake an allergic reaction",
            "Behave in a way that makes your date leave first (act like a pervert)", 
            "Spill a drink on yourself—sacrifice your clothes to get out of the date", 
            "Say you hate sex"
        ];

// cycles through array and randomly selects excuse
const randomExcuse = excusesList[Math.floor(Math.random()*excusesList.length)];
// excuse is displayed on screen
displayExcuse.textContent = randomExcuse;
})


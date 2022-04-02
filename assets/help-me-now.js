
// button click 
const buttonHelpMe = document.getElementById("button-help-me-now");
const displayExcuse = document.getElementById("display-excuse");

buttonHelpMe.addEventListener('click', function(random){
    random.preventDefault();
const excusesList = ["Im sorry but you look exaclty like my ex and I cant handle it", "Constanly talk about your ex", 
"Fake an allergic reaction","Behave in a way that makes your date leave first (act like a pervert)", 
"Spill a drink on yourself—sacrifice your clothes to get out of the date", "Say you hate sex" ];
// excusesList[0]= "Im sorry but you look exaclty like my ex and I cant handle it";
// excusesList[1]= "Constanly talk about your ex";
// excusesList[2]= "Fake an allergic reaction"
// excusesList[3]= "Behave in a way that makes your date leave first (act like a pervert)"
// excusesList[4]= "Spill a drink on yourself—sacrifice your clothes to get out of the date"
// excusesList[5]= "Say you hate sex"

const random = Math.floor(Math.random() * excusesList.length);
console.log(random);
let displayExcuse.textContent = random

    // show questions section
// cycles through array and randomly selects excuse 
// const months = ["January", "February", "March", "April", "May", "June", "July"];

}

// excusee is is displayed on screen
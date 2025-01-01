
function calculateUserAge(){

    var userBirthDate = document.getElementById("birthDate");
    var userBirthTime = document.getElementById("birthTime");
    var years = document.getElementById("years");
    var months = document.getElementById("months");
    var days = document.getElementById("days");
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");

    var currentDate = new Date(); 
    var userTimeZone =  new Date(userBirthDate.value + " " + userBirthTime.value);

    var timeDifference = currentDate - userTimeZone;
    
    document.getElementById("calculateAge").addEventListener('click',() => {
        console.log(currentDate,userTimeZone);
        
    })

}

calculateUserAge();





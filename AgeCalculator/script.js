function calculateClick(){
    var DOB = document.getElementById("birthDate").value;
    var Currentdate = document.getElementById("currDate").value;
    
    var BirthDate = new Date(DOB);
    var CurrentDate = new Date(Currentdate);

    var age = CurrentDate.getFullYear()-BirthDate.getFullYear();
    var monthDiff = CurrentDate.getMonth()-BirthDate.getMonth();

    if(monthDiff < 0 || (monthDiff === 0 && CurrentDate.getDate()<BirthDate.getDate())){
        age--;
    }

    document.getElementById("empty").innerHTML=`You are ${age} years ${monthDiff} month old`;
    //alert(`Your age is ${age} years.`);
}
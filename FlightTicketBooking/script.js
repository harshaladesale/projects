function claculateFare(){
    const Ticket = document.getElementById("ticketClass").value;
    const Lugguage = parseFloat(document.getElementById("luggagelist").value);
    const Student = document.getElementById("isStudent").value;
    const Senior = document.getElementById("isSenior").value;
    const Msg = document.getElementById("total");

    let baseFare = {
        "Economy":400,
        "Business":700,
        "First Class":1000
    };
    let fare = baseFare[Ticket];
    if(Lugguage > 20){
        fare += (Lugguage - 20)*5;
    }
    if(Student === "Yes"){
        fare *= 0.85;
    }
    if(Senior === "Yes"){
        fare *= 0.90;
    }
    document.getElementById("total").innerText=`Total Fare: $${fare.toFixed(2)}`;
}

        
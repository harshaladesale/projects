function btnclick(){
    const name = document.getElementById("Name").value;
    const movie = document.getElementById("selShow").value;
    const time = document.getElementById("showTime").value;
    const tickets =parseInt(document.getElementById("nofTickets").value);
    const seatText = document.getElementById ("selSeat").value;
    const Total = document.getElementById("total");
    
    const seatprice =parseInt( seatText.split("₹")[1],10);

    
    let totalBill = tickets * seatprice;

    const data ={
        UserName:name,
        MovieName:movie,
        NoofTicket:tickets,
        SeatType:seatText,
        ShowTime:time
    };
    console.log("Sending Data :",data);
    try{
        const response = fetch(" http://127.0.0.1:4400/registerpassenger",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });

        const result =  response.JSON();
        console.log("Response from server:",result);

        if(response.ok){
            alert("Booking successfully..!");
        }else{
            alert("Booking failes");
        }
    }catch(error){
        // console.log("Error:",error);
        // alert("Error:");
    }

  
    
    document.getElementById("txtName").innerHTML=name;
    document.getElementById("txtMovie").innerHTML=movie;
    document.getElementById("txtShow").innerHTML=time;
    document.getElementById("txtTicket").innerHTML=tickets;
    document.getElementById("txtType").innerHTML=seatText;
    document.getElementById("txtBill").innerHTML=totalBill;

    document.getElementById("Name").value="";
    document.getElementById("selShow").value="";
    document.getElementById("showTime").value="";
    document.getElementById("nofTickets").value="";
    document.getElementById("selSeat").value="";
    document.getElementById("total").value="";
}
function calculateClick(){
    const Bill = parseInt(document.getElementById("bill").value);
    const Tip = parseInt(document.getElementById("tip").value);
    const Msg = document.getElementById("total");

    let tipAmount =(Tip/100)*Bill;
    let Total = Bill + tipAmount;
    Msg.innerText="Total: " + Total;
}
function clearClick(){
    const Msg = document.getElementById("total");
    document.getElementById("bill").value="";
    document.getElementById("tip").value="";
    Msg.innerText="";
}
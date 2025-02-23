        const button = document.getElementById("rollbtn");
        const RollHistory = document.getElementById("roll-history");
        const Dice = document.getElementById("dice");
        let historyList=[];

        function diceClick(){
          const Dice = document.getElementById("dice");
          const RollHistory = document.getElementById("roll-history");
          const rollResult = Math.floor(Math.random()*6)+1;
          const diceFace = getDiceFace(rollResult);
          Dice.innerHTML=diceFace;
          historyList.push(rollResult);
          updateRollHistory();

          Dice.classList.add("roll-animation");
            setTimeout(() => {
                Dice.classList.remove("roll-animation");  
            },1000);
            
        }
        function updateRollHistory(){
            RollHistory.innerHTML="";
            for(let i=0; i < historyList.length; i++)
            {
            const listItem = document.createElement("li");
            listItem.innerHTML= `Roll ${i+1}:<span>${getDiceFace(
                historyList[i]
            )}</span>`;
            RollHistory.appendChild(listItem);
            }
        }
        function getDiceFace(rollResult){
            switch(rollResult){
                case 1:
                    return "&#9856;";
                case 2:
                    return "&#9857;";
                case 3:
                    return "&#9858;";
                case 4:
                    return "&#9859;";
                case 5:
                    return "&#9860;";
                case 6:
                    return "&#9861;";
                default:
                    return "";
            }
        }        
        
var words = ["python","ruby","perl","java","c++"];

        let randomIndex = Math.floor(Math.random() * words.length);
        let selectedWords = words[randomIndex];
        //console.log(selectedWords);

        let guessedlist=[];

        let displayWord = "";
        for(let i=0; i<selectedWords.length; i++){
            displayWord += "_ ";
        }
        document.getElementById("display-Word").textContent = displayWord;

        function submitClick(){
            let Txtname = document.getElementById("txtName");

            if(!Txtname.value){
                alert("Please add input letter");
                return;
            }
            let letter = Txtname.value.toLowerCase();
            Txtname.value = "";

            if(guessedlist.includes(letter)){
                alert("You have already guess that word");
                return;
            }
            guessedlist.push(letter);

            let UpdateDisplay ="";
            let allLetterGuessed = true;
            for(let i = 0; i<selectedWords.length;i++){
                if(guessedlist.includes(selectedWords[i])) {
                    UpdateDisplay += selectedWords[i] + " ";
                }
                else{
                    UpdateDisplay += "_ ";
                    allLetterGuessed = false;
                }
            }
            document.getElementById("display-Word").textContent = UpdateDisplay;
            if(allLetterGuessed){
                alert("Congratualizations! You guessed the word correctly!");
            }
        }
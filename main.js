var scoreVal = localStorage.getItem("score");
var strkKey = localStorage.key(1)
var strkVal = localStorage.getItem(strkKey);

score = score ? parseInt(scoreVal) : 0;
localStorage.setItem("score", scoreVal);
localStorage.setItem("strk", strkVal);


var strkText = document.getElementById("streak").innerHTML;

function buildQuestion() {
    fetch('https://caleb-sudo.github.io/BioStudy/questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious = document.getElementById("pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious");
            const field = document.getElementById("box");

            const submit = document.createElement("button");
            const p = document.createElement("p");
            const img = document.createElement("img");
            var questionNum;
            questionNum = Math.floor(Math.random() * data.UnitD.length);
            pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious.innerHTML = data.UnitD[questionNum].question;
            for (var i = 0; i < 4; i++) {
                const radio = document.createElement("input");
                const lab = document.createElement("label");
                radio.type = "radio";
                radio.name = "opts";
                radio.id = 'r' + i;
                radio.className = "radios";
                lab.htmlFor = 'r' + i;
                lab.innerHTML = data.UnitD[questionNum].options[i];
                lab.className = "radio_label";
                field.appendChild(radio);
                field.appendChild(lab);
                field.appendChild(document.createElement('br'));
            }

            const radios = document.getElementsByClassName("radios");
            const written = document.getElementsByClassName("written");
            var answered;
            var correctAns;

            submit.addEventListener("click", function() {
                var h = document.createElement("h2");
                h.style.textAlign = "center";
                h.style.width = "200px";
                var corAns = document.createElement("p");
                var next = document.createElement("button");
                next.innerHTML = "next";
                for (var i = 0; i < 4; i++) {
                    if (radios[i].checked == true) {
                        field.appendChild(h);
                        field.appendChild(document.createElement('br'));
                        if (i == data.UnitD[questionNum].anwser) {
                            correctAns = true;
                        } else {
                            correctAns = false;
                            corAns.innerHTML = str(data.UnitD[questionNum].anwser) + str(data.UnitD[questionNum].options[data.UnitD[questionNum].anwser])
                            field.appendChild(corAns);
                        };
                        field.appendChild(next);
                    }
                }
                if (correctAns == true) {
                    h.innerHTML = "Correct";
                    h.style.backgroundColor = "green";
                    localStorage.setItem(strkKey, strkVal++);
                    
                } else {
                    h.innerHTML = "Incorrect";
                    h.style.backgroundColor = "red";
                }
                correctAns = false;
            });
            strkText += localStorage.getItem(strkKey, strkVal);

            submit.innerHTML = "submit";
            submit.type = "button";
            field.appendChild(submit);
        })
        .catch(error => console.error('Failed to fetch data:', error));
}
buildQuestion();
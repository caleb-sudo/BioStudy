var scoreVal = localStorage.getItem("score");

score = score ? parseInt(scoreVal) : 0;
localStorage.setItem("score", scoreVal);


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
            const strkText = document.getElementById("streak");

            const submit = document.createElement("button");
            const p = document.createElement("p");
            const img = document.createElement("img");

            var questionNum = Math.floor(Math.random() * data.UnitD.length);;
            var strk = 0;

            strkText.innerHTML = strk;
            
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

            submit.innerHTML = "submit";
            submit.type = "button";
            submit.classList = "submitBtn"
            field.appendChild(submit);

            submit.addEventListener("click", function() {
                var h = document.createElement("h2");
                h.style.textAlign = "center";
                h.style.width = "200px";
                var corAns = document.createElement("p");
                var next = document.createElement("button");
                next.innerHTML = "next";
                for (var i = 0; i < 4; i++) {
                    if (radios[i].checked == true) {
                        submit.style.display = 'none';
                        field.appendChild(h);
                        field.appendChild(document.createElement('br'));
                        if (i == data.UnitD[questionNum].anwser) {
                            strk += 1;
                            h.innerHTML = "Correct";
                            h.style.backgroundColor = "green";
                            field.appendChild(next);
                        } else {
                            strk = 0;
                            h.innerHTML = "Incorrect";
                            h.style.backgroundColor = "red";
                            corAns.innerHTML = str(data.UnitD[questionNum].anwser) + str(data.UnitD[questionNum].options[data.UnitD[questionNum].anwser])
                            field.appendChild(corAns);
                            field.appendChild(next);
                        };
                    }
                }
            });
        })
        .catch(error => console.error('Failed to fetch data:', error));
}
buildQuestion();
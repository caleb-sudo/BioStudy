const getscore = localStorage.getItem("score");
const getstrk = localStorage.getItem("streak");
const gettopic = localStorage.getItem("topic");
let strk, score;
let topic = 0; //0=All; 1 = UnitA; 2 = UnitB; 3 = UnitC; 4 = UnitD;
localStorage.setItem("score", getscore);
localStorage.setItem("streak", getstrk);
localStorage.setItem("topic", gettopic);

const UnitSelector = document.getElementById("UnitSelector");

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
            const scoreText = document.getElementById("score");

            const submitBtn = document.createElement("button");
            const p = document.createElement("p");
            const img = document.createElement("img");

            let questionNum = Math.floor(Math.random() * data.UnitD.length);

            scoreText.innerHTML = "Your Score:\n " + getscore;
            strkText.innerHTML = "Your Streak:\n " + getstrk;
            
            pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious.innerHTML = data.UnitD[questionNum].question;
            for (let i = 0; i < 4; i++) {
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
                field.appendChild(document.createElement('hr'));
            }

            const radios = document.getElementsByClassName("radios");
            const written = document.getElementsByClassName("written");

            submitBtn.innerHTML = "submit";
            submitBtn.type = "button";
            submitBtn.classList = "submitBtn";
            field.appendChild(submitBtn);

            submitBtn.addEventListener("click", submit);
            function submit() {
                const h = document.createElement("h2");
                h.style.textAlign = "center";
                h.style.width = "200px";
                const corAns = document.createElement("p");
                const next = document.createElement("button");
                next.innerHTML = "next";
                next.onclick = location.reload();
                for (let i = 0; i < 4; i++) {
                    if (radios[i].checked == true) {
                        submit.style.display = 'none';
                        field.appendChild(h);
                        field.appendChild(next);
                        field.appendChild(document.createElement('br'));
                        if (i == data.UnitD[questionNum].anwser) {
                            localStorage.setItem("streak", getstrk+1);
                            localStorage.setItem("score", getscore++);
                            h.innerHTML = "Correct";
                            h.style.backgroundColor = "green";
                        } else {
                            localStorage.setItem("streak", 0);
                            localStorage.setItem("score", getscore--);
                            h.innerHTML = "Incorrect";
                            h.style.backgroundColor = "red";
                            corAns.innerHTML = str(data.UnitD[questionNum].anwser) + str(data.UnitD[questionNum].options[data.UnitD[questionNum].anwser]);
                            field.appendChild(corAns);
                        };
                    }
                }
            }
        })
        .catch(error => console.error('Failed to fetch data: ', error));
}
buildQuestion();

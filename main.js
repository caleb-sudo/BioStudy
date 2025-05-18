const getscore = localStorage.getItem("score");
const getstrk = localStorage.getItem("streak");
const gettopic = localStorage.getItem("topic");
var score = parseInt(getscore);
var strk = parseInt(getstrk);
var topic = gettopic;
localStorage.setItem("score", score);
localStorage.setItem("streak", strk);
localStorage.setItem("topic", gettopic);

document.getElementById("UnitSelector").value = topic;

const scoreValText = document.getElementById("score");

const opts = [
    "A)",
    "B)",
    "C)",
    "D)"
];

if (score > 0) {
    scoreValText.style.color = "green";
} else if (score < 0) {
    scoreValText.style.color = "red";
} else if (score == 0) {
    scoreValText.style.color = "orange";
}

function reloadPage() {
    location.reload();
}

const fixxer = document.getElementById("fixxer");

fixxer.addEventListener("click", resetUserScores);

function resetUserScores() {
    localStorage.setItem("score", 0);
    localStorage.setItem("streak", 0);
    reloadPage();
}

function buildQuestion() {
    fetch('https://caleb-sudo.github.io/StudyHelper/resources/questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            var unit = data.Bio.Bio20.UnitD;

            const alphaVal = (n) => n.toLowerCase().charCodeAt(0) - 97;

            const unitSelect = document.getElementById("UnitSelector");

            unitSelect.addEventListener("change", function() {
                localStorage.setItem("topic", unitSelect.value);
                reloadPage();
            });

            if (unitSelect.value[1] == '2') {
                if (unitSelect.value[0] == 'C') {
                    switch(unitSelect.value[2]) {
                        case 'A':
                            unit = data.Chem.Chem20.UnitA;
                            break;
                        case 'B':
                            unit = data.Chem.Chem20.UnitB;
                            break;
                        case 'C':
                            unit = data.Chem.Chem20.UnitCa;
                            break;
                        case 'E':
                            unit = data.Chem.Chem20.UnitCb;
                            break;
                        case 'D':
                            unit = data.Chem.Chem20.UnitD;
                            break;
                    }
                } else if (unitSelect.value[0] == 'B') {
                    switch (unitSelect.value[2]) {
                        case 'A':
                            unit = data.Bio.Bio20.UnitA;
                            break;
                        case 'B':
                            unit = data.Bio.Bio20.UnitB;
                            break;
                        case 'C':
                            unit = data.Bio.Bio20.UnitC;
                            break;
                        case 'D':
                            unit = data.Bio.Bio20.UnitD;
                            break;
                    }
                } else if (unitSelect.value[0] == 'S') {
                    switch (unitSelect.value[2]) {
                        case 'A':
                            unit = data.Social.Social20.UnitA;
                            break;
                        case 'B':
                            unit = data.Social.Social20.UnitB;
                            break;
                        case 'C':
                            unit = data.Social.Social20.UnitC;
                            break;
                    }
                }
            }
            if (unitSelect.value[0] == 'M' && unitSelect.value[1] == '3') {
                switch(unitSelect.value[2]) {
                    case 'A':
                        unit = data.Math.Math30_1.UnitA;
                        break;
                    case 'B':
                        unit = data.Math.Math30_1.UnitB;
                        break;
                    case 'C':
                        unit = data.Math.Math30_1.UnitC;
                        break;
                    case 'D':
                        unit = data.Math.Math30_1.UnitD;
                        break;
                    case 'E':
                        unit = data.Math.Math30_1.UnitE;
                        break;
                }
            }
            const question = document.getElementById("question");
            const field = document.getElementById("box2");
            const strkText = document.getElementById("streak");
            const scoreText = document.getElementById("score");

            const submitBtn = document.createElement('button');

            let questionNum = Math.floor(Math.random() * unit.length);
            
            scoreText.innerHTML = "Your Score: <b style='font-size:20px' id='score'>" + getscore + "</b>";
            strkText.innerHTML = "Your Streak: <b style='font-size:20px' id='streak'>" + getstrk + "</b>";

            const imgField = document.getElementById("box");
            const pict = document.createElement('img');
            if (unit[questionNum].picture != null) {
                pict.src = unit[questionNum].picture;
                pict.style.width = '98%';
                pict.style.height = 'auto';
                imgField.appendChild(pict);
                imgField.appendChild(document.createElement('br'));
            }

            question.innerHTML = unit[questionNum].question;
            if (unit[questionNum].type == 0) {
                for (let i = 0; i < 4; i++) {
                    const radio = document.createElement('input');
                    const lab = document.createElement('label');
                    radio.type = "radio";
                    radio.name = "opts";
                    radio.innerHTML = "hello";
                    radio.id = 'r' + i;
                    radio.className = "radios";
                    lab.htmlFor = 'r' + i;
                    lab.innerHTML = unit[questionNum].options[i];
                    lab.className = "radioLabel";
                    field.appendChild(radio);
                    field.appendChild(lab);
                    field.appendChild(document.createElement('hr'));
                }
            } else if (unit[questionNum].type == 1) {

            }

            const radios = document.getElementsByClassName("radios");
            const written = document.getElementsByClassName("written");

            submitBtn.innerHTML = "submit";
            submitBtn.type = "button";
            submitBtn.classList = "submitBtn";
            field.appendChild(submitBtn);
            if (submitBtn.click)

            submitBtn.addEventListener("click", submit);
            function submit() {
                const h = document.createElement('h2');
                h.style.textAlign = "center";
                h.style.width = "200px";
                const corAns = document.createElement('p');
                const next = document.createElement('button');
                next.innerHTML = "next";
                next.onclick = location.reload();
                for (let i = 0; i < 4; i++) {
                    if (radios[i].checked == true) {
                        field.appendChild(h);
                        field.appendChild(next);
                        field.appendChild(document.createElement('br'));
                        if (i == unit[questionNum].anwser) {
                            alert("correct");
                            localStorage.setItem("streak", strk + 1);
                            localStorage.setItem("score", score + 1);
                            h.innerHTML = "Correct";
                            h.style.backgroundColor = "green";
                        } else {
                            alert("incorrect, the correct answer was " + opts[unit[questionNum].anwser])
                            strk = 0;
                            localStorage.setItem("streak", strk);
                            localStorage.setItem("score", score - 1);
                            h.innerHTML = "Incorrect";
                            h.style.backgroundColor = "red";
                        };
                    }
                }
            }
        })
        .catch(error => console.error('Failed to fetch data: ', error));
}
buildQuestion();
const getscore = localStorage.getItem("score");
const getstrk = localStorage.getItem("streak");
const gettopic = localStorage.getItem("topic");
var score = parseInt(getscore);
var strk = parseInt(getstrk);
var topic = gettopic;
localStorage.setItem("score", score);
localStorage.setItem("streak", strk);
localStorage.setItem("topic", "20UnitD");

document.getElementById("UnitSelector").value = topic;

const unitSelector = document.querySelector("UnitSelector");
const unitSelectorBtn = document.getElementById("UnitSelectorBtn");

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

function buildQuestion() {
    fetch('https://caleb-sudo.github.io/BioStudy/questions.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            var Unit = data.UnitD;
            /*switch (topic) {
                case '20UnitA':
                    Unit = data.UnitA;
                    localStorage.setItem("topic", "20UnitA");
                    break;

                case '20UnitB':
                    Unit = data.UnitB;
                    localStorage.setItem("topic", "20UnitB");
                    break;

                case '20UnitC':
                    Unit = data.UnitC;
                    localStorage.setItem("topic", "20UnitC");
                    break;

                case '20UnitD':
                    Unit = data.UnitD;
                    localStorage.setItem("topic", "20UnitD");
                    break;

                default:
                    Unit = data.UnitD;
                    localStorage.setItem("topic", "20UnitD");
                    break;
            }*/
            const pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious = document.getElementById("pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious");
            const field = document.getElementById("box2");
            const strkText = document.getElementById("streak");
            const scoreText = document.getElementById("score");

            const submitBtn = document.createElement('button');
            const p = document.createElement('p');
            const img = document.createElement('img');

            let questionNum = Math.floor(Math.random() * Unit.length);

            scoreText.innerHTML = "Your Score: <b style='font-size:20px' id='score'>" + getscore + "</b>";
            strkText.innerHTML = "Your Streak: <b style='font-size:20px' id='streak'>" + getstrk + "</b>";
            const pict = document.createElement('img');
            if (Unit[questionNum].picture != null) {
                pict.src = Unit[questionNum].picture;
                pict.style.height = '550px';
                pict.style.width = 'auto';
                field.appendChild(pict);
                field.appendChild(document.createElement('br'));
            }

            pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious.innerHTML = Unit[questionNum].question;
            for (let i = 0; i < 4; i++) {
                const radio = document.createElement('input');
                const lab = document.createElement('label');
                radio.type = "radio";
                radio.name = "opts";
                radio.innerHTML = "hello";
                radio.id = 'r' + i;
                radio.className = "radios";
                lab.htmlFor = 'r' + i;
                lab.innerHTML = Unit[questionNum].options[i];
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
                        if (i == Unit[questionNum].anwser) {
                            alert("correct");
                            localStorage.setItem("streak", strk + 1);
                            localStorage.setItem("score", score + 1);
                            h.innerHTML = "Correct";
                            h.style.backgroundColor = "green";
                        } else {
                            alert("incorrect, the correct answer was " + opts[Unit[questionNum].anwser])
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
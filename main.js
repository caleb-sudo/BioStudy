var scoreVal = localStorage.getItem("score");
var strkKey = localStorage.key(1)
var strkVal = localStorage.getItem(strkKey);

score = score ? parseInt(scoreVal) : 0;
localStorage.setItem("score", scoreVal);
localStorage.setItem("strk", strkVal);

const pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious = document.getElementById("pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious");
const field = document.getElementById("box");

const submit = document.createElement("button");
const p = document.createElement("p");
const img = document.createElement("img");
var questionNum;

var type = Math.floor(Math.random() * 2);

var strkText = document.getElementById("streak").innerHTML;

async function jsonReader() {
    try {
        let responce = await fetch('questions.json');
        if (responce.ok) {
            let data = responce.json();
            console.log(data.questions);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch(error) {
        console.error("Error: ", error);
    }
}
jsonReader();

/*switch (type) {
    case 0:
        questionNum = Math.floor(Math.random() * 4);
        pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious.innerHTML = UnitDWritten[questionNum][0];
        if (UnitDWritten[questionNum][3] != null) {
            img.src = UnitDWritten[questionNum][3];
            img.style.width = "400px";
            img.style.height = "auto";
            field.appendChild(img);
        }
        const text = document.createElement("input");
        text.type = "text";
        field.appendChild(text);
        field.appendChild(document.createElement('br'));
        for (var i = 0; i < UnitDWritten[questionNum][2]; i++) {
            const text = document.createElement("input");
            text.type = "text";
            text.className = "written";
            field.appendChild(text);
            field.appendChild(document.createElement('br'));
        }
        type = 1;
        break;
    
    case 1:
        questionNum = Math.floor(Math.random() * questions.length);
        pneumonoultramicroscopicsilicavolcanoconeosisIsSupercalafragalisticexpialedocious.innerHTML = questions[questionNum].question;
        for (var i = 0; i < 4; i++) {
            const radio = document.createElement("input");
            const lab = document.createElement("label");
            radio.type = "radio";
            radio.name = "opts";
            radio.id = 'r' + i;
            radio.className = "radios";
            lab.htmlFor = 'r' + i;
            lab.innerHTML = questions[questionNum].options[i];
            lab.className = "radio_label";
            field.appendChild(radio);
            field.appendChild(lab);
            field.appendChild(document.createElement('br'));
        }
        break;
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
    switch(type) {
        case 0:
            for (var i = 0; i < UnitDWritten[questionNum][2]; i++) {
                if (written[0].textContent == UnitDWritten[questionNum][1][0]) {
                    alert("hello");
                } else alert("no");
            }
            type = 1;
            break;
        
        case 1:
            for (var i = 0; i < 4; i++) {
                if (radios[i].checked == true) {
                    field.appendChild(h);
                    field.appendChild(document.createElement('br'));
                    if (i == questions[questionNum].anwser) {
                        correctAns = true;
                    } else {
                        correctAns = false;
                        corAns.innerHTML = str(questions[questionNum].anwser) + str(questions[questionNum].options[questions[questionNum].anwser])
                        field.appendChild(corAns);
                    };
                    field.appendChild(next);
                }
            }
            break;
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
field.appendChild(submit);*/
async function ParseJson() {
    const jsonUrl = "https://caleb-sudo.github.io/BioStudy/questions.json";

    const request = new Request(jsonUrl);
    const response = await fetch(request);
    const ParsedJson = await response.json();
    testJson(ParsedJson);
}

function testJson(obj) {
    alert(obj.test);
}

var scoreVal = localStorage.getItem("score");
var strkKey = localStorage.key(1)
var strkVal = localStorage.getItem(strkKey);

score = score ? parseInt(scoreVal) : 0;

localStorage.setItem("score", scoreVal);
localStorage.setItem("strk", strkVal);

const question = document.getElementById("question");
const field = document.getElementById("box");

const submit = document.createElement("button");
const p = document.createElement("p");
const img = document.createElement("img");

var questionNum;

var type = Math.floor(Math.random() * 2);

var strkText = document.getElementById("streak").innerHTML;

switch (type) {
    case 0:
        questionNum = Math.floor(Math.random() * 4);
        question.innerHTML = UnitDWritten[questionNum][0];
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
        break;
    
    case 1:
        questionNum = Math.floor(Math.random() * UnitDChoice.length);
        question.innerHTML = UnitDChoice[questionNum][0];
        for (var i = 0; i < 4; i++) {
            const radio = document.createElement("input");
            const lab = document.createElement("label");
            radio.type = "radio";
            radio.name = "opts";
            radio.id = 'r' + i;
            radio.className = "radios";
            lab.htmlFor = 'r' + i;
            lab.innerHTML = UnitDChoice[questionNum][1][i];
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
            break;
        
        case 1:
            for (var i = 0; i < 4; i++) {
                if (radios[i].checked == true) {
                    field.appendChild(h);
                    field.appendChild(document.createElement('br'));
                    if (i == UnitDChoice[questionNum][2]) {
                        correctAns = true;
                    } else {
                        correctAns = false;
                        corAns.innerHTML = str(UnitDChoice[questionNum][2]) + str(UnitDChoice[questionNum][1][UnitDChoice[questionNum][2]])
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
field.appendChild(submit);
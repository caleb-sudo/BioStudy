var score = localStorage.getItem("score");
score = score ? parseInt(score) : 0;
localStorage.setItem("score", score);

var type = 1;
var questionNum = 0;
var submited = false;

const topicBtn = document.getElementsByClassName("topicBtn");
const abox = document.getElementById("questionBox");

const bbox = document.createElement('div');
const submit = document.createElement("input");
const reset = document.createElement("input");
const next = document.createElement("button");
const br = document.createElement("br");
const p = document.createElement("p");
const img = document.createElement("img");

for (var i = 0; i < submit.legth; i++) {
    submit[i].addEventListener("click", function () {
        submit = true;
    });
}

function back() {

}

function nextQuestion() {
    bbox.remove();
    abox.appendChild(bbox);
}

for (var x = 0; x < topicBtn.length; x++) {
    topicBtn[x].addEventListener("click", function () {
        bbox.remove();
        type = Math.floor(Math.random() * 2);
        submit.type = "submit";
        switch (type) {
            case 0:
                questionNum = Math.floor(Math.random() * 4);
                p.innerHTML = UnitDWritten[questionNum][0];
                bbox.appendChild(p);
                if (UnitDWritten[questionNum][3] != null) {
                    img.src = UnitDWritten[questionNum][3];
                    img.style.width = "400px";
                    img.style.height = "auto";
                    bbox.appendChild(img);
                }
                const text = document.createElement("input");
                text.type = "text";
                bbox.appendChild(text);
                bbox.appendChild(br);
                for (var i = 0; i < UnitDWritten[questionNum][2]; i++) {
                    const text = document.createElement("input");
                    text.type = "text";
                    bbox.appendChild(text);
                    bbox.appendChild(br);
                }
                break;

            case 1:
                questionNum = Math.floor(Math.random() * 4);
                p.innerHTML = UnitDChoice[questionNum][0];
                bbox.append(p);
                const radio = document.createElement("input");
                const radio1 = document.createElement("input");
                const radio2 = document.createElement("input");
                const radio3 = document.createElement("input");
                const ans = document.createElement("p");
                radio.type = "radio";
                bbox.appendChild(radio);
                bbox.appendChild(radio1);
                bbox.appendChild(radio2);
                bbox.appendChild(radio3);
                ans.innerHTML = UnitDChoice[questionNum][1][i];
                bbox.appendChild(ans);
                break;
        }
        bbox.appendChild(next);
        next.textContent = "Next";
        next.onclick = nextQuestion();

        bbox.appendChild(reset);
        bbox.appendChild(br);
    });
}

function increaseScore(amount) {

}

var UnitDWritten = [
    [
        "What are the 3 Monosaccharides?",
        ["glucose", "fructose", "galactose"],
        2,
        null,
    ],
    [
        "What are the 3 Disaccharides?",
        ["maltose", "sucrose", "lactose"],
        3,
        null
    ],
    [
        "What are the 3 Polysaccharides?",
        ["starch", "cellulose", "glycogen"],
        2,
        null,
    ],
    [
        "Name all the structures",
        ["esophagus", "stomach", "liver", "gallbladder", "duodenum", "pancreas", "small intestine", "large intestine"],
        7,
        "https://caleb-sudo.github.io/BioStudy/image.jpg",
    ],
];

var UnitDChoice = [
    [
        "What is Starch used for?",
        ["Energy Storage", "Structure", "Protection", "Insolation"],
        1,
        null,
    ],
    [
        "What is not true about Vitamins?",
        [
            "Can act as coenzymes",
            "Are organic compounds",
            "Can act as cofactors",
            "Contains mostly Carbon, Oxygen, Hydrogen, and Nitrogen",
        ],
        3,
        null,
    ],
    [
        "What is not true about Minerals?",
        [
            "Are inorganic ions or Elements",
            "Can act as cofactors",
            "Can assist enzymes",
            "None of the above",
        ],
        4,
        null,
    ],
    [
        "What is a Substrate?",
        [
            "The molecule(s) that assists enzymes to interacte with other molecules",
            "The molecule(s) that changes when interacted with an enzyme",
            "The molecule(s) that change the active site on an enzyme when interacting with the enzyme",
            "The molecule(s) ",
        ],
        2,
        null,
    ],
    [
        "What is the difference between Competative and Non-Competative Inhibitors?",
        ["", "", "", ""],
        1,
        null,
    ],
    [
        "",
        ["", "", "", ""],
        3,
        null,
    ],
];

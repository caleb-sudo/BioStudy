let reloadPage = () => location.reload();

let radToDeg = (val) => val * (Math.PI/180);

let dragStart = (event) => event.dataTransfer.setData("Text", event.target.id);
let allowDrop = (event) => event.preventDefault();
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}

const gettopic = localStorage.getItem("topic");
const getUsername = localStorage.getItem("username");
const getscore = localStorage.getItem("score");
const getstrk = localStorage.getItem("streak");
const getHighscore = localStorage.getItem("highscore");
const getHighestStrk = localStorage.getItem("highestStreak");
const getShowAnsSetting = localStorage.getItem("showAnsSetting");
var score = parseInt(getscore);
var strk = parseInt(getstrk);
var highscore = parseInt(getHighscore);
var highestStrk = parseInt(getHighestStrk);
var topic = gettopic;
if (getscore == null) {
    localStorage.setItem("score", 0);
    reloadPage();
}
if (getstrk == null) localStorage.setItem("streak", 0);
if (getHighscore == null) localStorage.setItem("highscore", 0);
if (getHighestStrk == null) localStorage.setItem("highestStreak", 0);
localStorage.setItem("topic", gettopic);
localStorage.setItem("username", getUsername);
localStorage.setItem("showAnsSetting", true);
//localStorage.setItem("lastCalculation", )

document.getElementById("UnitSelector").value = topic;

function hide(element, hide) {
    if (hide == true) return element.style.display = "none";
    if (hide == false) return element.style.display = "block";
}

const downArrow = document.getElementById("userInfoDownArrow");
const upArrow = document.getElementById("userInfoUpArrow");
const userInfoModal = document.getElementById("userInfoModal");
function openUserInfoModal() {
    hide(userInfoModal, false);
    hide(downArrow, true);
}
function closeUserInfoModal() {
    hide(userInfoModal, true);
    hide(downArrow, false);
}
openUserInfoModal();

const menubar = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal")
function openMenu() {
    hide(menuModal, false);
    hide(menubar, true);
}
function closeMenu() {
    hide(menuModal, true);
    hide(menubar, false);
}
menubar.addEventListener("click", openMenu);

const settingsModal = document.getElementById("settingsModal");
function openSettings() {
    hide(settingsModal, false);
    closeMenu();
}
let closeSettings = () => hide(settingsModal, true);

const calcModal = document.getElementById("calcModal");
function openCalc() {
    hide(calcModal, false);
    closeMenu();
}
let closeCalc = () => hide(calcModal, true);

const helpModal = document.getElementById("helpModal");
function openHelpModal() {
    hide(helpModal, false);
    closeMenu();
}
let closeHelpModal = () => hide(helpModal, false);

const strkText = document.getElementById("streak");
const scoreText = document.getElementById("score");
const highscoreText = document.getElementById("highscore");
const highestStreakText = document.getElementById("highestStreak");

scoreText.innerHTML = "Your Score: <b class='scoresText'>" + getscore + "</b>   ";
highscoreText.innerHTML = "Your Highscore: <b class='scoresText'>" + getHighscore + "</b>";
strkText.innerHTML = "Your Streak: <b class='scoresText'>" + getstrk + "</b>   ";
highestStreakText.innerHTML = "Your highest Streak: <b class='scoresText'>" + getHighestStrk + "</b>";

if (score >= highscore) localStorage.setItem("highscore", score);
if (strk >= highestStrk) localStorage.setItem("highestStreak", strk);

const opts = [
    "A)",
    "B)",
    "C)",
    "D)"
];

if (score > 0) {
    scoreText.style.color = "green";
} else if (score < 0) {
    scoreText.style.color = "red";
} else if (score == 0) {
    scoreText.style.color = "orange";
}

const fixxer = document.getElementById("fixxer");

function resetUserScores() {
    let prompt = "Are you sure you want to reset your scores?\nYou should only use this if your score shows NaN\nTo miniminze cheating it will only work if one of you scores displays null";
    if (confirm(prompt) == true && getscore == null || getstrk == null || getHighscore == null || getHighestStrk == null) {
        localStorage.setItem("score", 0);
        localStorage.setItem("streak", 0);
        localStorage.setItem("highscore", 0);
        localStorage.setItem("highestStreak", 0);
        reloadPage();
    }
}

let currentInput = '';
let currentOperation = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById("display").value = `${previousInput} ${currentOperation} ${currentInput}`;
}

function appendOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById("display").value = `${previousInput} ${currentOperation}`;
}

var degreeMode = true;

const mode = document.getElementById("calcMode");
mode.addEventListener("click", changeMode);

function changeMode() {
    degreeMode = !degreeMode;
    if (degreeMode) document.getElementById("calcMode").innerHTML = "Deg";
    else if (!degreeMode) document.getElementById("calcMode").innerHTML = "Rad";
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    let prev = parseFloat(previousInput);
    let current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '^':
            result = prev ** current;
            break;
        case '√':
            result = prev * Math.sqrt(current);
            break;
        case 'cos':
            if (!degreeMode) result = prev * Math.cos(current);
            else if (degreeMode) result = prev * Math.cos(radToDeg(current));
            break;
        case 'sin':
            if (!degreeMode) result = prev * Math.sin(current);
            else if (degreeMode) result = prev * Math.sin(radToDeg(current));
            break;
        case 'tan':
            if (!degreeMode) result = prev * Math.tan(current);
            else if (degreeMode) result = prev * Math.tan(radToDeg(current));
            break;
        case 'log':
            result = prev * Math.log10(current);
            break;
    }

    currentInput = result.toString();
    currentOperation = '';
    previousInput = '';
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    document.getElementById("display").value = '';
}

dragCalulator(calcModal);

function dragCalulator(elmnt) {
    let pos1, pos2, pos3, pos4;
    calcModal.onmousedown = dragMouseDown;
    calcModal.ontouchstart = dragMouseDown;

    function dragMouseDown(event) {
        event.preventDefault();
        pos3 = event.clientX;
        pos4 = event.clientY;
        
        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDrag;
    }

    function elementDrag(event) {
        event.preventDefault();
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.ontouchmove = null;
    }
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

            const unitSelect = document.getElementById("UnitSelector");

            unitSelect.addEventListener("change", function () {
                localStorage.setItem("topic", unitSelect.value);
                reloadPage();
            });

            if (unitSelect.value[1] == '2') {
                if (unitSelect.value[0] == 'C') {
                    switch (unitSelect.value[2]) {
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
                switch (unitSelect.value[2]) {
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
            const qField = document.getElementById("box");
            const field = document.getElementById("box2");

            const multChoiceSubmitBtn = document.createElement('button');

            let questionNum = Math.floor(Math.random() * unit.length);
            question.innerHTML = unit[questionNum].question;

            if (unit[questionNum].type == 0) {
                const imgField = document.getElementById("box");
                const pict = document.createElement('img');
                if (unit[questionNum].picture != null) {
                    pict.src = unit[questionNum].picture;
                    pict.style.width = '98%';
                    pict.style.height = 'auto';
                    imgField.appendChild(pict);
                    imgField.appendChild(document.createElement('br'));
                }

                for (let i = 0; i < 4; i++) {
                    const div = document.createElement('div');
                    div.classList = "radioBox";
                    field.appendChild(div);
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
                    div.appendChild(radio);
                    div.appendChild(lab);
                    field.appendChild(document.createElement('hr'));
                }

                const radios = document.getElementsByClassName("radios");
                const written = document.getElementsByClassName("written");
                const next = document.createElement('button');

                multChoiceSubmitBtn.innerHTML = "Submit";
                multChoiceSubmitBtn.classList = "submitBtn";
                field.appendChild(multChoiceSubmitBtn);
                multChoiceSubmitBtn.addEventListener("click", submitMultChoice);
                function submitMultChoice() {
                    const h = document.createElement('h2');
                    h.style.textAlign = "center";
                    h.style.width = "200px";
                    next.innerHTML = "next";
                    next.classList = "nextBtn";
                    for (let i = 0; i < 4; i++) {
                        if (radios[i].checked == true) {
                            field.appendChild(h);
                            field.appendChild(next);
                            field.appendChild(document.createElement('br'));
                            if (i == unit[questionNum].anwser) {
                                localStorage.setItem("streak", strk + 1);
                                localStorage.setItem("score", score + 1);
                                h.innerHTML = "Correct";
                                h.style.backgroundColor = "green";
                            } else {
                                strk = 0;
                                localStorage.setItem("streak", strk);
                                localStorage.setItem("score", score - 1);
                                h.innerHTML = "Incorrect";
                                h.style.backgroundColor = "red";
                                field.appendChild(document.createElement('br'));
                                const correctAns = document.createElement('p');
                                correctAns.innerHTML = opts[unit[question].answer];
                                field.appendChild(correntAns);
                            };
                        }
                    }
                }
                let nextMultChoice = () => reloadPage();
                next.addEventListener("click", nextMultChoice);
            } else if (unit[questionNum].type == 1) {

            } if (unit[questionNum].type == 2) {
                for (var i = 0; i < unit[questionNum].totalElements; i++) {
                    const draggables = document.createElement('div');
                    const dropboxes = document.createElement('div');
                    const p = document.createElement('p');
                    draggables.draggable = true;
                    draggables.innerHTML = unit[questionNum].leftElements[i];
                    draggables.classList = "draggables";
                    draggables.id = "draggable" + i;
                    draggables.addEventListener("dragstart", function(event) {
                        dragStart(event);
                    });
                    dropboxes.classList = "dropboxes";
                    dropboxes.id = "dropbox" + i;
                    dropboxes.addEventListener("drop", function(event) {
                        drop(event);
                    });
                    dropboxes.addEventListener("dragover", function(event) {
                        allowDrop(event);
                    });
                    qField.appendChild(draggables);
                    field.appendChild(dropboxes);
                    field.appendChild(document.createElement('br'));
                    p.innerHTML = unit[questionNum].rightElements[i];
                    p.classList = "dropboxParas";
                    p.id = "dropboxPara" + i;
                    dropboxes.appendChild(p);
                }
                const dragSubmitBtn = document.createElement('button');
                dragSubmitBtn.innerHTML = "Submit";
                dragSubmitBtn.classList = "submitBtn";
                field.appendChild(dragSubmitBtn);

                const dragNextBtn = document.createElement('button');
                dragNextBtn.innerHTML = "Next";
                dragNextBtn.classList = "nextBtn";
                
                function submitDragboxes() {
                    field.appendChild(dragNextBtn);
                }
                dragSubmitBtn.addEventListener("click", submitDragboxes);
                let nextDragboxes = () => reloadPage();
                dragNextBtn.addEventListener("click", nextDragboxes);
            }
        })
        .catch(error => console.error('Failed to fetch data: ', error));
}
buildQuestion();

/*function openLeaderBoards() {
    const btn = document.getElementById("leaderboardIco");
    const modal = document.getElementById("leaderboardModal");
    const exit = document.getElementById("exitLeaderboardModal");
    const table = document.getElementById("leaderboardTable");

    let openModal = () => modal.style.display = "block";
    let closeModal = () => modal.style.display = "none";

    btn.addEventListener("click", function(){
        openModal();
    });
    exit.addEventListener("click", closeModal);

    function createUser() {
        let userprompt = prompt("Please enter the username you would like to go by");
        localStorage.setItem("username", userprompt);
    }
    if (getUsername == '') createUser();

    for (let i = 0; i < 10; i++) {
        const tr = document.createElement("tr");
        table.appendChild(tr);
        for (let j = 0; j < 2; j++) {
            const td = document.createElement("td");
            td.innerHTML = i;
            tr.appendChild(td);
        }
    }
}*/

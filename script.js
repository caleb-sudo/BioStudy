function fecthJSONdata() {
    fetch('./questions.json').then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();  
    })
    .then(data => console.log(data))  
    .catch(error => console.error('Failed to fetch data:', error));
}
fecthJSONdata();

var type = 0;
var question = 0;

var topicBtn = document.getElementsByClassName('topicBtn');

for (var i = 0; i < topicBtn.length; i++) {
    topicBtn[i].addEventListener("click", questionFunc);
}

function randomizeQuestions(){
    type = 1;//Math.floor(Math.random()*2);
    switch (type) {
        case 0:
            question = Math.floor(Math.random()*3);
            break;
        
        case 1:
            question = Math.floor(Math.random()*4);
            break;
    }
    alert(type);
}

function build() {
    const submit = document.createElement('input');
    submit.type = 'submit';
    switch (type) {
        case 0:
            const reset = document.createElement('input');
            const type = document.createElement('input');
            break;

        case 1:
            const radio = document.createElement('input');
            radio.type = 'radio';
            for(var i = 0; i < 4; i++){
                document.appendChild(radio);
            }
            break;
    }
}

function questionFunc() {
    randomizeQuestions();
    build();
}

const questions = {
    "D": {
        "Written": {
            "1":{
                "question":"What are the 3 Monosaccharides?",
                "answers": [
                    "glucose",
                    "fructose",
                    "galactose"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            "2":{
                "question":"What are the 3 Disaccharides?",
                "answers": [
                    "maltose",
                    "sucrose",
                    "lactose"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            "3":{
                "question":"What are the 3 Polysaccharides?",
                "answers":[
                    "starch",
                    "cellulose",
                    "glycogen"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            "4":{
                "question":"",
                "answers": [
                    "esophagus",
                    "stomach",
                    "liver",
                    "gallbladder",
                    "duodenum",
                    "pancreas",
                    "small intestine",
                    "large intestine"
                ],
                "writtenBoxes":4
            }
        },
        "Choice": {
            "1":{
                "question":"What is Starch used for?",
                "possibleAns":[
                    "Energy Storage",
                    "Structure",
                    "Protection",
                    "Insolation"
                ],
                "rightAns":"1"
            },
            "2":{
                "question":"What is not true about Vitamins?",
                "possibleAns":[
                    "Can act as coenzymes",
                    "Are organic compounds",
                    "Can act as cofactors",
                    "Contains mostly Carbon, Oxygen, Hydrogen, and Nitrogen"
                ],
                "rightAns":"3"
            },
            "3":{
                "question":"What is not true about Minerals?",
                "possibleAns":[
                    "Are inorganic ions or Elements",
                    "Can act as cofactors",
                    "Can assist enzymes",
                    "None of the above"
                ],
                "rightAns":"4"
            },
            "4":{
                "question":"What is a Substrate?",
                "possibleAns":[
                    "The molecule(s) that assists enzymes to interacte with other molecules",
                    "The molecule(s) that changes when interacted with an enzyme",
                    "The molecule(s) that change the active site on an enzyme when interacting with the enzyme",
                    "The molecule(s) "
                ],
                "rightAns":"2"
            },
            "5":{
                "question":"What is the difference between Competative and Non-Competative Inhibitors?",
                "possibleAns":[
                    "",
                    "",
                    "",
                    ""
                ],
                "rightAns":""
            }
        }
    }
};
alert(questions);

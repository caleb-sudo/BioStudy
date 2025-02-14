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

document.getElementsByClassName('topicBtn').addEventListener("click", questionFunc());

function randomizeQuestions(){
    type = Math.floor(Math.random()*2);
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
    switch (type) {
        case 0:
            break;

        case 1:
            const radio = document.createElement('input');
            radio.type = 'radio';
            for(var i = 0; i < 4; i++){
                document.append(radio);
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
                "possibleAns": [
                    "glucose",
                    "fructose",
                    "galactose"
                ],
                "writtenBoxes":"3",
                "picture":""
            },
            "2":{
                "question":"What are the 3 Disaccharides?",
                "possibleAns": [
                    "maltose",
                    "sucrose",
                    "lactose"
                ],
                "writtenBoxes":"3",
                "picture":""
            },
            "3":{
                "question":"What are the 3 Polysaccharides?",
                "possibleAns":[
                    "starch",
                    "cellulose",
                    "glycogen"
                ],
                "writtenBoxes":"3",
                "picture":""
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

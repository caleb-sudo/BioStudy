var score = localStorage.getItem('score');
score = score ? parseInt(score) : 0;
localStorage.setItem("score", score);

var type = 1;
var question = 0;

const topicBtn = document.getElementsByClassName('topicBtn');
const box = document.getElementById('questionBox');

for (var x = 0; x < topicBtn.length; x++) {
    topicBtn[x].addEventListener("click", function(){
        type = Math.floor(Math.random()*2);
        const submit = document.createElement('input');
        submit.type = 'submit';
        box.appendChild(submit)
        switch (type) {
            case 0:
                question = Math.floor(Math.random()*3);
                const reset = document.createElement('input');
                const text = document.createElement('input');
                reset.type = 'reset'
                box.appendChild(reset);
                for (var i = 0; i < questions["D"]["Written"][question]["writtenBoxes"]; i++) {
                	box.appendChild(text)
                }
                break;
            
            case 1:
                question = Math.floor(Math.random()*4);
                const radio = document.createElement('input');
                radio.type = 'radio';
                for(var i = 0; i < 4; i++){
                    box.appendChild(radio);
                }
                break;
        }
    });
}

const questions = {
    "D": {
        "Written": {
            1:{
                "question":"What are the 3 Monosaccharides?",
                "answers": [
                    "glucose",
                    "fructose",
                    "galactose"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            2:{
                "question":"What are the 3 Disaccharides?",
                "answers": [
                    "maltose",
                    "sucrose",
                    "lactose"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            3:{
                "question":"What are the 3 Polysaccharides?",
                "answers":[
                    "starch",
                    "cellulose",
                    "glycogen"
                ],
                "writtenBoxes":3,
                "picture":""
            },
            4:{
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
                "writtenBoxes":8,
                "pictureFile":"./image.jpg"
            }
        },
        "Choice": {
            1:{
                "question":"What is Starch used for?",
                "possibleAns":[
                    "Energy Storage",
                    "Structure",
                    "Protection",
                    "Insolation"
                ],
                "rightAns":1
            },
            2:{
                "question":"What is not true about Vitamins?",
                "possibleAns":[
                    "Can act as coenzymes",
                    "Are organic compounds",
                    "Can act as cofactors",
                    "Contains mostly Carbon, Oxygen, Hydrogen, and Nitrogen"
                ],
                "rightAns":3
            },
            3:{
                "question":"What is not true about Minerals?",
                "possibleAns":[
                    "Are inorganic ions or Elements",
                    "Can act as cofactors",
                    "Can assist enzymes",
                    "None of the above"
                ],
                "rightAns":4
            },
            4:{
                "question":"What is a Substrate?",
                "possibleAns":[
                    "The molecule(s) that assists enzymes to interacte with other molecules",
                    "The molecule(s) that changes when interacted with an enzyme",
                    "The molecule(s) that change the active site on an enzyme when interacting with the enzyme",
                    "The molecule(s) "
                ],
                "rightAns":2
            },
            5:{
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
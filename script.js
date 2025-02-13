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
fetchJSONdata();

const type = 0;
const question = 0;

function randomizeQuestions(){
    alert(questions);
    type = Math.floor(Math.random()*2);
    switch (type) {
        case 0:
            question = Math.floor(Math.random()*3);
            break;
        
        case 1:
            question = Math.floor(Math.random()*4);
            break;
    }
}

function build() {
    switch (type) {
        case 0:
            break;

        case 1:
            break;
    }
}

questions = {
    "D": {
        "Written": {
            {
                "question":"What are the 3 Monosaccharides?",
                "possibleAns": [
                    "glucose",
                    "fructose",
                    "galactose"
                ],
                "writtenBoxes":"3",
                "picture":""
            },
            {
                "question":"What are the 3 Disaccharides?",
                "possibleAns": [
                    "maltose",
                    "sucrose",
                    "lactose"
                ],
                "writtenBoxes":"3",
                "picture":""
            },
            {
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
            {
                "question":"What is Starch used for?",
                "possibleAns":[
                    "Energy Storage",
                    "Structure",
                    "Protection",
                    "Insolation"
                ],
                "rightAns":"1"
            },
            {
                "question":"What is not true about Vitamins?",
                "possibleAns":[
                    "Can act as coenzymes",
                    "Are organic compounds",
                    "Can act as cofactors",
                    "Contains mostly Carbon, Oxygen, Hydrogen, and Nitrogen"
                ],
                "rightAns":"3"
            },
            {
                "question":"What is not true about Minerals?",
                "possibleAns":[
                    "Are inorganic ions or Elements",
                    "Can act as cofactors",
                    "Can assist enzymes",
                    "None of the above"
                ],
                "rightAns":"4"
            },
            {
                "question":"What is a Substrate?",
                "possibleAns":[
                    "The molecule(s) that assists enzymes to interacte with other molecules",
                    "The molecule(s) that changes when interacted with an enzyme",
                    "The molecule(s) that change the active site on an enzyme when interacting with the enzyme",
                    "The molecule(s) "
                ],
                "rightAns":"2"
            },
            {
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
}   

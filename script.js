import jsonData from './questions.json'

const type = 0;
const question = 0;

function randomizeQuestions(){
    alert(jsonData);
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

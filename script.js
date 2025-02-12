const jsonData = "hello"
alert(jsonData);

function randomizeQuestions(){
    alert(jsonData);
    const type = Math.floor(Math.random()*2);
    const question = 0;
    switch (type) {
        case 0:
            question = Math.floor(Math.random()*3);
            break;
        
        case 1:
            question = Math.floor(Math.random()*4);
            break;
    }
}

function generateQuestion(){

}

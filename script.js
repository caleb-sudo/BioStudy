const form = document.querySelector("form");

function back() {

}

function nextQuestion() {
    bbox.remove();
    abox.appendChild(bbox);
}

/*for (var x = 0; x < topicBtn.length; x++) {
    topicBtn[x].addEventListener("click", function() {
        topicBox.style.display = "none";
        topicBox.style.overflow = "hidden";
        type = Math.floor(Math.random() * 2);
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
                questionNum = Math.floor(Math.random() * UnitDChoice.length);
                p.innerHTML = UnitDChoice[questionNum][0];
                bbox.append(p);
                for (var i = 0; i < 4; i++) {
                    const radio = document.createElement("input");
                    const ans = document.createElement("label");
                    radio.type = "radio";
                    radio.name = "opts";
                    radio.id = i;
                    ans.htmlFor = i;
                    ans.innerHTML = UnitDChoice[questionNum][1][i];
                    bbox.appendChild(radio);
                    bbox.appendChild(ans);
                    bbox.appendChild(document.createElement('br'));
                }
                break;
        }
        
        bbox.appendChild(next);
        next.textContent = "Next";
        next.onclick = nextQuestion();

        bbox.appendChild(submit);
        bbox.appendChild(br);

        submit.addEventListener("submit", (event) => {
            const data = new formData(form);
            alert("hello");
            for (const entry of data) {
                if (type == 0) {
        
                } else if (type == 1) {
                    alr += `1 ${entry[0]}`;
                    if (entry[0] == UnitDChoice[questionNum][2]) {
                        alert("correct");
                    } else {
                        alert("incorrect");
                    }
                }
            }
            event.preventDefault();
        });
    });
}*/

function checker(x, y, i) {
    const choices = document.querySelector(".choices");
}

function increaseScore(amount) {

}
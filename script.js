var score = localStorage.getItem("score");
score = score ? parseInt(score) : 0;
localStorage.setItem("score", score);

var type = 1;
var questionNum = 0;
var submited = false;

var checked = [];

const topicBtn = document.getElementsByClassName("topicBtn");
const abox = document.getElementById("questionBox");
const topicBox = document.getElementById("startBtns");

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
        topicBox.style.display = "none";
        topicBox.style.overflow = "hidden";
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
                questionNum = Math.floor(Math.random() * UnitDChoice.length);
                p.innerHTML = UnitDChoice[questionNum][0];
                bbox.append(p);
                for (var i = 0; i < 4; i++) {
                    const radio = document.createElement("input");
                    const ans = document.createElement("label");
                    radio.type = "radio";
                    radio.name = "question";
                    ans.htmlFor = radio;
                    ans.innerHTML = UnitDChoice[questionNum][1][i];
                    bbox.appendChild(radio);
                    bbox.appendChild(ans);
                }
                break;
        }
        bbox.appendChild(next);
        next.textContent = "Next";
        next.className = "topicBtn"
        next.onclick = nextQuestion();

        bbox.appendChild(reset);
        bbox.appendChild(br);
    });
}

function checker(x, y, i) {
    var choices = document.getElementsByClassName("choices");
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
        2,
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
        0,
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
        2,
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
        3,
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
        1,
        null,
    ],
    [
        "What is the difference between Competative and Non-Competative Inhibitors?",
        ["", "", "", ""],
        0,
        null,
    ],
    [
        "What is the main function of erythrocytes in the blood?",
        ["Fight infection", "Carry oxygen", "Clot blood", "Control blood pressure"],
        1,
        null,
    ],
    [
        "Which component of blood is primarily responsible for clotting?",
        ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        2,
        null,
    ],
    [
        "What type of blood cell is primarily involved in fighting infections?",
        ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        1,
        null,
    ],
    [
        "What does the ABO blood group system identify?",
        ["Types of white blood cells", "Types of platelets", "Types of blood antigens", "Types of plasma"],
        2,
        null,
    ],
    [
        "Which part of the blood contains water, salts, and enzymes?",
        ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        3,
        null,
    ],
    [
        "Where in the body are all blood cells originally derived from?",
        ["Heart", "Liver", "Bone marrow", "Spleen"],
        2,
        null,
    ],
    [
        "What is anemia primarily caused by?",
        ["Too many platelets", "Too many white blood cells", "Insufficient number of red blood cells", "High cholesterol levels"],
        2,
        null,
    ],
    [
        "What is the function of platelets in the blood?",
        ["Transport oxygen", "Defend against disease", "Help in blood clotting", "Balance fluid levels"],
        2,
        null,
    ],
    [
        "Which type of cell secretes antibodies?",
        ["Red blood cells", "Macrophages", "Platelets", "Plasma cells"],
        3,
        null,
    ],
    [
        "Sickle cell anemia is caused by what?",
        ["A viral infection", "A bacterial infection", "A genetic mutation", "An autoimmune disorder"],
        2,
        null,
    ],
    [
        "What are antigens?",
        ["Cells that produce antibodies", "Molecules that can trigger an immune response", "Proteins that transport oxygen", "Particles that clot blood"],
        2,
        null,
    ],
    [
        "What are lysozymes in tears responsible for?",
        ["Improving vision", "Providing moisture", "Fighting infections", "Facilitating sleep"],
        1,
        null,
    ],
    [
        "Which blood type is considered the universal donor?"
        ["A", "B", "AB", "O"],
        3,
        null,
    ],
    [
        "Which of the following is a type of white blood cell?",
        ["Erythrocyte", "Lymphocyte", "Platelet", "Hemoglobin"],
        1,
        null,
    ],
    [
        "What is the first line of defense in the immune system?",
        ["T-cells", "Skin", "Antibodies", "Fever"],
        1,
        null,
    ],
    [
        "What is the primary cause of agglutination in blood transfusions?",
        ["Clotting factors", "Incompatible blood types", "Platelet deficiency", "Plasma overabundance"],
        1,
        null,
    ],
    [
        "Which immune cells are involved in antigen presentation?",
        ["Erythrocytes", "Platelets", "Macrophages", "Plasma cells"],
        2,
        null,
    ],
    [
        "What happens in the body when a blood clot travels from its original location?",
        ["It dissolves automatically", "It causes a blockage called an embolus", "It promotes healing", "It increases oxygen delivery"],
        1,
        null,
    ],
    [
        "Which cells are responsible for the adaptive immune response?",
        ["Red blood cells", "Platelets", "T-cells", "All of the above"],
        2,
        null,
    ],
    [
        "How do vaccines work to protect the body from disease?",
        ["By killing pathogens directly", "By inducing fever", "By stimulating the immune system to produce memory cells", "By promoting platelet production"],
        2,
        null,
    ],
    [
        "Which component is involved in the clotting process and is released from damaged tissues?",
        ["Thromboplastin", "Fibrinogen", "Plasma", "Hemoglobin"],
        0,
        null,
    ],
    [
        "What is the difference between a thrombus and an embolus?",
        [
            "A thrombus is a mobile clot, and an embolus is stationary",
            "A thrombus is a stationary clot, and an embolus is mobile",
            "A thrombus is a type of white blood cell, and an embolus is a type of red blood",
            "There is no difference; they are the same"
        ],
        1,
        null,
    ],
    [
        "What type of hypersensitivity reaction involves histamine and mast cells?",
        ["Autoimmune response", "Cellular immunity", "Allergic reaction", "Vaccine response"],
        2,
        null,
    ],
    [
        "What is primarily affected in autoimmune diseases?",
        ["The body attacks its own tissues", "The body rejects foreign tissues only", "The body stops producing white blood cells", "The body increases red blood cell production"],
        0,
        null,
    ],
    [
        "What does the innate immune system primarily consist of?",
        ["Antibodies and vaccines", "T-cells and B-cells", "Physical barriers and white blood cells", "Red blood cells and platelets"],
        1,
        null,
    ],
    [
        "What are T-cells that help regulate other immune cells called?",
        ["Killer T-cells", "Helper T-cells", "Memory T-cells", "Suppressor T-cells"],
        1,
        null,
    ],
    [
        "What type of immunity is conferred by the presence of antibodies?",
        ["Innate immunity", "Adaptive immunity", "Passive immunity", "Active immunity"],
        1,
        null,
    ],
    [
        "Which of the following is a feature of sickle cell anemia?",
        ["Increased oxygen transport", "Decreased risk of malaria", "Increased blood clotting", "Increased susceptibility to infections"],
        1,
        null,
    ],
    [
        "What is primarily responsible for the symptoms of allergies?",
        ["Pathogens", "Antibiotics", "Histamine release", "Antigen presence"],
        2,
        null,
    ],
    [
        "What are macrophages known for in the immune system?",
        ["Producing antibodies", "Clotting blood", "Engulfing pathogens", "Carrying oxygen"],
        2,
        null,
    ],
    [
        "Which cell type is directly involved in the process of thromboplastin release for blood clotting?",
        ["Erythrocytes", "B-lymphocytes", "Platelets", "Endothelial cells"],
        2,
        null,
    ],
    [
        "What is the role of fibrin in the clotting process?",
        ["Initiates the clotting cascade", "Acts as a catalyst for platelet aggregation", "Forms the structural framework of a clot", "Breaks down clots after healing"],
        2,
        null,
    ],
    [
        "Which T-cell type is primarily responsible for the direct killing of virus-infected cells?",
        ["Helper T-cells", "Memory T-cells", "Killer T-cells", "Suppressor T-cells"],
        2,
        null,
    ],
    [
        "In terms of immunology, what does &#39;antigen presentation&#39; typically involve?",
        [
            "The release of antigens by pathogens",
            "The exposure of antigens on the surface of cells",
            "The hiding of antigens from the immune system",
            "The removal of antigens from the body"
        ],
        1,
        null,
    ],
    [
        "How do antibodies contribute to the immune response?",
        [
            "By increasing blood flow to infected areas",
            "By marking pathogens for destruction by other immune cells",
            "By directly killing pathogens",
            "By regulating body temperature"
        ],
        1,
        null,
    ],
    [
        "What is a characteristic feature of an embolus?",
        [
            "It remains attached to the vessel wall",
            "It travels through the bloodstream to other locations",
            "It decreases blood clotting",
            "It is formed outside the vascular system"
        ],
        1,
        null,
    ],
    [
        "What differentiates the innate and adaptive immune responses?",
        [
            "Innate responses are slower and less specific",
            "Adaptive responses are general and non-specific",
            "Innate responses are immediate and non-specific",
            "Adaptive responses do not remember pathogens"
        ],
        2,
        null,
    ],
    [
        "Which mechanism describes how vaccines work at the cellular level?",
        [
            "They provide direct immunity by inserting antibodies",
            "They stimulate the production of T-cells that remain inactive",
            "They encourage the immune system to remember pathogens",
            "They suppress the immune system to prevent overreaction"
        ],
        2,
        null,
    ],
    [
        "What is the role of suppressor T-cells in the immune system?",
        ["They enhance the immune response", "They regulate or suppress other cells in the immune system", "They remember past infections", "They kill infected cells"],
        1,
        null,
    ],
    [
        "What is the primary action of histamine in allergic reactions?",
        ["It suppresses immune response", "It increases blood coagulation", "It causes inflammation and bronchoconstriction", "It heals the affected tissues"],
        2,
        null,
    ],
    [
        "Which cells are responsible for the production of antibodies during an immune response?",
        ["T-cells", "Red blood cells", "B-lymphocytes", "Macrophages"],
        2,
        null,
    ],
    [
        "What is the relationship between autoimmune diseases and the body&#39;s immune system?",
        [
            "The immune system underreacts to foreign bodies",
            "The immune system attacks healthy body tissue",
            "The immune system produces excess antibodies",
            "The immune system stops producing white blood cells"
        ],
        1,
        null,
    ],
    [
        "What differentiates an antibiotic from a vaccine?",
        [
            "Antibiotics stimulate the immune system; vaccines do not",
            "Antibiotics kill bacteria; vaccines prevent viral infections",
            "Antibiotics are used to treat infections; vaccines are used to prevent them",
            "Antibiotics are natural; vaccines are synthetic"
        ],
        2,
        null,
    ],
    [
        "How does antibiotic resistance occur?",
        [
            "Through genetic mutations in viruses",
            "When bacteria mutate and are no longer affected by antibiotics",
            "When the body becomes immune to antibiotics",
            "When antibiotics are taken with vaccines"
        ],
        1,
        null,
    ],
    [
        "Which is a primary function of memory T-cells in the adaptive immune response?",
        [
            "To initiate immediate response to pathogens",
            "To produce antibodies during initial exposure",
            "To remember pathogens and respond faster upon re-exposure",
            "To regulate blood clotting during infection"
        ],
        2,
        null,
    ],
];
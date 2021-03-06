"use strict";

const MAX_QUESTION = 20
const result = {
    "ERSL": {
        id: "#conductor",
        name: "지휘자",
    },
    "IRRL": {
        id: "#viola",
        name: "비올라",
    },
    "EESS": {
        id: "#flute",
        name: "플룻",
    },
    "IERS": {
        id: "#trumbone",
        name: "트롬본",
    },
    "ERSS": {
        id: "#percussion",
        name: "타악기",
    },
    "IRRS": {
        id: "#contrabass",
        name: "콘베",
    },
    "EESL": {
        id: "#oboe",
        name: "오보에",
    },
    "ERRL": {
        id: "#trumpet",
        name: "트럼펫",
    },
    "IRSL": {
        id: "#first_violin",
        name: "퍼바",
    },
    "ESRS": {
        id: "#piano",
        name: "피아노",
    },
    "IESS": {
        id: "#tuba",
        name: "튜바",
    },
    "ERRS": {
        id: "#bassoon",
        name: "바순",
    },
    "IRSS": {
        id: "#second_violin",
        name: "세바",
    },
    "EERL": {
        id: "#cello",
        name: "첼로",
    },
    "IESL": {
        id: "#clarinet",
        name: "클라"
    },
}
    
const questions = {
    1: {
        element: "extrovert",
        condition: "L"
    },
    2: {
        element: "extrovert",
        condition: "L"
    },
    3: {
        element: "extrovert",
        condition: "L"
    },
    4: {
        element: "extrovert",
        condition: "L"
    },
    5: {
        element: "extrovert",
        condition: "L"
    },
    6: {
        element: "emotion",
        condition: "L"
    },
    7: {
        element: "emotion",
        condition: "L"
    },
    8: {
        element: "emotion",
        condition: "L"
    },
    9: {
        element: "emotion",
        condition: "L"
    },
    10: {
        element: "emotion",
        condition: "L"
    },
    11: {
        element: "toughness",
        condition: "L"
    },
    12: {
        element: "toughness",
        condition: "L"
    },
    13: {
        element: "toughness",
        condition: "L"
    },
    14: {
        element: "toughness",
        condition: "L"
    },
    15: {
        element: "toughness",
        condition: "L"
    },
    16: {
        element: "leadership",
        condition: "L"
    },
    17: {
        element: "leadership",
        condition: "L"
    },
    18: {
        element: "leadership",
        condition: "L"
    },
    19: {
        element: "leadership",
        condition: "L"
    },
    20: {
        element: "leadership",
        condition: "L"
    },
}

function questionIdToQueryselector(id) {
    const q_i = Math.ceil(id / 5)
    const q_j = (id - 1) % 5 + 1
    return `#Q${q_i}_${q_j}`
}

// Move on to the mth question from the nth
function QntoQm(n, m) {
    const qn = questionIdToQueryselector(n)
    const qm = questionIdToQueryselector(m)

    console.log(document.querySelector(qn))
    console.log(qm)

    document.querySelector(qn).style.display = "none"
    document.querySelector(qm).style.display = "block"
}


function handleChoiceTimeout(choice, timeout) {
    setTimeout(() => handleChoice(choice), timeout)
}

function handleChoice(choice) {
    const elem = questions[question_id].element
    const cond = questions[question_id].condition === choice
    person[elem] += cond ? 1 : 0

    console.log(question_id)

    if (question_id === MAX_QUESTION) {
        const qs = questionIdToQueryselector(question_id)
        document.querySelector(qs).style.display = "none"
        assess()
    } else {
        QntoQm(question_id, question_id+1)
        question_id++
    }
}

function assess(){
    if(person.extrovert > 2){
        person.personality += "E"
    } else{
        person.personality += "I"
    }
    
    if(person.emotion > 2){
        person.personality += "E"
    } else{
        person.personality += "R"
    }
    
    if(person.toughness > 2){
        person.personality += "R"
    } else{
        person.personality += "S"
    }
    
    if(person.leadership > 2){
        person.personality += "L"
    } else{
        person.personality += "S"
    }

    suggestion = result[person.personality]
    document.querySelector(suggestion.id).style.display = "block"
}
function assess(){
    
    if(extrovert > 2){
        personality += "E"
    } else{
        personality += "I"
    }
    
    if(emotion > 2){
        personality += "E"
    } else{
        personality += "R"
    }
    
    if(toughness > 2){
        personality += "R"
    } else{
        personality += "S"
    }
    
    if(leadership > 2){
        personality += "L"
    } else{
        personality += "S"
    }
    
    switch(personality){
        case "ERSL" : suggestion = "지휘자";
            break;
        case "IRRL" : suggestion = "비올라";
            break;
        case "EESS" : suggestion = "플룻";
            break;
        case "IERS" : suggestion = "트럼본";
            break;
        case "ERSS" : suggestion = "타악기";
            break;
        case "IRRS" : suggestion = "콘베";
            break;
        case "EESL" : suggestion = "오보에";
            break;
        case "ERRL" : suggestion = "트럼펫";
            break;
        case "IRSL" : suggestion = "퍼바";
            break;
        case "ESRS" : suggestion = "피아노";
            break;
        case "IESS" : suggestion = "튜바";
            break;
        case "ERRS" : suggestion = "바순";
            break;
        case "IRSS" : suggestion = "세버";
            break;
        case "EERL" : suggestion = "첼로";
            break;
        case "IESL" : suggestion = "클라";
            break;
    }
}
function switchOfStuff(val) {
    let answer = "";
    switch(val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
      break;
      case "c":
        answer = "cat";
      break;
        default:
        answer = "not in range";
      break;       
    return answer;
    }
  }
  
  switchOfStuff(1);
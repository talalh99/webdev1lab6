let modelName = XYZ;
let duration = 5;

function recalculate() {
  let costLabel = document.getElementById("Calcualted Cost");
  if (modelName == "XYZ") {
    newCost = duration * 100;
    console.log(newCost);
  } else if (modelName == "CPRG") {
    newCost = duration * 213;
    console.log(newCost);
  }
}

const myButton = document.getElementById("myButton");

function changeModel() {
  const modelTextSpan = document.createElement("model span");
  if (modelName == "XYZ") {
    newModelName = CPRG;
    CPRGCost = newModelName * duration;
  } else if (modelName == "CPRG") {
    newModelName = XYZ;
    XYZCost = newModelName * duration;
  }

  TotalCost = CPRGCost + XYZCost;

  console.log(TotalCost);
}

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
const myButton2 = document.getElementById("myButton");

function changeDuration() {
  const durationTextSpan = document.createElement("duration span");
  newDuration = prompt("Enter new duration?");
  newDuration = document.getElementById(newDuration);
  newDuration.innerHTML = newDuration;

  if (modelName == "XYZ") {
    newCostXYZ = duration * 100;
  } else if (modelName == "CPRG") {
    newCostCPRG = duration * 213;
  }

  TotalNewCost = newCostXYZ + newCostCPRG;
}

console.log(TotalNewCost);

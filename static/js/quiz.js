/***********************************************************
*
* Quiz Code
*
***********************************************************/

// globals
let attempts = 0;
let numberCorrect = 0;

const accounting = document.getElementById("accounting");
accounting.innerHTML = `${numberCorrect} out of ${attempts} correct so far. `;

function questionSetup(starting) {
    
    // parameters
    numberOfChoices = 4;

    // handle counts
    if (starting) {
        attempts = 0;
        numberCorrect = 0;
        accounting.innerHTML = `${numberCorrect} out of ${attempts} correct so far. `;
    }

    // utility
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateDistinctIntegers(n, min, max) {
        if (max - min + 1 < n) {
          throw new Error("Range is too small to generate the required number of distinct integers.");
        }
      
        const result = new Set();
        
        while (result.size < n) {
          const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
          result.add(randomInt);
        }
      
        return Array.from(result);
      }

    function elementsAtIndices(arr, ind) {
        return ind.map(index => arr[index]);
    }

    function insertRadioButtons(containerId, name, options) {
        const container = document.getElementById(containerId);
  
        options.forEach((option, index) => {
          // Create radio input element
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.id = `${name}${index}`;
          radio.name = name;
          radio.value = option.value;
  
          // Create label for the radio button
          const label = document.createElement('label');
          label.htmlFor = radio.id;
          label.innerHTML = `${option.label}`;
          const span = document.createElement("span");
          span.innerHTML = ` (Click <span class="pronounce-button"><strong>here</strong></span> for pronunciation)`;
          const pronouncer = span.getElementsByTagName("strong")[0];
          console.log(pronouncer);
          const audioElement = new Audio(option.all.audio);
          audioElement.controls = false;
          pronouncer.addEventListener("click", function() {
            console.log("hello");
            audioElement.play();
          });

          radio.addEventListener("change", function(e) {
            if (e.target === radio) {
                attempts += 1;
                let choice = e.target.value;
                if (choice == "0") {
                    numberCorrect +=1;
                }
                accounting.innerHTML = `${numberCorrect} out of ${attempts} correct so far. `;
            }
          })
  
          // Append radio button and label to the container
          container.appendChild(radio);
          container.appendChild(label);
          container.appendChild(span);
          container.appendChild(document.createElement('br'));
        });
      }

    

    let randomIndices = generateDistinctIntegers(numberOfChoices, 0, postures.length - 1);
    let posturesInvolved = elementsAtIndices(postures, randomIndices);
    let scrambledIndices = generateDistinctIntegers(numberOfChoices, 0, numberOfChoices - 1);
    let answer = posturesInvolved[0];
    const question = document.getElementById("question");
    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = 'Check image filename';
    img.className = "image-center-250";

    // remove any previous material:
    while (question.firstChild) {
        question.removeChild(question.firstChild);
    }

    question.appendChild(img);
    const options = [];
    for (let i of scrambledIndices) {
        let obj = {
            value: i,
            label: posturesInvolved[i].sanskrit,
            all: posturesInvolved[i]
        }
        options.push(obj);
    }
    insertRadioButtons("question", "choices", options);

}
  
window.addEventListener('load', function() {
    questionSetup(true);
});

document.getElementById("go-again").addEventListener("click", function() {
    questionSetup(false);
});

document.getElementById("start-over").addEventListener("click", function() {
    questionSetup(true);
});
/***********************************************************
*
* Quiz Code
*
***********************************************************/

// globals
let attempts = {
    "image-to-sanskrit": 0
};
let numberCorrect = {
    "image-to-sanskrit": 0
}

function questionSetup(starting, quizType) {
    
    // parameters
    numberOfChoices = 4;

    // handle counts
    if (starting) {
        attempts[quizType] = 0;
        numberCorrect[quizType] = 0;
        document.getElementById(`${quizType}-start-over`).style.visibility = "hidden";
    }

    const accounting = document.getElementById(`${quizType}-accounting`);
    accounting.innerHTML = `${numberCorrect[quizType]} out of ${attempts[quizType]} correct so far. `;

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

    function insertRadioButtons(quizType, name, options) {
        const container = document.getElementById(`${quizType}-question`);
  
        options.forEach((option, index) => {
          // Create radio input element
          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.id = `${quizType}-${name}-${index}`;
          radio.name = `${quizType}-${name}`;
          radio.value = option.value;
          radio.setAttribute("quiz-type", quizType);
  
          // Create label for the radio button
          const label = document.createElement('label');
          label.htmlFor = radio.id;
          label.className = "quiz-form-control";
          label.innerHTML = `<em>${option.label}</em>`;
          const span = document.createElement("span");
          span.innerHTML = ` (click <span class="pronounce-button"><strong>here</strong></span> for pronunciation)`;
          span.setAttribute("quiz-type", quizType);
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

                attempts[quizType] += 1;

                document.getElementById(`${quizType}-go-again`).style.visibility = "visible";
                document.getElementById(`${quizType}-start-over`).style.visibility = "visible";

                let choice = e.target.value;
                if (choice == "0") {
                    numberCorrect[quizType] +=1;
                    accounting.innerHTML = `Right! ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                } else {
                    const labelThis = document.querySelector(`label[for="${radio.id}"]`);
                    const xmark = document.createElement("span");
                    xmark.innerHTML = "&#10060; ";
                    labelThis.prepend(xmark);
                    accounting.innerHTML = `Sorry, incorrect choice. ${numberCorrect[quizType]} / ${attempts[quizType]} so far. `;
                }
                const radioCorrect = document.querySelector(`input[quiz-type="${quizType}"][value="0"]`);
                const labelCorrect = document.querySelector(`label[for="${radioCorrect.id}"]`);
                const checkmark = document.createElement("span");
                checkmark.innerHTML = "&#10004; ";
                labelCorrect.prepend(checkmark);
                const pronounceSpans = document.querySelectorAll(`span[quiz-type="${quizType}"]`);
                for (let i = 0; i < pronounceSpans.length; i++) {
                    let detailsLink = ` <a href="${options[i].all.details}" target="_blank">Review details in new tab</a>`
                    pronounceSpans[i].innerHTML = detailsLink;
                }
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
    const question = document.getElementById(`${quizType}-question`);
    const img = document.createElement("img");
    img.src = answer.image;
    img.alt = 'Check image filename';
    img.className = "image-quiz";

    // remove any previous material:
    while (question.firstChild) {
        question.removeChild(question.firstChild);
    }

    question.appendChild(img);
    question.appendChild(document.createElement('br'));
    const options = [];
    for (let i of scrambledIndices) {
        let obj = {
            value: i,
            label: posturesInvolved[i].sanskrit,
            all: posturesInvolved[i]
        }
        options.push(obj);
    }
    insertRadioButtons(quizType, "choices", options);

}
  
window.addEventListener('load', function() {
    questionSetup(true, "image-to-sanskrit");
});

const goAgain = document.getElementById("image-to-sanskrit-go-again");
goAgain.addEventListener("click", function() {
        questionSetup(false, "image-to-sanskrit");
});

const startOver = document.getElementById("image-to-sanskrit-start-over");
startOver.addEventListener("click", function() {
    questionSetup(true, "image-to-sanskrit");
});


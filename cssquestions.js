const url = "css_mcq.json";
const hello = document.getElementById("try");
const hello2 = document.getElementById("try2");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

let quesanswers=[];
let data = [];
let index = 0;

// SHUFFLE FUNCTION
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
}

const getdata = async () => {
  let response = await fetch(url);
  data = await response.json();

  // SHUFFLE QUESTIONS
  shuffleArray(data);

  showQuestion();
}

const showQuestion = () => {
  // show question
  hello.innerText = data[index].question;

  // show options safely
  hello2.innerHTML = "";
  data[index].options.forEach((opt,i) => {
    let label = document.createElement("label");
    label.style.display="block";
    let radio=document.createElement("input");
    radio.type="radio";
    radio.name="option";
    radio.value=i;
    radio.id="radio";
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    hello2.appendChild(label);
  });

  // Button states
  if (index === 0) {
    previous.innerHTML = "EXIT";
  } else {
    previous.innerHTML = "Previous";
  }

  if (index === 9) {
    next.innerHTML = "Submit";
  } else {
    next.innerHTML = "Next";
  }
}

// NEXT button
next.addEventListener("click", () => {
  const selected=document.querySelector("input[name='option']:checked");
  if(selected){
    quesanswers[index]=parseInt(selected.value);
  }
  index++;

  if (index === 10) {
    calcscore();
    window.location.href="finalpage.html";
    return;
  }

  showQuestion();
});

// PREVIOUS button
previous.addEventListener("click", () => {

  if (index === 0) {
    window.location.href="sixthpage.html";
    return;
  }

  index--;
  showQuestion();
});


getdata();

function calcscore(){

  let score=0;
  for(let i=0 ; i<10 ; i++){
    if(quesanswers[i]===data[i].answer_index){
      score++;
    }
  }
  alert("your score is:"+score+"/10");
  window.location.href="finalpage.html?score="+score
}







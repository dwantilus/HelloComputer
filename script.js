console.log('hello from script');
const synth = window.speechSynthesis;




// document.querySelector('#button').onmouseover = () => {
//   console.log('mouse over');
//   let textInput = document.querySelector('#text-input').value;
//   speak(textInput);
// };

function saysomething() {
  console.log("saysomething called");

  //const speak = text => {
    /*if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }*/
    let utterThis = new SpeechSynthesisUtterance();
    utterThis.text = "ouch!!!!";
    utterThis.pitch = 1;
    utterThis.rate = 1;
    utterThis.volume = 5.0;
    synth.speak(utterThis);
  //};

}

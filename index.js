import { catsData } from "./data.js";
function getEmotionsArray(cats) {
  const emotions = [];
  for (const i of cats) {
    for (const j of i.emotionTags) {
      emotions.includes(j) || emotions.push(j); //use an OR staement when you want to perform one actions only if the other is false, once the first returns tru the other will not be evaluated
    }
  }
  return emotions;
}

function renderEmotionRadios(cats) {
  let emotionalHTMl = ``;
  for (const i of getEmotionsArray(cats)) {
    emotionalHTMl += `  <div class="radio">

        <input
        type= "radio"
        id = ${i}
        name = "emotions"
        value = ${i}
         />
         <label for = ${i} > ${i} </label>
   </div>`;
  }
  document.getElementById("emotion-radios").innerHTML = emotionalHTMl;
}

renderEmotionRadios(catsData);

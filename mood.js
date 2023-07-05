const h1 = document.querySelector('h1');
const happyBtn = document.getElementById('happy');
const sadBtn = document.getElementById('sad');
const angryBtn = document.getElementById('angry');
const confusedBtn = document.getElementById('confused');

happyBtn.addEventListener('click', function(e) {
  store.dispatch({type: 'HAPPY', payload: 'ʘ‿ʘ'});
})

sadBtn.addEventListener('click', function(e) {
  store.dispatch({type: 'SAD', payload: 'T.T'})
})

angryBtn.addEventListener('click', function(e) {
  store.dispatch({type: 'ANGRY', payload: 'ˋ皿ˊ'})
})

confusedBtn.addEventListener('click', function(e) {
  store.dispatch({type: 'CONFUSED', payload: '(・・'})
})

function updateMood() {
  h1.innerHTML = store.getState().mood;
  console.log('mood changing', store.getState().mood)
}

updateMood()
store.subscribe(updateMood);
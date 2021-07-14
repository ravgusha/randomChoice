const choice = document.getElementById('choice');
const btn = document.getElementById('btn');

btn.addEventListener('click', generateDesicion);

generateDesicion();

async function generateDesicion() {

  const res = await fetch('https://yesno.wtf/api')

  const data = await res.json()

  choice.innerHTML = data.answer;
  choice.style.backgroundImage = `url(${data.image})`;
}
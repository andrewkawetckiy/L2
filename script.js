const keyboard = document.getElementById('keyboard');
const textBox = document.querySelector('.text-box');

const letters = ['а', 'б', 'в', 'г', 'д', 'е', 'є', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'];

for (let letter of letters) {
  const key = document.createElement('div');
  key.classList.add('key');
  key.textContent = letter;
  key.addEventListener('click', () => {
    textBox.value += letter;
  });
  keyboard.appendChild(key);
}

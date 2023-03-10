const viewTotalChar = document.getElementById('view-total-char');
const getTotalChar = document.getElementById('input-text');
const maxCharLimit = 280;
const saveButton = document.getElementById('save-button');
const retrieveButton = document.getElementById('retrieve-button');
const clearButton = document.getElementById('clear-button');
const shareButton = document.getElementById('share-button');

function countChar() {
  const count = getTotalChar.value.length;
  const borderClass = count > maxCharLimit ? 'alerts-border' : '';
  getTotalChar.classList = `form-control ${borderClass}`;
  viewTotalChar.innerHTML = count;
}

getTotalChar.addEventListener('input', countChar);

saveButton.addEventListener('click', () => {
  const textValue = getTotalChar.value;
  localStorage.setItem('textValue', textValue);
});

retrieveButton.addEventListener('click', () => {
  const savedValue = localStorage.getItem('textValue');
  if (savedValue) {
    getTotalChar.value = savedValue;
    countChar();
  }
});

clearButton.addEventListener('click', () => {
  localStorage.removeItem('textValue');
  getTotalChar.value = '';
  countChar();
});

shareButton.addEventListener('click', () => {
  const textValue = getTotalChar.value;
  const shareUrl = `mailto:?body=${encodeURIComponent(textValue)}`;
  window.location.href = shareUrl;
});

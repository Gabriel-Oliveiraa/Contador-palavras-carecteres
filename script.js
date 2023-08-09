const textInput = document.getElementById('textInput');
const charCountSpan = document.getElementById('charCount');
const wordCountSpan = document.getElementById('wordCount');

textInput.addEventListener('input', updateCount);

function updateCount() {
    const text = textInput.value;
    
    const charCount = text.replace(/\s/g, '').length;

    const words = text.trim().split(/\s+/);
    const wordCount = words.length === 1 && words[0] === '' ? 0 : words.length;

    charCountSpan.textContent = charCount;
    wordCountSpan.textContent = wordCount;
}
const inputBox = document.querySelector(".text-area");
const encryptButton = document.querySelector(".encrypt");
const decryptButton = document.querySelector(".decrypt");
const outputBox = document.querySelector(".output");
const copyButton = document.querySelector(".copy");

const encryptionKeys = new Map([
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat']
]);
const decryptKeys = new Map(Array.from(encryptionKeys.entries()).map(([k, v]) => [v, k]));

function encrypt(str) {
  if (!str) return str;
  return str.toLowerCase().replace(/[aeiou]/g, match => encryptionKeys.get(match));
}

function decrypt(str) {
  if (!str) return str;
  return str.replace(new RegExp(`(${Array.from(decryptKeys.keys()).join('|')})`, 'g'), match => decryptKeys.get(match));
}

encryptButton.addEventListener("click", function() {
  const inputText = inputBox.value;
  const outputText = encrypt(inputText);
  outputBox.value = outputText;
});

decryptButton.addEventListener("click", function() {
  const inputText = inputBox.value;
  const outputText = decrypt(inputText);
  outputBox.value = outputText;
});

copyButton.addEventListener("click", function() {
  outputBox.select();
  document.execCommand("copy");
  inputBox.value = "";
});

 


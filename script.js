const inputText = document.querySelector("#text-input");
const encryptButton = document.querySelector("#encrypt-button");
const decryptButton = document.querySelector("#decrypt-button");
const textOutput = document.querySelector("#text-output");
const copyButton = document.querySelector("#copy-button");

const output = document.getElementById("output");
const message = document.getElementById("message");
output.style.display = "none";
verifyInput();

document.getElementById("encrypt-button").onclick = (e) => {
  e.preventDefault();
  const encryptedText = encrypt(inputText.value.toLowerCase());
  textOutput.value = encryptedText;
  inputText.value = "";
  show();
};

document.getElementById("decrypt-button").onclick = (e) => {
  e.preventDefault();
  const decryptedText = decrypt(inputText.value);
  textOutput.value = decryptedText;
  inputText.value = "";
  show();
};

document.getElementById("copy-button").onclick = (e) => {
  e.preventDefault();
  const textOutput = document.querySelector("#text-output");
  textOutput.select();
  navigator.clipboard.writeText(textOutput.value);
  textOutput.value = "";
};

function encrypt(encryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  encryptedString = encryptedString.toLowerCase();
  for (let i = 0; i < matrixCode.length; i++) {
    if (encryptedString.includes(matrixCode[i][0])) {
      encryptedString = encryptedString.replaceAll(
        matrixCode[i][0],
        matrixCode[i][1]
      );
    }
  }
  return encryptedString;
}

function decrypt(decryptedString) {
  let matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  decryptedString = decryptedString.toLowerCase();
  for (let i = 0; i < matrixCode.length; i++) {
    if (decryptedString.includes(matrixCode[i][1])) {
      decryptedString = decryptedString.replaceAll(
        matrixCode[i][1],
        matrixCode[i][0]
      );
    }
  }
  return decryptedString;
}

function show() {
  document.getElementById("message").style.display = "none";
  document.getElementById("output").style.display = "block";
}

function home() {
  document.getElementById("output").style.display = "none";
  document.getElementById("message").style.display = "block";
}

function verifyInput() {
  var wordInput = document.querySelector("#text-input");
  wordInput.addEventListener("keypress", function (e) {
    var keyCode = e.keyCode ? e.keyCode : e.which;

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}

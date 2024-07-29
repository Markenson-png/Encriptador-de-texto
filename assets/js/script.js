function encryptText() {
    let input = document.getElementById("inputText").value;
    let output = '';

    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) + 3);
    }

    document.getElementById("outputText").value = output;
}

function decryptText() {
    let input = document.getElementById("inputText").value;
    let output = '';

    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) - 3);
    }

    document.getElementById("outputText").value = output;
}

function encryptText(text){
    if(text != '' && text != undefined){
        var array = text.split('');
        var result = '';
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case 'a':
                    result += 'ai';
                    break;
                case 'e':
                    result += 'enter';
                    break;
                case 'i':
                    result += 'imes';
                    break;
                case 'o':
                    result += 'ober';
                    break;
                case 'u':
                    result += 'ufat';
                    break;
                default:
                    result += array[i];
                    break;
            }
        }
        var aux = document.getElementById("text-to-encrypt").value = "";
        aux = document.getElementById("result-text").hidden = true;
        aux = document.getElementById("result-text-crypted").hidden = false;
        aux = document.getElementById("result-crypted").value = result;
        console.log("entro a encriptar");
    }
}

function decryptText(text){
    if(text != '' && text != undefined){

        var array = text.split('');
        var result = '';
        for (let i = 0; i < array.length; i++) {
            switch (array[i]) {
                case 'a':
                    result += 'a';
                    i++;
                    break;
                case 'e':
                    result += 'e';
                    i+=4;
                    break;
                case 'i':
                    result += 'i';
                    i+=3;
                    break;
                case 'o':
                    result += 'o';
                    i+=3;
                    break;
                case 'u':
                    result += 'u';
                    i+=3;
                    break;
                default:
                    result += array[i];
                    break;
            }
        }
        var aux = document.getElementById("text-to-encrypt").value = "";
        aux = document.getElementById("result-text-crypted").hidden = false;
        aux = document.getElementById("result-crypted").value = result;
    }
}
function clearText(){
    var aux = document.getElementById("result-text-crypted").hidden = true;
    aux.value = "";
    aux = document.getElementById("result-text").hidden = false;
}

function copyText(){
    var copyText = document.getElementById("result-crypted");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    var aux = document.getElementById("copy-successfully");
    aux.hidden = false;
    aux.onanimationstart;
}

function hideDialogCopySuccessfully(){
    var aux = document.getElementById("copy-successfully").hidden = true;
}
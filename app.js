var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

getTranslationURL = (text) => serverURL + "?" +"text="+ text;

errorHandler = (error) => {
    console.log("Error Occured ",error);
    alert("something wrong with server! try again in some time");
}

btnTranslate.addEventListener("click", function clickEventHandler(){
    // txtOutput.innerText = "output is" + txtInput.value
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        txtOutput.innerText = translatedText;
    } )
    .catch(errorHandler);



})















// var textArea = document.querySelector("textarea")
// var btnprimary = document.querySelector(".btn-primary")
// var btninput = document.querySelector("#input-btn")
// var name = document.querySelector("input[name='translator']")
//alert("Hello Yuvi");
var inputText =  document.querySelector("#input");
var translateBtn = document.querySelector("#btn-translate");
var outputText= document.querySelector("#output");



function clickHandler(){
 var url = constructURL(inputText.value);
 fetch (url)
 .then(function responseHandler(response){return response.json()})
 .then(function logJson(json){outputText.innerText=json.contents.translated})
};
function constructURL(txt){
return apiURL+"?"+"text="+txt;
}

translateBtn.addEventListener("click", clickHandler);


var apiURL = "https://api.funtranslations.com/translate/pirate.json";

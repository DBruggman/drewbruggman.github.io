
var BiggerButton = document.querySelector("#BiggerButton")
BiggerButton.addEventListener("click",clickBB)

var radioFancy = document.querySelector("#radioFancy")
radioFancy.addEventListener("change", changeFancy)

var radioBoring = document.querySelector("#radioBoring")
radioBoring.addEventListener("change", changeBoring)

var textArea = document.querySelector("#userTextArea")

var MooButton = document.querySelector("#mooButton")
MooButton.addEventListener("click",clickMoo)

function clickBB(){
    textArea.style.fontSize = "24pt"
}

function changeFancy(){
    textArea.style.fontWeight = "bold"
    textArea.style.color = "blue"
    textArea.style.textDecorationLine = "underline"
}

function changeBoring(){
    textArea.style.fontWeight = "normal"
    textArea.style.fontSize = "10pt"
    textArea.style.color = "black"
    textArea.style.textDecorationLine = "none"
    textArea.style.textTransform = "none"
}

function clickMoo(){
    textArea.style.textTransform = "capitalize"
    
    //add -moo at the end
    var str = textArea.value
    var splitStr = str.split(".")
    textArea.value = splitStr.join(" -Moo. ")
}
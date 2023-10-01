console.log("working")


let inputText = document.querySelector("#input-area");
let savebtn = document.querySelector(".savebtn");
console.log(inputText.textContent)

// If saved values are available, apply them
const savedValue = localStorage.getItem('textboxValue');
const savedStyles = localStorage.getItem('textboxStyles');

if (savedValue) {
  inputText.innerHTML = savedValue;
}
if (savedStyles) {
  inputText.setAttribute('style', savedStyles);
}
// console.log(inputText.value);

// function for saving textbox value to local storage
savebtn.addEventListener("click", function () {
  // Save the textbox value
  localStorage.setItem( 'textboxValue', inputText.innerHTML);
  // console.log(inputText.innerHTML);
  // Save the textbox CSS styles
  localStorage.setItem('textboxStyles', inputText.getAttribute('style'));
});





// function to handle font change
function changeFont(){
    let fontType = document.querySelector("#font-type");
    console.log(fontType.value);
    inputText.style.fontFamily = fontType.value;
}

// function to handle font size 
function changeFontSize()
{
    let fontHeight = document.querySelector("#font-size");
    inputText.style.fontSize = fontHeight.value+"px";
    // console.log(inputText.style.font)
}

// function for adding and removing bold 
const selectedText = window.getSelection().toString().trim();
function addBold(){
  var fWeight = inputText.style.fontWeight;
{fWeight === "bolder"?fWeight="normal":fWeight="bolder";
inputText.style.fontWeight=fWeight;}

}

// function for adding and removing italic
function addItalic(){
    var fItalic = inputText.style.fontStyle;
    {fItalic === "italic"?fItalic="normal":fItalic="italic";
    inputText.style.fontStyle=fItalic;}
}

// function for adding line-though and underline
function addTextDeco(element){
  var str = element.name;
  var prev = inputText.style.textDecoration;
  if(prev==="")
    prev = str;
  else if(prev.indexOf(str)>=0)
    prev = prev.replace(str,"");
  else if(prev.indexOf(str)<0)
    prev = prev+" "+str;
    inputText.style.textDecoration = prev;
  // console.log(text)
  }

// function for text align:center|left|right|justify
function editalign(element){
  var prev = inputText.style.textAlign;
  var name = element.name;
  if(prev===name)
  prev="justify";
  else
  prev=name;
  inputText.style.textAlign = prev;
  // console.log(prev)
}

//function for adding orderer|unordered list
var orderclick = true;
var unorderclick = true;
function addList(element){
  
  // else
  // {
    if(element.name==="unordered")
    {
      unorderclick=!unorderclick;
      orderclick=true;
      if(unorderclick)
      return;
      var newList= document.createElement("ul");
    }
    else{
      orderclick=!orderclick;
      unorderclick = true;
      if(orderclick)
      return;
      var newList= document.createElement("ol");
    }
      var item = document.createElement("li");
      newList.appendChild(item);
      inputText.appendChild(newList)
    }
  // console.log(inputText.childNodes)
  function colorChange(){

    const color = document.querySelector(".color").value;
    inputText.style.color = color;
  }
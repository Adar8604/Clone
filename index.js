var btn=document.getElementById("add");
var list=document.getElementById("newlist");
btn.addEventListener("click",()=>{
var newList=document.createElement("li");
var newText=document.createTextNode("Item "+ (newlist.childElementCount+1));
newList.appendChild(newText);
newList.id="li"+(newlist.childElementCount+1);
list.appendChild(newList);


});
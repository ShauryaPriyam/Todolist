let list=document.querySelector("#list")
let input=document.querySelector('.input')
onLoad();




function addNewTask(){
let listItem=document.createElement("li");
if (!textData()) return;
listItem.innerHTML=`
   ${textData()} <button class="delete"  onclick="deleteText(this)">X</button>
`
list.appendChild(listItem)
localStorage.setItem('listItems',JSON.stringify(list.innerHTML))
input.value = "";

}

function textData(){
   return  input.value.trim();
}

function onLoad(){
  let newStr = localStorage.getItem('listItems');
  if(newStr){
    list.innerHTML=JSON.parse(newStr);
  }

  // let deleteButtons = list.querySelectorAll('.delete');
  //       deleteButtons.forEach((button) => {
  //           button.setAttribute('onclick', 'deleteText(this)');
  //       })
}

// function deleteText(deleteButton){
//   deleteButton.parentElement.remove();
//   localStorage.setItem('listItems',JSON.stringify(list.innerHTML))
// }

list.addEventListener("click",(e)=>{
 if( e.target.tagName=='LI'){e.target.classList.toggle('checked')
  localStorage.setItem('listItems',JSON.stringify(list.innerHTML))
 }
})

list.addEventListener('click',(e)=>{
  if(e.target.tagName=='BUTTON'){
    e.target.parentElement.remove()
    localStorage.setItem('listItems',JSON.stringify(list.innerHTML))
  }
})

// The tagName property always returns the tag name in uppercase, so if you're comparing e.target.tagName to 'li' (in lowercase)

// two way to delete a list item first i made with help of chatGpt --deleteText() ,another e.target.tagName genunine i find this more useful



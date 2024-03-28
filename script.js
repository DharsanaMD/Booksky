var popupBox=document.querySelector(".popup-box");
var popupOverlay=document.querySelector(".popup-overlay");
var addPopupBtn=document.getElementById("add-popup-btn");


addPopupBtn.addEventListener("click",function(){
    popupBox.style.display="block";
    popupOverlay.style.display="block";
})
var cancelBtn=document.getElementById("cancel-popup");

cancelBtn.addEventListener("click",function(event){
    event.preventDefault();
    popupBox.style.display="none";
    popupOverlay.style.display="none";
})
//selct boxContainer addBook bookTitle bookAuthor bookDescript
var container=document.querySelector(".container");
var addBook=document.getElementById("add-book");
var bookTitle=document.getElementById("book-title-input");
var bookAuthor=document.getElementById("book-author-input");
var bookDescript=document.getElementById("book-descript-input");

addBook.addEventListener("click",function(event){
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","box-container");
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDescript.value}</p>
    <button onclick="deleteBook(event)">Delete</button>`;
    ;
    container.append(div);
    popupBox.style.display="none";
    popupOverlay.style.display="none";

})
function deleteBook(event){
    event.target.parentElement.remove();
}



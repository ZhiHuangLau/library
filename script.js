const myLibrary=[bruh={author:"me",title:"keke",pages:55,status:"yes"},bruh={author:"me",title:"keke",pages:55,status:"yes"},bruh={author:"me",title:"keke",pages:55,status:"yes"}];

const dialog=document.querySelector("dialog");
const showButton=document.querySelector("dialog+button");
const closeButton=document.querySelector("#confirmBtn");
const inputAut=dialog.querySelector("#author");
const inputTit=dialog.querySelector("#title");
const inputPg=dialog.querySelector("#pages");
const inputRd=dialog.querySelector("#status");




function Book(author,title,pages,status){
  this.author=author;
  this.title=title;
  this.pages=pages;
  this.status=status;
};



function addBookToLibrary(author,title,pages,status){
  const book1 =new Book(author,title,pages,status);
  myLibrary.push(book1);
}


showButton.addEventListener("click",() =>{
  dialog.showModal();
})

let loopNum=1;
function showTable(){
  for(const book of myLibrary){
    const container=document.querySelector(".container");
    const row=document.createElement("div");
    row.classList.add("table-row");
    container.appendChild(row);

    const num=document.createElement("div");
    num.classList.add("number");
    num.textContent=loopNum;
    row.appendChild(num);
    loopNum++;

    const aut=document.createElement("div");
    aut.classList.add("author");
    aut.textContent=book.author;
    row.appendChild(aut);

    const tit=document.createElement("div");
    tit.classList.add("title");
    tit.textContent=book.title;
    row.appendChild(tit);

    const pg=document.createElement("div");
    pg.classList.add("pages");
    pg.textContent=book.pages;
    row.appendChild(pg);

    const rd=document.createElement("div");
    rd.classList.add("status");
    rd.textContent=book.status;
    row.appendChild(rd);

    const chgsts=document.createElement("button");
    chgsts.classList.add("change-status-but")
    chgsts.textContent="Change Read Status";
    row.appendChild(chgsts);

    const rmv=document.createElement("button");
    rmv.classList.add("remove-book");
    rmv.textContent="Remove Book";
    row.appendChild(rmv);
  
  }}

showTable();

const changeStatus=document.querySelectorAll(".change-status-but");
const removeButton=document.querySelectorAll(".remove-book");


closeButton.addEventListener("click",(event) =>{
  event.preventDefault();
  dialog.close([inputAut.value,inputTit.value,inputPg.value,inputRd.value]); 
  mek=dialog.returnValue.split(",");
  addBookToLibrary(mek[0],mek[1],mek[2],mek[3]);
})

changeStatus.forEach(Element => {
    Element.addEventListener("click",()=>{
      let Dad=Element.parentElement;
      let brother=Number(Dad.firstChild.textContent)-1;
      let targetBook=myLibrary[brother];
      if (targetBook.status=="yes") {
        targetBook.status='no';
      }else{
        targetBook.status='yes';
      }
    })
});
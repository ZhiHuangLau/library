const myLibrary=[Book={author:"me",title:"keke",pages:55,status:"yes"}];

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


let loopNum=1;

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
 
}


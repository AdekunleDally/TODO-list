const addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');


//receive todo below
const generateTemplate=(todo)=> {
 
 const html   =`
 <li class="list-group-item d-flex justify-content-between align-items-center">
 <span>${todo}</span>
 <i class="far fa-trash-alt delete"></i>
</li>
 `
 list.innerHTML+=html;
};



addForm.addEventListener('submit', e=> {
  e.preventDefault();
  const todo=addForm.add.value.trim();
  //console.log(todo)
  //pass todo below
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }
})

const searchForm=(term)=>{
  Array.from(list.children)
  .filter(todo=> !todo.textContent.toLowerCase().includes(term))
  .forEach(todo=>todo.classList.add('filtered'));

  Array.from(list.children)
  .filter(todo=> todo.textContent.lowerCase().includes(term))
  .forEach(todo=>todo.classList.remove('filtered'));
  
  } 

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

search.addEventListener('keyup', (e)=>{
  const term= search.value.trim().toLowerCase();
  searchForm(term);
})


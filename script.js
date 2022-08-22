
window.onload=function()
{
  let newtask=this.document.getElementById('newtask')
  let addtask=this.document.getElementById('addtask')
  let todos=this.document.getElementById('todolist')
  let clean=this.document.getElementById('clean')
  addtask.onclick=function()
  {
    let item=document.createElement('li')
    item.innerText=newtask.value
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    checkbox.classList.add("mystyle")
    let del=document.createElement('button')
    del.innerText=('Delete❎')
    del.classList.add("style")
    item.appendChild(checkbox)
    item.appendChild(del)
    todos.appendChild(item)
    del.onclick=function()
    {
         item.remove()
         
    }
    
    checkbox.onclick=function()
    {
      
    }
  }

  
}

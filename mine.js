const list  = document.getElementById("taskLkist")
const input = document.getElementById("inp")


document.getElementById("add").addEventListener("click",function(){
let li = document.createElement("li");
  li.textContent = input.value || " مهمة جديد  " ;
  list.append(li);
  input.value= ""

})
document.getElementById("prepend").addEventListener("click",function(){
let li = document.createElement("li");
  li.textContent = input.value  || " مهمة جديده  "
  list.prepend(li)
  input.value= ""

})
document.getElementById("insertBefore").addEventListener("click",function(){
  let li = document.createElement("li");
    li.textContent = input.value  ||" مهمة جديده     "
    list.firstElementChild.before(li)
    input.value= ""
  })
  document.getElementById("insertAfter").addEventListener("click",function(){
    let li = document.createElement("li");
      li.textContent = input.value  ||" مهمة جديده     "
      list.firstElementChild.after(li)
    input.value= ""

    })
    document.getElementById("removeFirst").addEventListener("click",function(){
      if(list.firstElementChild){
        list.firstElementChild.remove()
      }
      })
      

const colors=['red','green','blue','yellow']
const btn=document.querySelector('.btn')
const text=document.querySelector('.text')
btn.addEventListener('click',()=>{
   const random=Math.floor(Math.random()*colors.length)
   document.body.style.background=colors[random]
   text.textContent=colors[random]
})
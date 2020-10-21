const colors=['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const btn=document.querySelector('.btn')
const text=document.querySelector('.text')


btn.addEventListener('click',()=>{
   let color='#'
for(let i=0;i<6;i++){
const random=Math.floor(Math.random()*colors.length)
   color += colors[random]
   
}
   document.body.style.background=color
   text.textContent=color
})
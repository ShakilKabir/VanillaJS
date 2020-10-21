import get from './getElement.js'
const student = {
    std1: {
        name: "Hamza",
        address: "Mirpur",
        CGPA: 3.0
    },
    std2: {
        name: "Hemel",
        address: "Jigalota",
        CGPA: 3.55
    },
    std3: {
        name: "Sabu",
        address: "Feni",
        CGPA: 3.66
    }
}
const btns=[...document.querySelectorAll('.roll-btn')]
const infoBtns=[...document.querySelectorAll('.info-btn')]
const showRoll=get('.showRoll')
const showInfo=get('.showInfo')

btns.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
      btns.forEach((btn)=>btn.classList.remove('active'))
      e.currentTarget.classList.add('active')
      showRoll.textContent=e.currentTarget.textContent

      infoBtns.forEach((btn)=>btn.classList.remove('active'))
showInfo.textContent='The results will show here'
   })
   console.log(btn.dataset.id);
   
})

infoBtns.forEach((infoBtn)=>{
 
   const student1=student.std1
   infoBtn.addEventListener('click',(e)=>{
       infoBtns.forEach((btn)=>btn.classList.remove('active'))
       e.currentTarget.classList.add('active')
       const roll= [...e.currentTarget.parentElement.previousElementSibling.previousElementSibling.children];
       btns.forEach((person)=>{
          if(person.classList.contains('active')){
             const student1=student[person.dataset.id]
             showInfo.textContent=student1[e.currentTarget.textContent]
          }
       })
   })
})
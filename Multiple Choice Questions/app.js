const btn=document.querySelector('.btn')
const form=document.querySelector('.form')

form.addEventListener('submit',(e)=>{
   e.preventDefault()
   const inputs=[...document.querySelectorAll('input')]
   inputs.forEach((input)=>{
      console.log(input.value);
   })
})
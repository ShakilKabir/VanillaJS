const getElement=(selection)=>{
   const element=document.querySelector(selection)
   if(element){
      return element
   } else {
throw `no element selected`
   }
}
export default getElement
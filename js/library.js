let jsonObject={};
   window.addEventListener('DOMContentLoaded', (event) => {
       const name=document.querySelector("#name");
       name.addEventListener('input',function(){
           let error=document.querySelector(".error_name");
           try
           {
               new AddressBook().name=name.value;
               error.textContent='';
           }
           catch(e)
           {
               error.textContent=e;
           }
       })
       const mobile=document.querySelector("#phone");
       mobile.addEventListener('input',function(){
           let error=document.querySelector(".error_phone");
           try
           {
               new AddressBook().phoneNumber=mobile.value;
               error.textContent='';
           }
           catch(e)
           {
               error.textContent=e;
           }
       })
       const address=document.querySelector("#address");
       address.addEventListener('input',function(){
           let error=document.querySelector(".error_address");
           try
           {
               new AddressBook().address=address.value;
               error.textContent='';
           }
           catch(e)
           {
               error.textContent=e;
           }
       })
   })
   const operation=(callback)=>
   {
      callback()
   }
   const save=()=>
   {
       setJson();
   }
   const rese=()=>
   {
      
   }
  let setJson=()=>
  {
    jsonObject._name=getInputValue("#name");
    jsonObject._address=getInputValue("#address");
    jsonObject._city=getInputValue("#city");
    jsonObject._state=getInputValue("#state");
    jsonObject._zip=getInputValue("#zip");
    jsonObject._mobile=getInputValue("#phone");
    alert(jsonObject);

  }



  const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

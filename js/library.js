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
       saveAddress();
   }
   const rese=()=>
   {
    unsetvalue('#name', '');
    unsetvalue('#address', '');
    unsetvalue('#city', '');
    unsetValueIndex('#state',0);
    unsetValueIndex('#zip',0);
    unsetValueIndex('#phone', 0);
   }
   const unsetValueIndex=(id,index)=>
{
    const element=document.querySelector(id);
    element.selectedIndex=index;
}
  let setJson=()=>
  {
    jsonObject._name=getInputValue("#name");
    jsonObject._address=getInputValue("#address");
    jsonObject._city=getInputValue("#city");
    jsonObject._state=getInputValue("#state");
    jsonObject._zip=getInputValue("#zip");
    jsonObject._mobile=getInputValue("#phone");

  }
  const saveAddress=(id)=>
  {
      if(id==undefined)
      {
            id=jsonEmptyOrNot();
      }
      let contactObj=new AddressBook();
      contactObj._id=id;
      saveAddressIntoLocal(contactObj);
      let ab=JSON.parse(localStorage.getItem("AddressBook"));  
      if(ab)
      {
          ab.push(contactObj);
      }
      else
      {
          ab=[contactObj];
      }
      localStorage.setItem("AddressBook",JSON.stringify(ab));
      alert("Data Saved");
  }
  const saveAddressIntoLocal=(contactObj)=>
  {
      try{
      contactObj._address=jsonObject._address;
      }catch(e)
      {
          alert(e);
      }
      try
      {
      contactObj._name=jsonObject._name;
      }
      catch(e)
      {
          alert(e);
        }
      contactObj._state=jsonObject._state;
      contactObj._city=jsonObject._city;
      try{
      contactObj._phoneNumber=jsonObject._mobile;
      }catch(e)
      {
          alert(e);
      }
      contactObj._zipcode=jsonObject._zip;
      alert(contactObj.toString());
  }
const jsonEmptyOrNot=()=>
{
    return localStorage.getItem("AddressBook") ? JSON.parse(localStorage.getItem('EmployeePayroll')).length:1;
}

  const getInputValue = (id) => {
    let value = document.querySelector(id).value;
    return value;
}

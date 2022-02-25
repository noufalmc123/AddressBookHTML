let jsonObject={};





window.addEventListener('DOMContentLoaded', (event) => {

    createInnerHtml();
})


   const createInnerHtml=()=>
{
    
    let Json1=createJson();
    
    if(Json1.length===0) return;
    const headerHtml='<thead><th>Name</th><th>Address</th><th>City</th><th>State</th><th>ZipCode</th><th>Phone Number</th></thead>';
let innertHtml=`${headerHtml}`;
    for(let Json of Json1)
    {
    innertHtml=`${innertHtml}<tr><td>${Json._name}</td><td>${Json._address}</td><td>
<label class="dept-label">${Json._city}</label></td><td>${Json._state}</td><td>${Json._zipcode}</td>
<td>${Json._phoneNumber}</td>
<td>
<img src="/assets/create-black-18dp.svg" onclick="update(this)" id="${Json._id}">
<img src="/assets/delete-black-18dp.svg" onclick="remove(this)" id="${Json._id}"></td></tr>`;
    }
document.querySelector("#table").innerHTML=innertHtml;
}

   const createJson=()=>
{
    return localStorage.getItem("AddressBook") ? JSON.parse(localStorage.getItem('AddressBook')):[];
}

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
const remove=(node)=>
{
    
    let contact=JSON.parse(localStorage.getItem("AddressBook"));
    let map=contact.find(book=>book._id==node.id);
     let index=contact.map(data=>data._id).indexOf(map._id);
    contact.splice(index,1);
    localStorage.setItem("AddressBook",JSON.stringify(contact));
    alert("removed");
    createInnerHtml();
}
const update=(id)=>
{
    alert("gi")
}

let jsonObject={};
let status=false;

const checkForUpadte=()=>
{
    
    let abJson=localStorage.getItem("EditAddress");
    isUpdate=abJson ? true : false;
    if(!isUpdate) return;
    setForm(JSON.parse(abJson));
}
const setForm=(json)=>
{
    setValue("#name",json._name);
    setValue("#address",json._address);
    setValue("#phone",json._phoneNumber);
    setValue("#zip",json._zipcode);
    setGroupValue("city",json._city);
    setGroupValue("state",json._city);
}
const setValue=(id,value)=>
{
    
    document.querySelector(id).value=value;
}
const setGroupValue=(name,value)=>
{
    var myOpts = document.getElementById(name).options;
    for(i=0;i<myOpts.length;i++)
    {
        
        if(myOpts[i].value==value)
        {
          
            myOpts[i].selected=true;
        }
    }
}

   const createInnerHtml=()=>
{
    let Json2=createJson();
    if(Json2.length===0) return;
    const headerHtml='<thead><th>Name</th><th>Address</th><th>City</th><th>State</th><th>ZipCode</th><th>Phone Number</th></thead>';
let innertHtml=`${headerHtml}`;
    for(let Json of Json2)
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
  const saveAddress=()=>
  {
      let id;
    let abJson=localStorage.getItem("EditAddress");
    let ab=JSON.parse(localStorage.getItem("AddressBook")); 
      if(!abJson)
      {
            id=jsonEmptyOrNot();
            if(id!=1)
            {
                let length=ab.length;
                id=parseInt(length)+1;
            }
      }
      else
      {
          id=JSON.parse(localStorage.getItem("EditAddress"))._id;
      }
      let contactObj=new AddressBook();
      contactObj._id=id;
      if(ab)
      {
        let editInfo=ab.find(empList=>empList._id==id);
        if(!abJson)
        {
            ab.push(saveAddressIntoLocal(contactObj));
        }
        else
        {
            
            let index1=ab.map(emp=>emp._id).indexOf(editInfo._id);
            ab.splice(index1,1,saveAddressIntoLocal(contactObj));
        }
      }
      else
      {
          ab=[saveAddressIntoLocal(contactObj)];
      }
      localStorage.setItem("AddressBook",JSON.stringify(ab));
      alert("Data Saved");
      window.location.replace("../pages/index.html");
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
      return contactObj;
  }
const jsonEmptyOrNot=()=>
{
    return localStorage.getItem("AddressBook") ? JSON.parse(localStorage.getItem('AddressBook')).length:1;
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
const update=(node)=>
{
    let addressbook=JSON.parse(localStorage.getItem('AddressBook'));
    let contact= addressbook.find(con=>con._id==node.id);
    if(!contact) return;
    let editData=JSON.stringify(contact);
    localStorage.setItem("EditAddress",editData);
    window.location.replace("../pages/index.html");
}
const createJson=()=>
{
    
    return localStorage.getItem("AddressBook") ? JSON.parse(localStorage.getItem('AddressBook')):[];
}
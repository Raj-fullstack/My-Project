


function OnSubmit(){
   
   
    const Name = document.getElementById ('Name').value;
    const DOB = document.getElementById ('DOB').value;
    const Address = document.getElementById ('Address').value;
    const Country= document.getElementById ('Country').value;
    const Email = document.getElementById ('Email').value;
    const Phone = document.getElementById ('Phone').value;
    const Mobile = document.getElementById ('Mobile').value;
    const State = document.getElementById ('State').value;
   

    const FormData={
        Name:Name,
        DOB:DOB,
        Address:Address,
        Country:Country,
        Email:Email,
        Phone:Phone,
        Mobile:Mobile,
        State:State
    }

    var errorMessage = document.getElementById('error-message');
  
  // name is empty
  if (Name == ""||Address==""||Country==""||Email==""||Phone==""||Mobile==""||State=="") {
    errorMessage.style.display = 'block';
    return false
  } 

  else {
    console.log(FormData); 
    errorMessage.style.display = 'none';
    return true;
  }

    

   }
  function CountryChange(){
     let Country = document.getElementById('Country').value;

    if(Country == "India"){
        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="Maharashtra">Maharashtra</option>
         <option value="Karnataka">Karnataka</option>
         <option value="Tamil Nadu">Tamil Nadu</option>
         <option value="Uttar Pradesh">Uttar Pradesh</option>
         <option value="Gujarat">Gujarat</option>
        `        
    }
    if(Country == "USA"){
        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="California">California</option>
         <option value="Texas">Texas</option>
         <option value="Florida Nadu">Florida</option>
         <option value="New York">New York</option>
         <option value="Illinois">Illinois</option>
        `     
    }
    if(Country == "Canada"){
        document.getElementById ('State').innerHTML = `
        <option selected value="stateselect">Please select your state</option>
         <option value="Ontario">Ontario</option>
         <option value="Quebec">Quebec</option>
         <option value="Columbia">Columbia</option>
         <option value="Alberta">Alberta</option>
         <option value="Manitoba">Manitoba</option>
        `     
    }  
}
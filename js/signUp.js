var GetName=document.querySelector('#name');
var GetMail=document.querySelector('#mail');
var GetPasword=document.querySelector('#password');

var GetButton=document.querySelector('#btnSignUp')


function checkInputs() 
{
    if (GetName.value=="" || GetMail.value=="" || GetPasword.value=="")
    {
      alert('Please, fill all boxes!')  
    }
    else
    {
        alert('You have been registered succesfully!')
        GetName.value="";
        GetMail.value="";
        GetPasword.value="";
        GetButton.setAttribute('href',"home.html")
    }
}

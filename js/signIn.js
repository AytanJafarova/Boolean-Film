var GetMail=document.querySelector('#mail');
var GetPasword=document.querySelector('#password');

var GetButton=document.querySelector('#btnSignIn')


function checkInputs() 
{
    if (GetMail.value=="" || GetPasword.value=="")
    {
      alert('Please, fill all boxes!')  
    }
    else
    {
        alert('You entered succesfully!')
        GetMail.value="";
        GetPasword.value="";
        GetButton.setAttribute('href',"home.html")
    }
}

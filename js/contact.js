var GetName=document.querySelector('#fullName');
var GetMail=document.querySelector('#mail');
var GetSubject=document.querySelector('#subject');
var GetMessage=document.querySelector('#text');

var GetButton=document.querySelector('#btnSend')

function checkInputs() 
{
    if (GetName.value=="" || GetMail.value=="" || GetSubject.value=="" || GetMessage.value=="")
    {
      alert('Please, fill all boxes!')  
    }
    else
    {
        alert('Your comment has been sent succesfully!')  
        GetName.value="";
        GetMail.value="";
        GetSubject.value="";
        GetMessage.value="";
    }
}


function showMore() 
{
    document.getElementById('listHidden').style.zIndex=2;
}

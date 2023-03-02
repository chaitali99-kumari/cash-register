const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availableNotes=[2000, 500 ,100,50, 20 ,10 ,5,1];

checkBtn.addEventListener("click", function validateBillAmount()
{
    hideMessage();
    if(~~billAmount.value > 0)
    {
        
        
        if((~~cashGiven.value)>=(~~billAmount.value))
        {
            const amountToBeReturned = cashGiven.value-billAmount.value;
            showMessage("Rs. "+amountToBeReturned);
            calculateChange(amountToBeReturned);
        }
        else
        {
           
            showMessage( "Do you wanna wash plates?");
            noteValue();
        }
    }
    else
    {
        showMessage( "invalid bill amount");
        noteValue();
    }
});
 function calculateChange(amountToBeReturned)
 {
    for(let i=0 ; i< availableNotes.length ; i++)
    {
        const numberOfNotes = Math.trunc(
            amountToBeReturned /availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned %  availableNotes[i] ;
        noOfNotes[i].innerText = numberOfNotes;

    }
 }
 function hideMessage()
 {
    message.style.display =  "none";
    
 }
 function hidereturnBbalance(){
    returnBalance.style.display="none";
 }
 function showMessage(msg)
 {
    message.style.display = "block" ;
    message.innerText = msg;
 }
function noteValue(){
    for(let j=0 ; j<availableNotes.length;j++){
    noOfNotes[j].innerText = 0;
    }
}
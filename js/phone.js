function updatePhoneNumber (isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updateTotalPhonePrice(newPhoneNumber){
    const phoneTotalPrice = document.getElementById('phone-total');
    const newPhonePrice = newPhoneNumber * 1219;
    phoneTotalPrice.innerText = newPhonePrice;
}



document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber =  updatePhoneNumber(true);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubtotal();
    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber= updatePhoneNumber(false);
    updateTotalPhonePrice(newPhoneNumber);
    calculateSubtotal();
})
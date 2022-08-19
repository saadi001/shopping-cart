function getTextElementById (elementId){
        const elements = document.getElementById(elementId);
        const elmentsValueString = elements.innerText;
        const elementValue = parseInt(elmentsValueString);
        return elementValue;
}

function setElementText(elementId, value){
        const subTotalElement = document.getElementById(elementId);
        subTotalElement.innerText = value;
}

function calculateSubtotal (){
        // increasing subtotal
        const currentPhoneTotal = getTextElementById('phone-total');
        const currentCaseTotal = getTextElementById('case-total');
        const currentSubTotal = currentPhoneTotal + currentCaseTotal;
        setElementText('sub-total',currentSubTotal);

        // calculate tax 
        const taxAmountString = (currentSubTotal * .1).toFixed(2);
        const taxAmount = parseFloat(taxAmountString);
        setElementText('tax-amount',taxAmount);

        // final total 
        const finalAmount = currentSubTotal - taxAmount;
        setElementText('final-total',finalAmount);
        

    }
'use strict';
import{discountcalculator} from './utilities/project.js';

document.querySelector('#button').onclick = function (){
    var amount = document.getElementById('AmountInput').value;
    var discount = document.getElementById('DiscountInput').value;
    console.log(amount);
    
    amount = Number(amount);
    discount = Number(discount);

    var message = '' ;
    var classContent = '';

    if(amount == '' || discount == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else if(amount < 0 || discount < 0){
        message = 'Values must be a positive number';
        classContent = 'alert alert-danger';
    }
    else{
        var result = discountcalculator(amount, discount);
        message = `Discounted amount : &#8377;${result} <br />`;
        classContent = 'alert alert-success';
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}

/* JavaScript Document */
var eval_client = 0.00;
var eval_pages = 0.00;
var eval_replace = 0.00;

var cost_hour_rate = 0.00;
var prnt_time = 0.00;

var package1 = "Professional";
var package2 = "Premium";
var package3 = "PremiumPLUS";

var hr_spent = 0.00;
var staff_cost = 0.00;
var phyical_HC = 0.00;
var annual_HC = 0.00;

var monthly_investment = 0.00;
var annual_saving = 0.00;

var cost_per_return = 4;
var total_prnt_return = 0;
var total_phyical_HC = 0.00;
var total_annual_HC = 0.00;


/*format Currency*/
function formatCurrency(num,returnFloat) {
	num = num.toString().replace(/\$|\,/g,'');

	if(isNaN(num))  num = '0.00';
	
	sign = (num == (num = Math.abs(num)));
	num = Math.floor(num*100+0.50000000001);
	cents = num%100;
	num = Math.floor(num/100).toString();
	
	if(cents < 10)  cents = '0' + cents;

	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
	if(!returnFloat) num = num.substring(0,num.length-(4*i+3))+','+ num.substring(num.length-(4*i+3));
	
	var currency = (((sign)?'':'-') + num + '.' + cents);
	if(returnFloat)  return parseFloat(currency);
	else return currency;
}

/* Format Interger */
function formatInt(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num))  num = '0';
	
	num = parseInt(num);
	
	return num;
}
/* Validation */
function validation(){
if(isNaN(document.roi_calculator.e_client.value)) 
   { 
     alert("Invalid data format.\n\nOnly numbers are allowed."); 
     document.roi_calculator.e_client.focus();
	 document.roi_calculator.e_client.value = 0;
	 reset_zero ();
	 return (false);
	
   } else if(isNaN(document.roi_calculator.e_pages.value)) 
   { 
     alert("Invalid data format.\n\nOnly numbers are allowed."); 
     document.roi_calculator.e_pages.focus();
	 document.roi_calculator.e_pages.value = 0;
	 reset_zero ();
	 return (false); 
   } else if(isNaN(document.roi_calculator.e_replace.value)) 
   { 
     alert("Invalid data format.\n\nOnly numbers are allowed."); 
     document.roi_calculator.e_replace.focus();
	 document.roi_calculator.e_replace.value = 0; 
     reset_zero ();
	 return (false); 
   } else if(isNaN(document.roi_calculator.e_cost_hour_rate.value)) 
   { 
     alert("Invalid data format.\n\nOnly numbers are allowed."); 
     document.roi_calculator.e_cost_hour_rate.focus();
	 document.roi_calculator.e_cost_hour_rate.value = 0; 
     reset_zero ();
	 return (false); 
   } else if(isNaN(document.roi_calculator.e_prnt_time.value)) 
   { 
     alert("Invalid data format.\n\nOnly numbers are allowed."); 
     document.roi_calculator.e_prnt_time.focus();
	 document.roi_calculator.e_prnt_time.value = 0; 
     reset_zero ();
	 return (false); 
   }
    total_roi_calc ();
  }



/* this function determines the package for the client */
function plan_type(){
	
	if (document.roi_calculator.e_client.value == '') document.roi_calculator.e_client.value = '';
	else document.roi_calculator.e_client.value = formatInt(document.roi_calculator.e_client.value, false);
	if (document.roi_calculator.e_client.value >= 1) {
		if (document.roi_calculator.e_client.value <= 150 ){
	document.roi_calculator.e_plan.value = package1;
	monthly_investment = 19.95;
	}
	else if (document.roi_calculator.e_client.value >= 151){
			if (document.roi_calculator.e_client.value <= 300 ){ 
		document.roi_calculator.e_plan.value = package2;
		monthly_investment = 29.95;
		
		}
	else if (document.roi_calculator.e_client.value >= 301){
			if (document.roi_calculator.e_client.value <= 9999 ){ 
				document.roi_calculator.e_plan.value = package3;
				monthly_investment = 54.95;
			}
		}
	}
}
}
/* pages cost */
function pages_included() {
	
	
	if (document.roi_calculator.e_pages.value == '') document.roi_calculator.e_pages.value = '';
	else document.roi_calculator.e_pages.value = formatInt(document.roi_calculator.e_pages.value, false);
}


function requested_copies() {
	
if (document.roi_calculator.e_replace.value == '') document.roi_calculator.e_replace.value = '';
else document.roi_calculator.e_replace.value = formatInt(document.roi_calculator.e_replace.value, false);
}



function hour_rate() {
	
	
if (document.roi_calculator.e_cost_hour_rate.value == '') document.roi_calculator.e_cost_hour_rate.value = '';
	else document.roi_calculator.e_cost_hour_rate.value = formatInt(document.roi_calculator.e_cost_hour_rate.value, false);
}
function print_time() {
if (document.roi_calculator.e_prnt_time.value == '') document.roi_calculator.e_prnt_time.value = '';
	else document.roi_calculator.e_prnt_time.value = formatInt(document.roi_calculator.e_prnt_time.value, false);
}
/* calculate the hours spent sending files */
function hours_spent () {
	
	eval_pages = document.roi_calculator.e_pages.value;
	eval_client = formatInt(document.roi_calculator.e_client.value);
	eval_replace = formatInt(document.roi_calculator.e_replace.value);
	prnt_time = formatInt(document.roi_calculator.e_prnt_time.value);
	total_prnt_return = eval_client + (eval_replace * 50);
	hr_spent = total_prnt_return *(prnt_time/60);
	document.roi_calculator.e_hr_spent.value = formatCurrency(hr_spent) + 'hrs';
	
}
function cost_staff_time(){
	cost_hour_rate = document.roi_calculator.e_cost_hour_rate.value;
	staff_cost = hr_spent * cost_hour_rate; 
	
	document.roi_calculator.e_cost_staff_time.value = '$' + formatCurrency(staff_cost);
	
}
function total_physical_cost(){
	eval_pages = document.roi_calculator.e_pages.value;
	cost_per_return = eval_pages * 0.15; 
	total_physical_HC = cost_per_return * total_prnt_return;
	document.roi_calculator.e_physical_cost.value = '$' + formatCurrency(total_physical_HC);
	
	
}
function annual_cost_copies(){
	
	total_annual_HC = staff_cost + total_physical_HC; 
	document.roi_calculator.e_annual_cost.value = '$' + formatCurrency(total_annual_HC);
}
function total_monthly_investment(){
	
	document.roi_calculator.e_monthly_investment.value = '$'+ monthly_investment;
	
}
function total_annual_savings(){
	
	annual_savings = total_annual_HC - (monthly_investment * 12);
	document.roi_calculator.e_annual_savings.value = '$' + formatCurrency(annual_savings);
}

function total_roi_calc (){
plan_type();
pages_included();
hour_rate();
print_time();
hours_spent ();
cost_staff_time();
total_physical_cost();	
annual_cost_copies();
total_monthly_investment();
total_annual_savings();
	
}

function reset_calc (){
document .roi_calculator.e_client.value = '250';
document .roi_calculator.e_pages.value = '25';
document .roi_calculator.e_replace.value = '2';
document .roi_calculator.e_cost_hour_rate.value = '40';	
document .roi_calculator.e_prnt_time.value = '7';
reset_zero ();
}

function reset_zero (){
document .roi_calculator.e_plan.value = '';
document .roi_calculator.e_hr_spent.value = '0.00';
document .roi_calculator.e_cost_staff_time.value = '0.00';
document .roi_calculator.e_physical_cost.value = '0.00';
document .roi_calculator.e_annual_cost.value = '0.00';
document .roi_calculator.e_monthly_investment.value = '0.00';
document .roi_calculator.e_annual_savings.value = '0.00';

}
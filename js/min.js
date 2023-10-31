const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "06.12.1992";
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)
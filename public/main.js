window.onload = function() {
	clock();  
	  function clock() {
	  var now = new Date();
	  var TwentyFourHour = now.getHours();
	  var hour = now.getHours();
	  var min = now.getMinutes();
	  var mid = 'PM';
	  if (min < 10) {
		min = "0" + min;
	  }
	  if (hour > 12) {
		hour = hour - 12;
	  }    
	  if(hour==0){ 
		hour=12;
	  }
	  if(TwentyFourHour < 12) {
		 mid = 'AM';
	  }     
	document.getElementById('currentTime').innerHTML = hour+':'+min+' '+mid ;
	  setTimeout(clock, 1000);
	  }
  }  

let count = 0;
console.time();
for (let i = 0;i < 1000000000;i++){count++}
console.timeEnd();

document.cookie = "loggedIn=false; expires=Tue, 06 Feb 2024 12:00:00 UTC; path=plus.mmltech.net"
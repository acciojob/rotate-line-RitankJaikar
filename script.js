//your JS code here. If required.
const line = document.querySelector("#line");
let i=0;

setInterval(() => {
	line.style.transform= `rotate(${i}deg)`;
	i+=2;
	if(i===360) {
		i=0;
	}
	//console.log(i);
}, 20);
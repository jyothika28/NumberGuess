var rand=Math.floor(Math.random()*100+8);
var count=1;
document.getElementById("submitguess").onclick=function(){

var userNum=document.getElementById("guessField").value;
if(userNum==rand){
	alert("Congratulations! The Number has Matched at "+count+"times");
}
else if (userNum>rand) {
	count++;
	alert("Try a smaller number");
}
else
{
	count++;
	alert("Try a larger number");
}
}

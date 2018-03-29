function startTime(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();// 在小于10的数字前加一个‘0’
	m=checkTime(m);
	s=checkTime(s);
	
	if (h >0 && h < 7)
	{
		document.getElementById('time').innerHTML=h+":"+m+":"+s + "   晚安";
	}
		else if(h >=7 && h <11)
		{
			document.getElementById('time').innerHTML=h+":"+m+":"+s + "   上午好";
		}
			else if(h >=11 && h <14)
			{
				document.getElementById('time').innerHTML=h+":"+m+":"+s + "   中午好";
				
			}
				else if(h >=14 && h <19)
				{
					document.getElementById('time').innerHTML=h+":"+m+":"+s + "   下午好";
				}
					else if(h >=19 && h <22)
					{
						document.getElementById('time').innerHTML=h+":"+m+":"+s + "   晚上好";
					}
						else
						{
							document.getElementById('time').innerHTML=h+":"+m+":"+s + "   早点休息";
						}
	t=setTimeout(function(){startTime()},500);
}
function checkTime(i){
	if (i<10){
		i="0" + i;
	}
	return i;
}

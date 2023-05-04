var pas8=812,tiempo8=150,estatinst=0;
function pasarpresent()
{if(pas8==812){var azarp = Math.random()*8;
redexceso1=Math.floor(azarp);
if(redexceso1==0){document.getElementById('presentacio').style.backgroundColor ='#6b1812';};
if(redexceso1==1){document.getElementById('presentacio').style.backgroundColor ='BLACK';};
if(redexceso1==2){document.getElementById('presentacio').style.backgroundColor  ='#576eee';};
if(redexceso1==3){document.getElementById('presentacio').style.backgroundColor  ='ORANGE';};
if(redexceso1==4){document.getElementById('presentacio').style.backgroundColor  ='GREEN';};
if(redexceso1==5){document.getElementById('presentacio').style.backgroundColor  ='GRAY';};
if(redexceso1==6){document.getElementById('presentacio').style.backgroundColor  ='#b9dedc';};
if(redexceso1==7){document.getElementById('presentacio').style.backgroundColor  ='#32dbb9';};};
if (pas8<10){pepito="instruccions/presen/b00"+pas8+".png"};
if (pas8>9&&pas8<100){pepito="instruccions/presen/b0"+pas8+".png"};
if (pas8>99){pepito="instruccions/presen/b"+pas8+".png"};
document.images.present.src = pepito
pas8++;
if(pas8>999){pas8=0};
if(pas8==891){pas8=900;tiempo8=80};
if(pas8==500){tiempo8=150};
if(pas8>816&&pas8<900){tiempo8+=-1};
if(estatinst==0){tempor8 = setTimeout("pasarpresent()", tiempo8)};
if(estatinst==1){clearTimeout(tempor8);};
}

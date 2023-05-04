var pas8=812,tiempo8=150;
function pasarpresent()
{if(pas8==812){var azarp = Math.random()*8;
redexceso1=Math.floor(azarp);
if(redexceso1==0){document.getElementById('presentacio').style.backgroundColor ='#6b1812';document.getElementById('divpregunta').style.backgroundColor ='#6b1812'};
if(redexceso1==1){document.getElementById('presentacio').style.backgroundColor ='BLACK';document.getElementById('divpregunta').style.backgroundColor ='BLACK'};
if(redexceso1==2){document.getElementById('presentacio').style.backgroundColor  ='#576eee';document.getElementById('divpregunta').style.backgroundColor ='#576eee'};
if(redexceso1==3){document.getElementById('presentacio').style.backgroundColor  ='ORANGE';document.getElementById('divpregunta').style.backgroundColor ='ORANGE'};
if(redexceso1==4){document.getElementById('presentacio').style.backgroundColor  ='GREEN';document.getElementById('divpregunta').style.backgroundColor ='GREEN'};
if(redexceso1==5){document.getElementById('presentacio').style.backgroundColor  ='GRAY';document.getElementById('divpregunta').style.backgroundColor ='GRAY'};
if(redexceso1==6){document.getElementById('presentacio').style.backgroundColor  ='#b9dedc';document.getElementById('divpregunta').style.backgroundColor ='#b9dedc'};
if(redexceso1==7){document.getElementById('presentacio').style.backgroundColor  ='#32dbb9';document.getElementById('divpregunta').style.backgroundColor ='#32dbb9';document.getElementById('divpreguntar').style.backgroundColor ='#32dbb9'};};
if (pas8<10){pepito="presen/b00"+pas8+".png"};
if(pas8==812){document.images.preguntag.src ="images/f1.jpg"};
if(pas8==902){document.images.preguntag.src ="images/f2.jpg"};
if(pas8==999){document.images.preguntag.src ="images/f3.jpg"};
if(pas8==90){document.images.preguntag.src ="images/f4.jpg"};
if(pas8==180){document.images.preguntag.src ="images/f5.jpg"};
if(pas8==270){document.images.preguntag.src ="images/f6.jpg"};
if(pas8==360){document.images.preguntag.src ="images/f7.jpg"};
if(pas8==450){document.images.preguntag.src ="images/f8.jpg"};
if(pas8==540){document.images.preguntag.src ="images/f9.jpg"};
if(pas8==630){document.images.preguntag.src ="images/f10.jpg"};
if(pas8==720){document.images.preguntag.src ="images/f11.jpg"};
if (pas8>9&&pas8<100){pepito="presen/b0"+pas8+".png"};
if (pas8>99){pepito="presen/b"+pas8+".png"};
document.images.present.src = pepito
pas8++;
if(pas8>999){pas8=0};
if(pas8==891){pas8=900;tiempo8=80};
if(pas8==500){tiempo8=150};
if(pas8>816&&pas8<900){tiempo8+=-1};
if(estat==0){tempor8 = setTimeout("pasarpresent()", tiempo8)};
if(estat==1){clearTimeout(tempor8);};
}

function indexpresent()
{if(pas8==812){var azarp = Math.random()*8;
redexceso=Math.floor(azarp);
if(redexceso==0){document.getElementById('presentacio').style.backgroundColor ='#6b1812'};
if(redexceso==1){document.getElementById('presentacio').style.backgroundColor ='BLACK'};
if(redexceso==2){document.getElementById('presentacio').style.backgroundColor  ='#576eee'};
if(redexceso==3){document.getElementById('presentacio').style.backgroundColor  ='ORANGE'};
if(redexceso==4){document.getElementById('presentacio').style.backgroundColor  ='GREEN'};
if(redexceso==5){document.getElementById('presentacio').style.backgroundColor  ='GRAY'};
if(redexceso==6){document.getElementById('presentacio').style.backgroundColor  ='#b9dedc'};
if(redexceso==7){document.getElementById('presentacio').style.backgroundColor  ='#32dbb9'};};
if (pas8<10){pepito="presen/b00"+pas8+".png"};
if (pas8>9&&pas8<100){pepito="presen/b0"+pas8+".png"};
if (pas8>99){pepito="presen/b"+pas8+".png"};
document.images.present.src = pepito;
pas8++;
if(pas8>999){pas8=0};
if(pas8==891){pas8=900;tiempo8=80};
if(pas8==500){tiempo=150};
if(pas8>816&&pas8<900){tiempo8+=-1};
tempor8 = setTimeout("indexpresent()", tiempo8);
}

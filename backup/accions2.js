var textPreg;
var respPreg;
var intePreg;
var tiemPreg;
var nivePreg;
var asigPreg;
var imagPreg;
var elecasigna=new Array;
var longasigna=new Array;
var nomasigna=new Array(6);
nomasigna[0]=new Array("angles","grec","llati","frances");
nomasigna[1]=new Array("biologia","mates","fisica_quimica","tecnologia","informatica");
nomasigna[2]=new Array("ed_fisica","plastica","musica","anatomia","dibuix");
nomasigna[3]=new Array("valencia","castella","literatura");
nomasigna[4]=new Array("historia","clasica");
nomasigna[5]=new Array("orientacio","filosofia","religio","etica");

function preguntas(lu){

for(i=0;i<6;i++){
  longasigna[i]= new Array;
  for(j=0;j<5;j++){
    longasigna[i][j]=0;
  }
};
elecasigna.length=0;
    // elección de la categoría.
if(lu==6||lu==8||lu==17||lu==28||lu==39||lu==46||lu==50||lu==57||lu==63||lu==74){assigna=3};
if(lu==4||lu==13||lu==15||lu==24||lu==35||lu==49||lu==51||lu==55||lu==62||lu==68){assigna=4};
if(lu==3||lu==14||lu==25||lu==34||lu==36||lu==47||lu==53||lu==64||lu==66||lu==70){assigna=1};
if(lu==11||lu==20||lu==22||lu==31||lu==42||lu==54||lu==56||lu==60||lu==67||lu==73){assigna=5};
if(lu==1||lu==10||lu==21||lu==32||lu==41||lu==45||lu==52||lu==58||lu==69||lu==71){assigna=2};
if(lu==7||lu==18||lu==27||lu==29||lu==38||lu==48||lu==59||lu==61||lu==65||lu==72){assigna=0};
if(lu==75){fazar(6);assigna=1*redexceso};
// elección del nivel
       // lectura de las asignaturas que corresponden a esa categoría.
            // lee la cantidad de asignaturas de la categoria
  			n=asignatura[assigna].length;
            pep=0;
            for (i=0;i<n;i++){
            if(asignatura[assigna][i]==1){elecasigna[pep]=nomasigna[assigna][i];pep++}};
        // contar cuantas preguntas hay que estén verificadas en todas esas categorías en cada nivel.
            pep=1*eval("ni"+turno)+1;
            n=elecasigna.length;
            for(i=0;i<pep;i++){
              for(j=0;j<n;j++){
                longasigna[i][j]=numpregs[elecasigna[j]][i];
              }
            };
        // Elegir pregunta con progresión geométrica.
        pep=0;
        for(i=0;i<6;i++){for(j=0;j<5;j++){pep+=longasigna[i][j]*2**i}};
        fazar(pep); pep=1*redexceso+1;
        pepet1=0; pepet2=0; pepito=0; s=0;
        for(i=0;i<6;i++){for(j=0;j<5;j++){s+=longasigna[i][j]*2**i;};if(pep<=s & pepito==0){pepito++;pepet1=i}}
        s=0;
        for(i=0;i<pepet1;i++){for(j=0;j<5;j++){s+=longasigna[i][j]*2**i;}}
        pep-=s; pep-=1;
        pepe=Math.floor(pep/2**pepet1)+1;
        s=0;pepito=0;
        for(j=0;j<5;j++){s+=longasigna[pepet1][j];if(pepe<=s & pepito==0){pepito++;pepet2=j}};
        s=0;
        for(j=0;j<pepet2;j++){s+=longasigna[pepet1][j]};
        pepe-=s;
        consultapreg(pepe,elecasigna[pepet2],pepet1);


}


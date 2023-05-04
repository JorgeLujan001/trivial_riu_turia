
async function comprovaini(){
        // comprobar que no hay otra partida con el mismo nombre
        dades = await doAjax();
        dades = JSON.parse(dades);
        if (dades == null){
          return 1;
        } else {
          alert("Ja existeix una partida amb eixe nom.");
          return 0;
        };
};
async function guardaini(){
          var params = { "nom": nom,
                         "contrasenya": contrasenya,
                         "jugadores": jugadores,
                         "marcatemp": marcatemp,
                         "ordinadors": ordinadors,
                         "ordi0": ordi[0],
                         "ordi1": ordi[1],
                         "ordi2": ordi[2],
                         "ordi3": ordi[3],
                         "ordi4": ordi[4],
                         "ordi5": ordi[5],
                         "ordinaconnectat": ordinaconnectat,
                         "ni1": ni1,
                         "ni2": ni2,
                         "ni3": ni3,
                         "ni4": ni4,
                         "ni5": ni5,
                         "ni6": ni6,
                         "turno": turno,
                         "asignatura": JSON.stringify(asignatura),
                         "chor": chor,
                         "cmin": cmin
                      };
          $.ajax({
                    	data:  params,
                    	url:   'creapart.php',
                    	dataType: 'html',
                    	type:  'post'
                });

};

async function guardaini2(){
          var params = { "nom": nom,
                         "contrasenya": contrasenya,
                         "ordi0": ordi[0],
                         "ordi1": ordi[1],
                         "ordi2": ordi[2],
                         "ordi3": ordi[3],
                         "ordi4": ordi[4],
                         "ordi5": ordi[5],
                         "ordinaconnectat": ordinaconnectat,
                         "turno": turno,
                         "guardada": guardada
                      };
          $.ajax({
                    	data:  params,
                    	url:   'creapart1.php',
                    	dataType: 'html',
                    	type:  'post'
                });

};



async function recuperaini(){
        // comprueba nombre y contraseña y recupera todas las variables iniciales
        dades = await doAjax();
        partida = JSON.parse(dades);
        if (partida == null){
            alert("No existeix cap partida amb eixe nom.");
            return 0;
        } else {
          if (partida["contrasenya"]==contrasenya){
              jugadores = partida["jugadores"];
              marcatemp = partida["marcatemp"];
              ordinadors = partida["ordinadors"];
              ordi[0] = partida["ordi0"];
              ordi[1] = partida["ordi1"];
              ordi[2] = partida["ordi2"];
              ordi[3] = partida["ordi3"];
              ordi[4] = partida["ordi4"];
              ordi[5] = partida["ordi5"];
              ordinaconnectat = partida["ordinaconnectat"];
              ni1 = partida["ni1"];
              ni2 = partida["ni2"];
              ni3 = partida["ni3"];
              ni4 = partida["ni4"];
              ni5 = partida["ni5"];
              ni6 = partida["ni6"];
              turno = partida["turno"];
              pos[0] = partida["pos0"];
              pos[1] = partida["pos1"];
              pos[2] = partida["pos2"];
              pos[3] = partida["pos3"];
              pos[4] = partida["pos4"];
              pos[5] = partida["pos5"];
              estat = partida["estat"];
              textPreg = partida["textpreg"];
              no_mostrarPreg = partida["no_mostrarpreg"];
              respPreg = partida["resppreg"];
              tiemPreg = partida["tiempreg"];
              intePreg = partida["intepreg"];
              nivePreg = partida["nivepreg"];
              asigPreg = partida["asigpreg"];
              imagPreg = partida["imagpreg"];
              grafica = partida["graficapreg"];
              assigna = partida["assigna"];
              azar = partida["azar"];
              dado = partida["dados"];
              fallo = partida["fallo"];
              posiciox = partida["posiciox"];
              posicioy = partida["posicioy"];
              lusdos = partida["lusdos"];
              ven = partida["ven"];
              gallo = JSON.parse(partida["gallons"]);
              asignatura = JSON.parse(partida["asignatura"]);
              vencedor = partida["vencedor"];
              return 1;
          } else{
              alert("Contrasenya incorrecta.");
              return 0;
          };
        };
};

async function guardacont(){
        // subir todas las variables
        var params = { "nom": nom,
                        "pos0": pos[0],
                        "pos1": pos[1],
                        "pos2": pos[2],
                        "pos3": pos[3],
                        "pos4": pos[4],
                        "pos5": pos[5],
                        "estat": estat,
                        "ordi0": ordi[0],
                        "ordi1": ordi[1],
                        "ordi2": ordi[2],
                        "ordi3": ordi[3],
                        "ordi4": ordi[4],
                        "ordi5": ordi[5],
                        "textpreg": textPreg,
                        "no_mostrarpreg": no_mostrarPreg,
                        "resppreg": respPreg,
                        "tiempreg": tiemPreg,
                        "intepreg": intePreg,
                        "nivepreg": nivePreg,
                        "asigpreg": asigPreg,
                        "imagpreg": imagPreg,
                        "graficapreg": grafica,
                        "assigna": assigna,
                        "azar": azar,
                        "dados": dado,
                        "fallo": fallo,
                        "posiciox": posiciox,
                        "posicioy": posicioy,
                        "lusdos": lusdos,
                        "ven": ven,
                        "gallons": JSON.stringify(gallo),
                        "guardada": guardada,
                        "vencedor": vencedor,
                        "turno": turno,
                        "chor": chor,
                        "cmin": cmin,
                        "csec2": csec2
                        };
          $.ajax({
                    	data:  params,
                    	url:   'guardapart.php',
                    	dataType: 'html',
                    	type:  'post'
                });
};

async function consultapart(){
        dades = await doAjax();
        partida = JSON.parse(dades);
        pos[0] = partida["pos0"];
        pos[1] = partida["pos1"];
        pos[2] = partida["pos2"];
        pos[3] = partida["pos3"];
        pos[4] = partida["pos4"];
        pos[5] = partida["pos5"];
        estat = partida["estat"];
        textPreg = partida["textpreg"];
        no_mostrarPreg = partida["no_mostrarpreg"];
        respPreg = partida["resppreg"];
        tiemPreg = partida["tiempreg"];
        intePreg = partida["intepreg"];
        nivePreg = partida["nivepreg"];
        asigPreg = partida["asigpreg"];
        imagPreg = partida["imagpreg"];
        grafica = partida["graficapreg"];
        assigna = partida["assigna"];
        azar = partida["azar"];
        dado = partida["dados"];
        fallo = partida["fallo"];
        posiciox = partida["posiciox"];
        posicioy = partida["posicioy"];
        lusdos = partida["lusdos"];
        ven = partida["ven"];
        gallo = JSON.parse(partida["gallons"]);
        guardada = partida["guardada"];
        vencedor = partida["vencedor"];
        turno = partida["turno"];
        chor = partida["chor"];
        cmin = partida["cmin"];
        csec2 = partida["csec2"];
};

async function consultatemp(){
        dades = await doAjax();
        partida = JSON.parse(dades);
        chor = partida["chor"];
        cmin = partida["cmin"];
        estat = partida["estat"];
};

async function consultaguardada(){
        dades = await doAjax();
        partida = JSON.parse(dades);
        guardada = partida["guardada"];
};

async function doAjax() {
        var params = { "nom": nom };
        return $.ajax({
            	data:  params,
            	url:   'partidas.php',
            	dataType: 'html',
            	type:  'post',
            	success:  function (response) {return response}
        });
};


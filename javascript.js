//https://www.haxball.com/headlesstoken <-- This is for token
    
    /* VARIABLES */

    Players_team = [[], [], []]

    player_on_game = [[], []]
    admins = []

    // CONSTANTS
    const nam = "3 vs 3. Gana sigue";
    const maxPlayers = 10;
    const public = true;
    const noPlayer = true;

    const scoreLimit = 3;
    const timeLimit = 3;
    

    const teamID = {Spectators: 0, Red: 1, Blue: 2};
    const idTeam = {0 : "spectators", 1 : "red", 2 : "blue"};

    const frasesGol = [
        'Un gol es una pase a la red',
        'GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL',
        '$776.420 la recaudación para esta nueva edición del superclásico del futbol argentino. MARTIIIIIIIIIIIN GOOOOOOOOOOOOOOOOOOOOOL',
        '¡HACELO, POR DIOS HACELO CUEVAS!',
        'Yo fallé y pagué, pero la pelota no se mancha',
        'Allí va Almirón, camino a la gloria, camino al gol, 5,4,3,2,1. Almirón por arribaaaaa. VIVA EL FÚTBOL, VIVA EL FÚTBOL, VIVA EL FÚTBOL... GOL GOL GOL'
    ]

    const frasesAutogol = [
        'Noo, es para el otro arco',
        'Al menos fue golazo...',
        'Para que te traje',
        'Le molesto la luz. No se puede jugar con la luz apagada principe',
        'Fabianni ta ta ta, Fabianii... NOOOOO Fabianni era el gol de la fecha' 
    ]
/*
        [],
        [],
        [],
*/
    
    const camis = [

        /* Paises */
        [180, 0x333A3C, 0xEFF6FC, 0xBBE3F4, 0xEFF6FC],
        [60, 0xFCFDFD, 0x2D3135],
        [220, 0x038434, 0xF8DD2E],
        [180, 0xFFFFFF, 0x2A4B9B],
        [180, 0x000000, 0x7A7DBB, 0xFFFFFF, 0x7A7DBB],
        [180, 0xFFFFFF, 0x283170, 0x000000, 0xB21917],
        [180, 0xd4ba91, 0x2D4E9D],
        [180, 0xe4b55b, 0xFFFFFF],
        [90, 0xFFFFFF, 0xE5231F, 0x6A150E],
        [90, 0xe52520, 0xE9F6FD, 0x8AD0E5],
        [90, 0xe52520, 0xFFFFFF, 0xE0E0E0],
        [90, 0xFFFFFF, 0xE52520, 0x9F1A16],
        [180, 0x253d91, 0xF8F8F8, 0xFFFFFF, 0xF8F8F8 ],
        [180, 0xFFFFFF, 0xE52520],
        [0, 0xFFFAFA, 0x000000, 0xFF0000, 0xFFA500],
        [90, 0x000000, 0xFF0000, 0xFFFFFF, 0x0000CC],
        [180, 0x000000, 0xFF7F00, 0xFF7F00, 0xFF7F00],
        [90, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0xFFFCFC, 0x090980],
        [],
    ]
      /*
Canada Bandeira - /colors red 90 000000 FF0000 FFFFFF FF0000 Parece la bandera de austria 0/10 
Japon: /colors blue 0 FFFCFC 090980 (parece la de francia) sin calfiicacion 

Italia
Juventus: /colors red 0 FFE600 000000 FFFFFF 000000 10/10
Napoli: /colors blue 0 FFFFFF 0099FF 9/10

Roma: /colors red 0 FFF700 940000 7/10

Inter: /colors blue 0 FFFFFF 001E94 000000 001E94 8,5/10

Milan: /colors red 0 FFFFFF E80000 000000 E80000 10/10

Genoa: /colors red 0 FFFFFF B00000 001E94 6/10 (le falta un azul mas oscuro) 
Inglaterra
Leicester City: /colors blue 90 FFFFFF 0027A6 7,5/10

Manchester United: /colors red 90 FFFFFF E80000 6/10

Manchester City: /colors blue 90 000000 00BEE3 5/10 (confusa)

Arsenal: /colors red 90 FFFFFF FF0000 1/10 Igual a la de m.united

Chelsea: /colors blue 90 FFFFFF 0039BF Igual a la de leicester city 
max-fb — Yesterday at 10:03 PM
Alemania
Bayern Munich: /colors red 00 FFFFFF FF0000 002EAD FF0000 (parece un tq a la del barcelona pero) 8,9/10

Borussia Dortmund: /colors red 00 000000 FFFF00 8/10 (le faltaria para mi un negro para diferenciar)


Bayer Leverkusen: /colors red 90 FFFFFF 000000 FF0000 000000 10/10

Schalke 04: /colors blue 90 FFFFFF 0037EB (igual a la del chelsea y leicester city) 
España
Barcelona: /colors red 90 F7FF00 000073 800000 000073 10/10

Real Madrid: /colors red 0 000000 FFFFFF (le agregaria algo amarillo) 8/10

Atletico Madrid: /colors red 00 0A0063 E80000 FFFAFA E80000 (parece la bandera de peru xd) sin calificacion

Athletic Club: /colors red 00 000000 E80000 FFFAFA E80000 es igual a la del atletico madrid 

Real Betis: /colors red 00 000000 00DE3B FFFAFA 00DE3B un verde un tq mas oscuro le daria 7,9/10

Espanyol: /colors blue 00 000000 FFFFFF 0016DB FFFFFF 8/10

Malaga: /colors blue 00 000000 FFFFFF 0083DB FFFFFF es casi lo mismo que el espanyol pero mas claro el azul

Sevilla: /colors red 00 000000 FFFFFF FF0000 FFFFFF Camiseta antigua por lo que veo

Valencia: /colors red 0 000000 FFFFFF es correcta pero le agregaria un toque de negro 
Argentina
Boca Juniors: /colors blue 90 FFFFFF 006BD4 E0F000 006BD4

River Plate: /colors red 60 000000 FFFFFF FA0000 FFFFFF

Racing Club: /colors blue 0 000000 0088FF FAFAFA 0088FF

Independiente: /colors red 60 FFFFFF FF0000 BD0000 FF0000

San Lorenzo: /colors blue 0 FFFFFF 00002E FF0000 00002E

Huracan: /colors red 0 EB0000 FFFFFF

Estudiantes: /colors red 0 000000 FF0000 FFFFFF FF0000

Gimnasia: /colors blue 90 FFFFFF FFFFFF 00159C FFFFFF

Rosario Central: /colors blue 0 FFFFFF 001CA6 FFF700 001CA6

Newell's Old Boys: /colors red 0 FFFFFF FF0000 000000

Argentinos Juniors: /colors red 120 000000 FF0000 FFFFFF FF0000

Velez: /colors blue 90 FFFFFF FFFFFF 000C59 FFFFFF

Banfield: /colors blue 0 000000 FFFFFF 00B035 FFFFFF
Lanus: /colors red 60 FFFFFF 590801

Belgrano: /colors blue 60 FFFFFF 00E5FF

Quilmes: /colors blue 60 02003D FFFFFF

Tigre: /colors blue 90 FFFFFF 0010EB FF0000 0010EB

Colon: /colors red 0 FFFFFF FF0000 000000

Union: /colors red 0 000000 FF0000 FFFFFF FF0000

Aldosivi: /colors blue 0 000000 F7FF00 006E0B F7FF00

Olimpo: /colors blue 0 000000 F7FF00

Defensa y Justicia: /colors blue 0 000000 F7FF00

Godoy Cruz: /colors blue 0 FFFFFF 002CD9

Sarmiento (J): /colors blue 0 FFFF00 00E636

Temperley: /colors blue 60 FFFFFF 00E5FF

Nueva Chicago: /colors blue 0 FFFFFF 00800D 000000 00800D

Arsenal de Sarandi: /colors red 0 FFFFFF D10000 007BD9 D10000

Atletico de Rafaela: /colors blue 0 000000 00D6DE FFFFFF 00D6DE

San Martin (SJ): /colors blue 0 FFFFFF 00800D 000000 00800D

Crucero del Norte: /colors blue 0 000000 EEFF00 FFA200

Talleres de Cordoba: /colors blue 0 FFFFFF FFFFFF 010019 FFFFFF

Talleres (RdE): /colors red 0 000000 FF0000 FFFFFF FF0000

All Boys: /colors red 0 000000 FFFFFF

Almagro: /colors blue 0 FFFFFF 003694 000000 003694

Atlanta: /colors blue 0 FFFFFF F0E000 003694 F0E000

Patronato: /colors red 0 FFFFFF F00000 000000 F00000

Atl. Tucuman: /colors blue 0 000000 00D6DE FFFFFF 00D6DE
Atl. Parana: /colors red 0 000000 FF0000 FFFFFF FF0000

Boca Unidos: /colors red 0 FFFFFF F0F000 FF0000 F0F000

Chacarita: /colors red 0 FFFFFF F00000 000000 F00000

Ferro: /colors blue 0 FFFFFF 00BA2C 009623

Instituto: /colors red 0 000000 FF0000 FFFFFF FF0000

Los Andes: /colors red 0 000000 FF0000 FFFFFF FF0000

Santamarina: /colors red 0 FFFFFF F0F000 000000 F0F000

Platense: /colors red 90 FFFFFF FFFFFF 210C00 FFFFFF

Estudiantes (BA): /colors red 0 FFFFFF FFFFFF 000000 FFFFFF

Alvarado (MdP): /colors red 60 000000 120082 FFFFFF 120082

        */


    /* STADIUM */

    const stadium = `{
        //Datos del mapa 
        "name" : "3 vs 3. Gana sigue",
    
        "width" : 600,
    
        "height" : 250,
    
        "spawnDistance" : 200,
    
        "cameraFollow" : "player",
    
        "kickOffReset " : "full",
    
        //Fondo
        "bg" : { "type" : "hockey", "cornerRadius" : 10, "kickOffRadius" : 10, "goalLine" : 500},
    
        "traits" : {
            
            "goalPost" : { "radius" : 6, "invMass" : 0, "bCoef" : 0.5 },
            "borders" : {"vis": true, "cGroup" : ["wall", "ball"], "cMask" : ["ball"], "color" : "FFFFFF", "bCoef" : 0.98},
            "bordersInv" : {"vis": false, "cGroup" : ["wall", "ball"], "cMask" : ["ball"], "color" : "FFFFFF", "bCoef" : 0.98},
            "kickOffBarrier" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["redKO", "blueKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
            "kickOffBlue" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["blueKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
            "kickOffRed" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["redKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
            "goalNet" : {"vis" : true, "bCoef" : 0.2, "cGroup" : ["all"], color: "DDDDDD"},
            "area" : {"vis" : true, "cGroup" : [""], "cMask" : [""], "color" : "CCCCCC"},
            "ballArea" : { "vis" : false, "bCoef" : 10, "cMask" : ["ball"] },
        },
    
        "vertexes" : [
    
        /* Corners */
             /* 0 */ {"x" : -500, "y" : -220, "trait" : "borders"}, //Top left
             /* 1 */ {"x" : -500, "y" : 220, "trait" : "borders"}, //Bottom left
             /* 2 */ {"x" : 500, "y" : -220, "trait" : "borders"}, //Top right
             /* 3 */ {"x" : 500, "y" : 220, "trait" : "borders"}, //Bottom right
    
        /* Middle */
            /* 4 */ {"x" : 0, "y" : 220, "trait" : "borders"}, //Middle bototm
            /* 5 */ {"x" : 0, "y" : -220, "trait" : "borders"}, //Middle top
    
        /* Middle kickoff */
            /* 6 */ {"x" : 0, "y" : 60, "trait" : "kickOffBarrier"},  //Middle little bottom
            /* 7 */ {"x" : 0, "y" : -60, "trait" : "kickOffBarrier"},  //Middle little top
        
        /* Goals vertexes */
            /* 8 */ {"x" : -500, "y" : -80},  //Goal top left 
            /* 9 */ {"x" : -500, "y" : 80},   //Goal bottom left
            /* 10 */ {"x" : 500, "y" : -80},  //Goal top right 
            /* 11 */ {"x" : 500, "y" : 80},   //Goal bottom right
            
        /* Net post right*/
            /* 12 */ {"x" : 540, "y" : 80},   //Net bottom right 
            /* 13 */ {"x" : 540, "y" : -80},   //Net top right 
    
        /* Net post left*/
            /* 14 */ {"x" : -540, "y" : 80},   //Net bottom right 
            /* 15 */ {"x" : -540, "y" : -80},   //Net top right 
    
        /* Left area */
            /* 16 */ {"x" : -420, "y" : -120, "trait" : "area"},   //Area top left 
            /* 17 */ {"x" : -420, "y" : 120, "trait" : "area"},   //Area bottom left 
            /* 18 */ {"x" : -500, "y" : 120, "trait" : "area"},   //Area bottom left 
            /* 19 */ {"x" : -500, "y" : -120, "trait" : "area"},   //Area top left 
            /* 20 */ {"x" : -420, "y" : 100, "trait" : "area"},   //Area bottom left 
            /* 21 */ {"x" : -420, "y" : -100, "trait" : "area"},   //Area bottom left 
        /* Right area */
            /* 22 */ {"x" : 420, "y" : -120, "trait" : "area"},   //Area top left 
            /* 23 */ {"x" : 420, "y" : 120, "trait" : "area"},   //Area bottom left 
            /* 24 */ {"x" : 500, "y" : 120, "trait" : "area"},   //Area bottom left 
            /* 25 */ {"x" : 500, "y" : -120, "trait" : "area"},   //Area top left 
            /* 26 */ {"x" : 420, "y" : 100, "trait" : "area"},   //Area bottom left 
            /* 27 */ {"x" : 420, "y" : -100, "trait" : "area"},   //Area bottom left 
    
        /* Right top corner */
            /* 28 */ {"x" : 500, "y" : -190, "trait" : "area"},   //Area bottom left 
            /* 29 */ {"x" : 470, "y" : -220, "trait" : "area"},   //Area bottom left 
        
        /* Right bottom corner */
            /* 30 */ {"x" : 500, "y" : 190, "trait" : "area"},   //Area bottom left 
            /* 31 */ {"x" : 470, "y" : 220, "trait" : "area"},   //Area bottom left 
    
        /* Left bottom corner */
            /* 32 */ {"x" : -500, "y" : 190, "trait" : "area"},   //Area bottom left 
            /* 33 */ {"x" : -470, "y" : 220, "trait" : "area"},   //Area bottom left 
    
        /* Right top corner */
            /* 34 */ {"x" : -500, "y" : -190, "trait" : "area"},   //Area bottom left 
            /* 35 */ {"x" : -470, "y" : -220, "trait" : "area"},   //Area bottom left 
    
        /* REINFORCMENT */
            /* 36 */ {"x" : -502, "y" : -220, "trait" : "area"},
            /* 37 */ {"x" : -502, "y" : -80, "trait" : "area"},
    
            
            /* 38 */ {"x" : -502, "y" : 220, "trait" : "area"},
            /* 39 */ {"x" : -502, "y" : 80, "trait" : "area"},
    
            /* 40 */ {"x" : -504, "y" : -220, "trait" : "area"},
            /* 41 */ {"x" : -504, "y" : -80, "trait" : "area"},
    
            /* 42 */ {"x" : -504, "y" : 220, "trait" : "area"},
            /* 43 */ {"x" : -504, "y" : 80, "trait" : "area"},
    
            /* 44 */ {"x" : -506, "y" : -220, "trait" : "area"},
            /* 45 */ {"x" : -506, "y" : -80, "trait" : "area"},
    
            /* 46 */ {"x" : -506, "y" : 220, "trait" : "area"},
            /* 47 */ {"x" : -506, "y" : 80, "trait" : "area"},
    
            /* 48 */ {"x" : 502, "y" : -220, "trait" : "area"},
            /* 49 */ {"x" : 502, "y" : -80, "trait" : "area"},
    
            
            /* 50 */ {"x" : 502, "y" : 220, "trait" : "area"},
            /* 51 */ {"x" : 502, "y" : 80, "trait" : "area"},
    
            /* 52 */ {"x" : 504, "y" : -220, "trait" : "area"},
            /* 53 */ {"x" : 504, "y" : -80, "trait" : "area"},
    
            /* 54 */ {"x" : 504, "y" : 220, "trait" : "area"},
            /* 55 */ {"x" : 504, "y" : 80, "trait" : "area"},
    
            /* 56 */ {"x" : 506, "y" : -220, "trait" : "area"},
            /* 57 */ {"x" : 506, "y" : -80, "trait" : "area"},
    
            /* 58 */ {"x" : 506, "y" : 220, "trait" : "area"},
            /* 59 */ {"x" : 506, "y" : 80, "trait" : "area"}
        ],
    
        "segments" : [
    
            {"v0" : 47, "v1" : 46, "trait" : "bordersInv"},
            {"v0" : 44, "v1" : 45, "trait" : "bordersInv"},
            {"v0" : 42, "v1" : 43, "trait" : "bordersInv"},
            {"v0" : 40, "v1" : 41, "trait" : "bordersInv"},
            {"v0" : 39, "v1" : 38, "trait" : "bordersInv"},
    
            {"v0" : 59, "v1" : 58, "trait" : "bordersInv"},
            {"v0" : 56, "v1" : 57, "trait" : "bordersInv"},
            {"v0" : 55, "v1" : 54, "trait" : "bordersInv"},
            {"v0" : 52, "v1" : 53, "trait" : "bordersInv"},
            {"v0" : 51, "v1" : 50, "trait" : "bordersInv"},
    
        /* top and bottom border */
            {"v0" : 0, "v1" : 2, "trait" : "borders"},
            {"v0" : 3, "v1" : 1, "trait" : "borders"},
            
        /* Left borders without goal*/
            {"v0" : 8, "v1" : 0, "trait" : "borders"},
            {"v0" : 9, "v1" : 1, "trait" : "borders"},
    
        /* Right borders without goal*/
            {"v0" : 10, "v1" : 2, "trait" : "borders"},
            {"v0" : 11, "v1" : 3, "trait" : "borders"},
    
        /* Middle borders kickouff*/
            {"v0" : 4, "v1" : 6, "trait" : "kickOffBarrier"},
            {"v0" : 5, "v1" : 7, "trait" : "kickOffBarrier"},
    
        /* middle kickoff */
            {"v0" : 6, "v1" : 7, "curve" : 180, "trait" : "kickOffBlue"},
            {"v0" : 6, "v1" : 7, "curve" : -180, "trait" : "kickOffRed"},
    
        /* Left net*/
            {"v0" : 10, "v1" : 11, "trait" : "area"},
            {"v0" : 10, "v1" : 13, "trait" : "goalNet"},
            {"v0" : 11, "v1" : 12, "trait" : "goalNet"},
            {"v0" : 12, "v1" : 13, "trait" : "goalNet"},
    
        /* Right net*/
            {"v0" : 9, "v1" : 8, "trait" : "area"},
            {"v0" : 8, "v1" : 15, "trait" : "goalNet"},
            {"v0" : 9, "v1" : 14, "trait" : "goalNet"},
            {"v0" : 14, "v1" : 15, "trait" : "goalNet"},
    
        /* Left area*/
            {"v0" : 19, "v1" : 16, "trait" : "area"},
            {"v0" : 18, "v1" : 17, "trait" : "area"},
            {"v0" : 16, "v1" : 17, "trait" : "area"},
            {"v0" : 20, "v1" : 21, "trait" : "area", "curve" : -90},
    
        /* Left area*/
            {"v0" : 25, "v1" : 22, "trait" : "area"},
            {"v0" : 24, "v1" : 23, "trait" : "area"},
            {"v0" : 22, "v1" : 23, "trait" : "area"},
            {"v0" : 26, "v1" : 27, "trait" : "area", "curve" : 90},
    
        /* Corner*/
            {"v0" : 28, "v1" : 29, "trait" : "area", "curve" : 90},
            {"v0" : 30, "v1" : 31, "trait" : "area", "curve" : -90},
            {"v0" : 32, "v1" : 33, "trait" : "area", "curve" : 90},
            {"v0" : 34, "v1" : 35, "trait" : "area", "curve" : -90},
        ],
    
        //Place where the goals are
        "goals" : [
            {"p0" : [-500, 70], "p1" : [-500, -80], "team" : "red"},
            {"p0" : [500, 70], "p1" : [500, -80], "team" : "blue"}
        ],
    
        "discs" : [
            /* Right disc*/
            {"pos" : [500, 80], "color" : "FFFFFF", "trait" : "goalPost"},
            {"pos" : [500, -80], "color" : "FFFFFF", "trait" : "goalPost"},
    
            /* Left disc*/
            {"pos" : [-500, 80], "color" : "FFFFFF", "trait" : "goalPost"},
            {"pos" : [-500, -80], "color" : "FFFFFF", "trait" : "goalPost"},
        ],
    
        "planes" : [
            { "normal" : [ 0, 1], "dist" : -225, "bCoef" : 0.98, "trait" : "ballArea"},
            { "normal" : [ 0, -1], "dist" : -225, "bCoef" : 0.98, "trait" : "ballArea"},
            { "normal" : [ 0, 1], "dist" : -255, "bCoef" : 0.98 }, // Top wall
            { "normal" : [ 0,-1], "dist" : -255, "bCoef" : 0.98 }, // Bottom wall
            { "normal" : [ 1, 0], "dist" : -540, "bCoef" : 0.98 }, // Left wall
            { "normal" : [-1, 0], "dist" : -540, "bCoef" : 0.98 } // Right wall
    
        ],
    
        "ballPhysics" : {
           "pos" : [0,0],
           // "gravity" : 
            "radius" : 6,
            "invMass" : 1.2,
            "color" : "FFFF00",
            "bCoef " : 0.2,
            "damping" : 0.99,
        },
    
        "playerPhysics" : {
            "bCoef" : 0.5,
            "invMass" : 0.5,
            "damping" : 0.95,
            "acceleration" : 0.13,
            "kickingAcceleration" : 0.08,
            "kickingDamping" : 0.93,
            "kickStrength" : 5
        },
    
        
    }
    
    /*
    
    Implementaciones
        Arco más pequeño
        Disco más pequeño a su vez
        Corners agregar
        Ponerle menos rebote a la pelota en las paredes
        Hacerla que rebote menos en los jugadores
        Si esta el coso de retroceso, sacarlo
        */`

    /* START SERVER */

    var room = HBInit({
        roomName: "3 vs 3. Gana sigue", 
        maxPlayers: maxPlayers, 
        public: public,
        noPlayer: noPlayer // Remove host player (recommended!)
    });

    room.setScoreLimit(scoreLimit);
    room.setTimeLimit(timeLimit);
    room.setCustomStadium(stadium)

    /* FUNCTIONS */

    function deleteIndex(arr, value) {
        var index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        if (arr.indexOf(value) != -1) {
            arr = []
        }
        return arr;
    }

    function updateTeamsEntrar(team, player) {
        Players_team[team].push(player)
    }

    function updateTeamsSalir(team, player) {
        switch (team) {
            case teamID["Spectators"]:
                Players_team[0] = deleteIndex(Players_team[0], player)
                break;
            case teamID["Red"]:
                Players_team[1] = deleteIndex(Players_team[1], player)
                break;
            case teamID["Blue"]:
                Players_team[2] = deleteIndex(Players_team[2], player)
                break;
        }
    }

    function updateTeamsChange(team, player) {
        if (Players_team[0].indexOf(player) != -1) {
            Players_team[0] = deleteIndex(Players_team[0], player)
        }
        if (Players_team[1].indexOf(player) != -1) {
            Players_team[1] = deleteIndex(Players_team[1], player)
        }
        if (Players_team[2].indexOf(player) != -1) {
            Players_team[2] = deleteIndex(Players_team[2], player)
        }

        Players_team[team].push(player)
        //console.log(team);
        //console.log(player)
    }
    
    function updateAdmins() { 
        // Get all players
        var players = room.getPlayerList();
        if ( players.length == 0 ) return; // No players left, do nothing.
        if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
        room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
    }
    
    //function getLastTouchOfTheBall() {
    //    const ballPosition = room.getBallPosition();
    //    updateTeams();
    //    for (var i = 0; i < players.length; i++) {
    //        if (players[i].position != null) {
    //            var distanceToBall = pointDistance(players[i].position, ballPosition);
    //            if (distanceToBall < triggerDistance) {
    //                !activePlay ? activePlay = true : null;
    //                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
    //                    lastPlayersTouched[1] = lastPlayersTouched[0];
    //                    lastPlayersTouched[0] = players[i];
    //                }
    //                lastTeamTouched = players[i].team;
    //            }
    //        }
    //    }
    //}

    function moveJug(team) {
        for (let i = 0; i < 4; i++) {
            room.setPlayerTeam(Players_team[0][i], team)
        }
    }

    function moveSpec(team_loser) {
        //Se ejecuta solo en el equipo que perdio
        for (let i = 0; i < player_on_game[team_loser - 1].length; i++) {
            //Si todavía esta en el equipo, se mueve a spec
            if (Players_team(team_loser).indexOf(player_on_game[team_loser - 1][i]) != -1) {
                room.setPlayerTeam(player_on_game[team_loser - 1][i], 0)
            }
        }
    }

    function enough_players() {
        if (room.getPlayerList().length <= 6 && Players_team[0] == 0) {return}
        else if (room.getPlayerList().length <= 6 && Players_team[0] != 0) {
            for(let i = 0; i < Players_team[0].length; i++)
            {
                if (Players_team[1].length > Players_team[2].length) {
                    room.setPlayerTeam(Players_team[0][i], 2)
                }
                else if (Players_team[2].length > Players_team[1].length) {
                    room.setPlayerTeam(Players_team[0][i], 1)
                }
                else {
                    room.setPlayerTeam(Players_team[0][i], 1)
                }
                
            }
            if (Players_team[1].length - Players_team[2].length >= 2) {
                room.setPlayerTeam(Players_team[1][i], 2)
            }
            else if(Players_team[2].length - Players_team[1].length >= 2) {
                room.setPlayerTeam(Players_team[2][i], 1)
            }
        }
        else if(room.getPlayerList().length >= 6 && Players_team[1] == 3 && Players_team[1] == 3) {return}
        else if(room.getPlayerList().length >= 6 && Players_team[1] != 3 && Players_team[1] == 3) {
            for(let i = Players_team[1]; i < 3; i++) {
                room.setPlayerTeam(Players_team[0][i], 1)
            }
        }
        else if(room.getPlayerList().length >= 6 && Players_team[1] == 3 && Players_team[1] != 3) {
            for(let i = Players_team[1]; i < 3; i++) {
                room.setPlayerTeam(Players_team[0][i], 1)
            }
        }
        else if(room.getPlayerList().length >= 6 && Players_team[1] != 3 && Players_team[1] != 3) {
            for(let i = Players_team[1]; i < 3; i++) {
                if (Players_team[1].length > Players_team[2].length) {
                    room.setPlayerTeam(Players_team[0][i], 2)
                }
                else if (Players_team[2].length > Players_team[1].length) {
                    room.setPlayerTeam(Players_team[0][i], 1)
                }
                else {
                    room.setPlayerTeam(Players_team[0][i], 1)
                }
            }
        }
    }

    room.onPlayerJoin = function(player) {
        updateAdmins();
        updateTeamsEntrar(player.team, player.id);
        enough_players()
        room.sendAnnouncement("Welcome " + player.name + " to the server.");
    }
    
    room.onPlayerLeave = function(player) {
        updateTeamsSalir(player.team, player.id);
        updateAdmins();
        enough_players();
        room.sendAnnouncement("Bye " + player.name + " from the server.");
    }

    room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
        updateAdmins();
        updateTeamsSalir(kickedPlayer.team, kickedPlayer.id);
        enough_players();
    }

    room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
        updateTeamsChange(changedPlayer.team, changedPlayer.id);
    }
    
    room.onPlayerChat = function(player, message) {
        if(message.charAt(0) == '!') {
            words = message.split(" ")
            switch (words[0].substring(1)) {
                case "t":
                case "teams":
                    if (Players_team[0].length == 0) {
                        room.sendAnnouncement("No hay jugadores espectadores", player.id);
                    }
                    else {
                        room.sendAnnouncement("Los jugadores specteando son:", player.id);
                        for (let i = 0; i < Players_team[0].length; i++) {
                            room.sendAnnouncement("    " + room.getPlayer(Players_team[0][i]).name, player.id);
                          }
                    }
                    if (Players_team[1].length == 0) {
                        room.sendAnnouncement("No hay jugadores en el equipo rojo", player.id);
                    }
                    else {
                        room.sendAnnouncement("Los jugadores del equipo rojo son:", player.id);
                        for (let i = 0; i < Players_team[1].length; i++) {
                            room.sendAnnouncement("    " + room.getPlayer(Players_team[1][i]).name, player.id);
                          }
                    }
                    if (Players_team[2].length == 0) {
                        room.sendAnnouncement("No hay jugadores en el equipo azul", player.id);
                    }
                    else {
                        room.sendAnnouncement("Los jugadores del equipo azul son:", player.id);
                        for (let i = 0; i < Players_team[2].length; i++) {
                            room.sendAnnouncement("    " + room.getPlayer(Players_team[2][i]).name, player.id);
                          }
                    }
                    console.log(Players_team)
                    break;
                case "admins":
                    room.sendAnnouncement("Los admins en el host son: ", player.id);
                    for (let i = 0; i < admins.length; i++) {
                        room.sendAnnouncement("    " + room.getPlayer(admins).name, player.id);
                      }
                      break;
                case "password":
                    if (admins.indexOf(player.id) != -1) {
                        words = message.split(" ")
                        if (words.length == 1) {
                            room.setPassword("")
                        }
                        else {
                            room.setPassword(words[1])
                        }
                        room.sendAnnouncement("Se aplicó correctamente la contraseña", player.id);
                    }
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
                    break;
                    /*
                case "state":
                    room.sendAnnouncement("The room is " + public + "\nThe room's password is " + room.password, player.id);
                    break;
                    */
                   /*
                case "rules":
                    room.sendAnnouncement("Acá se explican las reglas", player.id);
                    break;
                    */
                case "help":
                    room.sendAnnouncement("Acá se explican los comandos", player.id);
                    break;
                case "bb":
                    room.kickPlayer(player.id, "Bye. Hope you enjoy the host", false) //Echar a la persona
                    break;
                case "stats":
                    room.sendAnnouncement("Acá se muestran las stats propias", player.id);
                    break;
                case "stop":
                    if (admins.indexOf(player.id) != -1) {

                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }

                    room.sendAnnouncement("You've not the rights to execute this command", player.id)
                    break;
                case "pause":
                    if (admins.indexOf(player.id) != -1) {
                        room.pauseGame(true)
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
                    break;
                case "unpaused":
                    if (admins.indexOf(player.id) != -1) {
                        room.pauseGame(false)
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
                    break;
                case "start":
                    if (admins.indexOf(player.id) != -1) {
                        room.startGame()
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
                    
                    break;
                case "restart":
                case "rr":
                    if (admins.indexOf(player.id) != -1) {
                        room.stopGame()
                        room.startGame()
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
                    
                    break;
                case "rand":   
                    if (admins.indexOf(player.id) != -1) {

                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    } 
                      break;
                case "camis":
                case "camisetas":
                    if (admins.indexOf(player.id) != -1) {
                        if(words.length == 1 || words.length == 2) {
                            room.sendAnnouncement("Mostrar camisetas y explicar como tiene que escribir el comando", player.id);
                        } else if(words.length == 3) {
                            room.sendAnnouncement("Se aplica la camiseta seleccionada", player.id);
                        } else if (words.length >= 5) {
                            room.sendAnnouncement("Se aplica la camiseta seleccionada", player.id);
                        }
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    } 
                    break;
                default:
                    room.sendAnnouncement("Comando no existe", player.id);
            }
            return false
        }
        else {

        }
    }
    
    room.onGameStart = function(byPlayer) {
        player_on_game[0] = Players_team[1]
        player_on_game[1] = Players_team[2]
    }
    
    room.onPlayerBallKick = function(player) {

    }
    
    room.onTeamGoal = function(team) {
    
    }
    
    room.onTeamVictory = function(scores) {
        room.stopGame()
        if(scores.red > scores.blue) {
            room.sendAnnouncement("Congratulations to red for the victory")
            moveSpec(1)
            
        }
        else {
            room.sendAnnouncement("Congratulations to blue for the victory")
            moveSpec(2)
        }
        moveJug()
    }

    room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
        
        if (changedPlayer.admin == true) {
            admins.push(changedPlayer.id);
        }
        else {
            admins.shift(changedPlayer.id);
        }   
    }

    /*

        ICONOS

        🟦
        🟥
    */


        /*

    /colors red 180 333A3C EFF6FC BBE3F4 EFF6FC  ARGENTINA TITULAR  CALIFICACION 8/10 
ARGENTINA SUPLENTE: /colors blue 60 FCFDFD 2D3135  CALIFICACION :5/10 
BRASIL TITULAR /colors red 220 038434 F8DD2E 10/10 
BRASIL SUPLENTE /colors red 180 FFFFFF 2A4B9B 8/10 
ESTADOS UNIDOS TITULAR /colors red 180 000000 7A7DBB FFFFFF 7A7DBB 3/10 
ESTADOS UNIDOS SUPLENTE /colors red 180 FFFFFF 283170 000000 B21917 5/10 
ITALIA TITULAR /colors red 180 d4ba91 2D4E9D Igualita A la de brasil suplente 8/10 
ITALIA SUPLENTE /colors red 180 e4b55b FFFFFF 6/10 (pura blanca) 
TURQUIA TITULAR /colors red 90 FFFFFF E5231F 6A150E hermosa 10/10 
TURQUIA SUPLENTE /colors red 90 e52520 E9F6FD 8AD0E5 8/10 
POLONIA TITULAR /colors red 90 e52520 FFFFFF E0E0E0 7/10 
POLONIA SUPLENTE /colors red 90 FFFFFF E52520 9F1A16 10/10 
INGLATERRA TITULAR /colors red 180 253d91 F8F8F8 FFFFFF F8F8F8 7/10 (pura blanca) 
INGLATERRA SUPLENTE /colors red 180 FFFFFF E52520 (pura roja) 7/10 
Alemania - /colors red 0 FFFAFA 000000 FF0000 FFA500 Los colores de la bandera pero bue 6/10 
Holanda Bandeira - /colors red 90 000000 FF0000 FFFFFF 0000CC Parece La bandera de luxemburgo 4/10 
Holanda Camisa - /colors red 180 000000 FF7F00 FF7F00 FF7F00 10/10 
Canada Bandeira - /colors red 90 000000 FF0000 FFFFFF FF0000 Parece la bandera de austria 0/10 
Japon: /colors blue 0 FFFCFC 090980 (parece la de francia) sin calfiicacion 
Italia
Juventus: /colors red 0 FFE600 000000 FFFFFF 000000 10/10
Napoli: /colors blue 0 FFFFFF 0099FF 9/10

Roma: /colors red 0 FFF700 940000 7/10

Inter: /colors blue 0 FFFFFF 001E94 000000 001E94 8,5/10

Milan: /colors red 0 FFFFFF E80000 000000 E80000 10/10

Genoa: /colors red 0 FFFFFF B00000 001E94 6/10 (le falta un azul mas oscuro) 
Inglaterra
Leicester City: /colors blue 90 FFFFFF 0027A6 7,5/10

Manchester United: /colors red 90 FFFFFF E80000 6/10

Manchester City: /colors blue 90 000000 00BEE3 5/10 (confusa)

Arsenal: /colors red 90 FFFFFF FF0000 1/10 Igual a la de m.united

Chelsea: /colors blue 90 FFFFFF 0039BF Igual a la de leicester city 
max-fb — Yesterday at 10:03 PM
Alemania
Bayern Munich: /colors red 00 FFFFFF FF0000 002EAD FF0000 (parece un tq a la del barcelona pero) 8,9/10

Borussia Dortmund: /colors red 00 000000 FFFF00 8/10 (le faltaria para mi un negro para diferenciar)


Bayer Leverkusen: /colors red 90 FFFFFF 000000 FF0000 000000 10/10

Schalke 04: /colors blue 90 FFFFFF 0037EB (igual a la del chelsea y leicester city) 
España
Barcelona: /colors red 90 F7FF00 000073 800000 000073 10/10

Real Madrid: /colors red 0 000000 FFFFFF (le agregaria algo amarillo) 8/10

Atletico Madrid: /colors red 00 0A0063 E80000 FFFAFA E80000 (parece la bandera de peru xd) sin calificacion

Athletic Club: /colors red 00 000000 E80000 FFFAFA E80000 es igual a la del atletico madrid 

Real Betis: /colors red 00 000000 00DE3B FFFAFA 00DE3B un verde un tq mas oscuro le daria 7,9/10

Espanyol: /colors blue 00 000000 FFFFFF 0016DB FFFFFF 8/10

Malaga: /colors blue 00 000000 FFFFFF 0083DB FFFFFF es casi lo mismo que el espanyol pero mas claro el azul

Sevilla: /colors red 00 000000 FFFFFF FF0000 FFFFFF Camiseta antigua por lo que veo

Valencia: /colors red 0 000000 FFFFFF es correcta pero le agregaria un toque de negro 
Argentina
Boca Juniors: /colors blue 90 FFFFFF 006BD4 E0F000 006BD4

River Plate: /colors red 60 000000 FFFFFF FA0000 FFFFFF

Racing Club: /colors blue 0 000000 0088FF FAFAFA 0088FF

Independiente: /colors red 60 FFFFFF FF0000 BD0000 FF0000

San Lorenzo: /colors blue 0 FFFFFF 00002E FF0000 00002E

Huracan: /colors red 0 EB0000 FFFFFF

Estudiantes: /colors red 0 000000 FF0000 FFFFFF FF0000

Gimnasia: /colors blue 90 FFFFFF FFFFFF 00159C FFFFFF

Rosario Central: /colors blue 0 FFFFFF 001CA6 FFF700 001CA6

Newell's Old Boys: /colors red 0 FFFFFF FF0000 000000

Argentinos Juniors: /colors red 120 000000 FF0000 FFFFFF FF0000

Velez: /colors blue 90 FFFFFF FFFFFF 000C59 FFFFFF

Banfield: /colors blue 0 000000 FFFFFF 00B035 FFFFFF
Lanus: /colors red 60 FFFFFF 590801

Belgrano: /colors blue 60 FFFFFF 00E5FF

Quilmes: /colors blue 60 02003D FFFFFF

Tigre: /colors blue 90 FFFFFF 0010EB FF0000 0010EB

Colon: /colors red 0 FFFFFF FF0000 000000

Union: /colors red 0 000000 FF0000 FFFFFF FF0000

Aldosivi: /colors blue 0 000000 F7FF00 006E0B F7FF00

Olimpo: /colors blue 0 000000 F7FF00

Defensa y Justicia: /colors blue 0 000000 F7FF00

Godoy Cruz: /colors blue 0 FFFFFF 002CD9

Sarmiento (J): /colors blue 0 FFFF00 00E636

Temperley: /colors blue 60 FFFFFF 00E5FF

Nueva Chicago: /colors blue 0 FFFFFF 00800D 000000 00800D

Arsenal de Sarandi: /colors red 0 FFFFFF D10000 007BD9 D10000

Atletico de Rafaela: /colors blue 0 000000 00D6DE FFFFFF 00D6DE

San Martin (SJ): /colors blue 0 FFFFFF 00800D 000000 00800D

Crucero del Norte: /colors blue 0 000000 EEFF00 FFA200

Talleres de Cordoba: /colors blue 0 FFFFFF FFFFFF 010019 FFFFFF

Talleres (RdE): /colors red 0 000000 FF0000 FFFFFF FF0000

All Boys: /colors red 0 000000 FFFFFF

Almagro: /colors blue 0 FFFFFF 003694 000000 003694

Atlanta: /colors blue 0 FFFFFF F0E000 003694 F0E000

Patronato: /colors red 0 FFFFFF F00000 000000 F00000

Atl. Tucuman: /colors blue 0 000000 00D6DE FFFFFF 00D6DE
Atl. Parana: /colors red 0 000000 FF0000 FFFFFF FF0000

Boca Unidos: /colors red 0 FFFFFF F0F000 FF0000 F0F000

Chacarita: /colors red 0 FFFFFF F00000 000000 F00000

Ferro: /colors blue 0 FFFFFF 00BA2C 009623

Instituto: /colors red 0 000000 FF0000 FFFFFF FF0000

Los Andes: /colors red 0 000000 FF0000 FFFFFF FF0000

Santamarina: /colors red 0 FFFFFF F0F000 000000 F0F000

Platense: /colors red 90 FFFFFF FFFFFF 210C00 FFFFFF

Estudiantes (BA): /colors red 0 FFFFFF FFFFFF 000000 FFFFFF

Alvarado (MdP): /colors red 60 000000 120082 FFFFFF 120082

        */
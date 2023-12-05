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

        /* Equipos italianos */
        [0, 0xFFE600, 0x000000, 0XFFFFFF, 0x000000],
        [0, 0xFFFFFF, 0x0099FF],
        [0, 0xFFF700, 0x940000],
        [0, 0xFFFFFF, 0x001E94, 0x000000, 0x001E94],
        [0, 0xFFFFFF, 0xE80000, 0x000000, 0xE80000],
        [0, 0xFFFFFF, 0xB00000, 0x001E94],

        /* Eqiupos ingleses*/
        [90, 0xFFFFFF, 0x0027A6],
        [90, 0xFFFFFF, 0xE80000],
        [90, 0x000000, 0x00BEE3],
        [90, 0xFFFFFF, 0xFF0000],
        [90, 0xFFFFFF, 0x0039BF],

        /* Equipos alemanes */
        [0, 0xFFFFFF, 0xFF0000, 0x002EAD, 0xFF0000],
        [0, 0x000000, 0xFFFF00],
        [90, 0xFFFFFF, 0x000000, 0xFF0000, 0x000000],
        [90, 0xFFFFFF, 0x0037EB],

        /* Equipos españoles */
        [90, 0xF7FF00, 0x000073, 0x800000, 0x000073],
        [0, 0x000000, 0xFFFFFF],
        [0, 0x0A0063, 0xE80000, 0xFFFAFA, 0xE80000],
        [0, 0x000000, 0xE80000, 0xFFFAFA, 0xE80000],
        [0, 0x000000, 0x00DE3B, 0xFFFAFA, 0x00DE3B],
        [0, 0x000000, 0xFFFFFF, 0x0016DB, 0xFFFFFF],
        [0, 0x000000, 0xFFFFFF, 0x0083DB, 0xFFFFFF],
        [0, 0x000000, 0xFFFFFF, 0xFF0000, 0xFFFFFF],
        [0, 0x000000, 0xFFFFFF],

        /* Equipos argentinos */
        [90, 0xFFFFFF, 0x006BD4, 0xE0F000, 0x006BD4],
        [60, 0x000000, 0xFFFFFF, 0xFA0000, 0xFFFFFF],
        [0,0x000000, 0x0088FF, 0xFAFAFA, 0x0088FF],
        [60, 0xFFFFFF, 0xFF0000, 0xBD0000, 0xFF0000],
        [0, 0xFFFFFF, 0x00002E, 0xFF0000, 0x00002E],
        [0, 0xEB0000, 0xFFFFFF],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [90, 0xFFFFFF, 0xFFFFFF, 0x00159C, 0xFFFFFF],
        [0, 0xFFFFFF, 0x001CA6, 0xFFF700, 0x001CA6],
        [0, 0xFFFFFF, 0xFF0000, 0x000000],
        [120, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [90, 0xFFFFFF, 0xFFFFFF, 0x000C59, 0xFFFFFF],
        [0, 0x000000, 0xFFFFFF, 0x00B035, 0xFFFFFF],
        [60, 0xFFFFFF, 0x590801],
        [60, 0xFFFFFF, 0x00E5FF],
        [60, 0x02003D, 0xFFFFFF],
        [90, 0xFFFFFF, 0x0010EB, 0xFF0000, 0x0010EB],
        [0, 0xFFFFFF, 0xFF0000, 0x000000],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0x000000, 0xF7FF00, 0x006E0B, 0xF7FF00],
        [0, 0x000000, 0xF7FF00],
        [0, 0x000000, 0xF7FF00],
        [0, 0xFFFFFF, 0x002CD9],
        [0, 0xFFFF00, 0x00E636],
        [60, 0xFFFFFF, 0x00E5FF],
        [0, 0xFFFFFF, 0x00800D, 0x000000, 0x00800D],
        [0, 0xFFFFFF, 0xD10000, 0x007BD9, 0xD10000],
        [0, 0x000000, 0x00D6DE, 0xFFFFFF, 0x00D6DE],
        [0, 0xFFFFFF, 0x00800D, 0x000000, 0x00800D],
        [0, 0x000000, 0xEEFF00, 0xFFA200],
        [0, 0xFFFFFF, 0xFFFFFF, 0x010019, 0xFFFFFF],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0x000000, 0xFFFFFF],
        [0, 0xFFFFFF, 0x003694, 0x000000, 0x003694],
        [0, 0xFFFFFF, 0xF0E000, 0x003694, 0xF0E000],
        [0, 0xFFFFFF, 0xF00000, 0x000000, 0xF00000],
        [0, 0x000000, 0x00D6DE, 0xFFFFFF, 0x00D6DE],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0xFFFFFF, 0xF0F000, 0xFF0000, 0xF0F000],
        [0, 0xFFFFFF, 0xF00000, 0x000000, 0xF00000],
        [0, 0xFFFFFF, 0x00BA2C, 0x009623],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0x000000, 0xFF0000, 0xFFFFFF, 0xFF0000],
        [0, 0xFFFFFF, 0xF0F000, 0x000000, 0xF0F000],
        [90, 0xFFFFFF, 0xFFFFFF, 0x210C00, 0xFFFFFF],
        [0, 0xFFFFFF, 0xFFFFFF, 0x000000, 0xFFFFFF],
        [60, 0x000000, 0x120082, 0xFFFFFF, 0x120082]
    ]
    

    const indexCamis = new Map([
        ["argentina", 0],
        ["argentina-s", 1],
        ["brasil", 2],
        ["brasil-s", 3],
        ["estados unidos", 4],
        ["estados unidos-s", 5],
        ["italia", 6],
        ["italia-s", 7],
        ["turquia", 8],
        ["turquia-s", 9],
        ["polonia", 10],
        ["polonia-s", 11],
        ["inglaterra", 12],
        ["inglaterra-s", 13],
        ["alemania", 14],
        ["holanda-b", 15],
        ["holanda", 16],
        ["canada-b", 17],
        ["japon", 18],
        ["juventus", 19],
        ["napoli", 20],
        ["roma", 21],
        ["inter", 22],
        ["milan", 23],
        ["genoa", 24],
        ["leicester", 25],
        ["manchester united", 26],
        ["manchester city", 27],
        ["arsenal", 28],
        ["chelsea", 29],
        ["bayern munich", 30],
        ["borussia dortumund", 31],
        ["bayer leverkusen", 32],
        ["schalke 04", 33],
        ["barcelona", 34],
        ["real madrid", 35],
        ["atletico madrid", 36],
        ["athletic club", 37],
        ["real betis", 38],
        ["espanyol", 39],
        ["malaga", 40],
        ["sevilla", 41],
        ["valencia", 42],
        ["boca juniors", 43],
        ["river plate", 44],
        ["racing club", 45],
        ["independiente", 46],
        ["san lorenzo", 47],
        ["huracan", 48],
        ["estudiantes", 49],
        ["gimnasia", 50],
        ["rosario central", 51],
        ["newell's", 52],
        ["argentinos juniors", 53],
        ["velez", 54],
        ["banfield", 55],
        ["lanus", 56],
        ["belgrano", 57],
        ["quilmes", 58],
        ["tigre", 59],
        ["colon", 60],
        ["union", 61],
        ["aldosivi", 62],
        ["olimpo", 63],
        ["defensa y justicia", 64],
        ["godoy cruz", 65],
        ["sarmiento", 66],
        ["temperley", 67],
        ["nueva chicago", 68],
        ["arsenal", 69],
        ["atletico de rafaela", 70],
        ["san martin de san juan", 71],
        ["crucero del norte", 72],
        ["talleres de cordoba", 73],
        ["talleres de remedios de escalada", 74],
        ["all boys", 75],
        ["almagro", 76],
        ["atlanta", 77],
        ["patronato", 78],
        ["atletico tucuman", 79],
        ["atletico parana", 80],
        ["boca unidos", 81],
        ["chacarita", 82],
        ["ferro", 83],
        ["instituto", 84],
        ["los andes", 85],
        ["santamarina", 86],
        ["platense", 87],
        ["estudiantes de caseros", 88],
        ["alvarado", 89]
      ]);

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
            "invMass" : 1.5,
            "color" : "FFFF00",
            "bCoef " : 0.4,
            "damping" : 0.99,
        },
    
        "playerPhysics" : {
            "bCoef" : 0.5,
            "invMass" : 0.5,
            "damping" : 0.95,
            "acceleration" : 0.12,
            "kickingAcceleration" : 0.09,
            "kickingDamping" : 0.93,
            "kickStrength" : 4.87
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

    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }

    function is_letters_and_spaces(str){
        var regex = /^[a-zA-Z ]+$/;
        if(regex.test(str)){
            return true
        }else{
            return false
        }
    }

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
    //            var distanceToBamoll = pointDistance(players[i].position, ballPosition);
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
        for (let i = Players_team[team]; i < 3; i++) {
            room.setPlayerTeam(Players_team[0][i], team)
        }
    }

    function moveSpec(team_loser) {
        //Se ejecuta solo en el equipo que perdio
        for (let i = 0; i < player_on_game[team_loser - 1].length; i++) {
            //Si todavía esta en el equipo, se mueve a spec
            if (Players_team[team_loser].indexOf(player_on_game[team_loser - 1][i]) != -1) {
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
                        room.stopGame()
                    } 
                    else {
                        room.sendAnnouncement("You've not the rights to do that", player.id);
                    }
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
                            if (isNumeric(words[1]) == true && isNumeric(words[2]) == true) {
                                teamColorSeleccionado = parseInt(words[1])
                                team_sel = parseInt(words[2])
                                colors = camis[team_sel].slice(2)
                                room.setTeamColors(teamColorSeleccionado, camis[team_sel][0], camis[team_sel][1], colors)
                                console.log(camis)
                            }
                            else if (isNumeric(words[1]) == true && is_letters_and_spaces(words[2]) == true) {
                                teamColorSeleccionado = parseInt(words[1])
                                if (indexCamis.has(words[2]) == true) {
                                    team_sel = indexCamis.get(words[2])
                                    colors = camis[team_sel].slice(2)
                                    room.setTeamColors(teamColorSeleccionado, camis[team_sel][0], camis[team_sel][1], colors)
                                }
                                else {
                                    room.sendAnnouncement("There's no team with this particular name", player.id);
                                }

                            }
                            else {
                                room.sendAnnouncement("The arguments must be numbers", player.id);
                            }
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
            moveSpec(2)
            setTimeout(() => {
                moveJug(2)
              }, "2000");
            
        }
        else {
            room.sendAnnouncement("Congratulations to blue for the victory")
            moveSpec(1)
            setTimeout(() => {
                moveJug(1)
              }, "2000");
        }
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


        
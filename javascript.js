    //https://www.haxball.com/headlesstoken <-- This is for token
        
        /* VARIABLES */

        var Players_team = [[], [], []]

        var player_on_game = [[], []]
        var admins = []
        var player_afk = new Set()

        const muteTime = new Map();
        
        var playerKickBall = [0, 0]
        var teamKickBall = []

        var winStreak = 0
        var teamWinStreak = 0

        var golesPartido = []
        var rand, rand1;

        var tiempoEmpezadoJuego
        // CONSTANTS
        const nam = "3 vs 3. Gana sigue";
        const maxPlayers = 10;
        const public = false;
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
            'Allí va Almirón, camino a la gloria, camino al gol, 5,4,3,2,1. Almirón por arribaaaaa. VIVA EL FÚTBOL, VIVA EL FÚTBOL, VIVA EL FÚTBOL... GOL GOL GOL',
            'Se viene Silva, se viene Silva y esto es gol.... Silvaaa Goaaaaaaaaal!!! GOOOOOOAAAAAAAAAAL!!!'
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

        const camisIndex = new Map([
            [0,"ARGENTINA"],
            [1,"ARGENTINA-S"],
            [2,"BRASIL"],
            [3,"BRASIL-S"],
            [4,"ESTADOS UNIDOS"],
            [5,"ESTADOS UNIDOS-S"],
            [6,"ITALIA"],
            [7,"ITALIA-S"],
            [8,"TURQUIA"],
            [9,"TURQUIA-S"],
            [10,"POLONIA"],
            [11,"POLONIA-S"],
            [12,"INGLATERRA"],
            [13,"INGLATERRA-S"],
            [14,"ALEMANIA"],
            [15,"HOLANDA-B"],
            [16,"HOLANDA"],
            [17,"CANADA-B"],
            [18,"JAPON"],
            [19,"JUVENTUS"],
            [20,"NAPOLI"],
            [21,"ROMA"],
            [22,"INTER"],
            [23,"MILAN"],
            [24,"GENOA"],
            [25,"LEICESTER"],
            [26,"MANCHESTER UNITED"],
            [27,"MANCHESTER CITY"],
            [28,"ARSENAL"],
            [29,"CHELSEA"],
            [30,"BAYERN MUNICH"],
            [31,"BORUSSIA DORTUMUND"],
            [32,"BAYER LEVERKUSEN"],
            [33,"SCHALKE 04"],
            [34,"BARCELONA"],
            [35,"REAL MADRID"],
            [36,"ATLETICO MADRID"],
            [37,"ATHLETIC CLUB"],
            [38,"REAL BETIS"],
            [39,"ESPANYOL"],
            [40,"MALAGA"],
            [41,"SEVILLA"],
            [42,"VALENCIA"],
            [43,"BOCA JUNIORS"],
            [44,"RIVER PLATE"],
            [45,"RACING CLUB"],
            [46,"INDEPENDIENTE"],
            [47,"SAN LORENZO"],
            [48,"HURACAN"],
            [49,"ESTUDIANTES"],
            [50,"GIMNASIA"],
            [51,"ROSARIO CENTRAL"],
            [52,"NEWELL'S"],
            [53,"ARGENTINOS JUNIORS"],
            [54,"VELEZ"],
            [55,"BANFIELD"],
            [56,"LANUS"],
            [57,"BELGRANO"],
            [58,"QUILMES"],
            [59,"TIGRE"],
            [60,"COLON"],
            [61,"UNION"],
            [62,"ALDOSIVI"],
            [63,"OLIMPO"],
            [64,"DEFENSA Y JUSTICIA"],
            [65,"GODOY CRUZ"],
            [66,"SARMIENTO"],
            [67,"TEMPERLEY"],
            [68,"NUEVA CHICAGO"],
            [69,"ARSENAL"],
            [70,"ATLETICO DE RAFAELA"],
            [71,"SAN MARTIN DE SAN JUAN"],
            [72,"CRUCERO DEL NORTE"],
            [73,"TALLERES DE CORDOBA"],
            [74,"TALLERES DE REMEDIOS DE ESCALADA"],
            [75,"ALL BOYS"],
            [76,"ALMAGRO"],
            [77,"ATLANTA"],
            [78,"PATRONATO"],
            [79,"ATLETICO TUCUMAN"],
            [80,"ATLETICO PARANA"],
            [81,"BOCA UNIDOS"],
            [82,"CHACARITA"],
            [83,"FERRO"],
            [84,"INSTITUTO"],
            [85,"LOS ANDES"],
            [86,"SANTAMARINA"],
            [87,"PLATENSE"],
            [88,"ESTUDIANTES DE CASEROS"],
            [89,"ALVARADO"]
        ]);

        /* STYLE */

        const cor = [
            /* 0  */0xFA5646,
            /* 1  */0xFFC12F,
            /* 2  */0x7DFA89,
            /* 3  */0x05C5FF,
            /* 4  */0xFFFF17,
            /* 5  */0xCCCCCC,
            /* 6  */0xFFFFFF,
            /* 7  */0x6ECAFF,
            /* 8  */0xB0E0E6,
            /* 9  */0x800080,
            /* 10 */0xE5E4E2,
            /* 11 */0xffd700,
            /* 12 */0xd5d5d5,
            /* 13 */0x896728,
            /* 14 */0xD8BFD8,
            /* 15 */0xF0E68C,
            /* 16 */0xF0F8FF,
            /* 17 */0xF8F8FF,
            /* 18 */0xFFFAFA,
            /* 19 */0xFFF5EE,
            /* 20 */0xFFFAF0,
            /* 21 */0xF5F5F5,
            /* 22 */0xF5F5DC,
            /* 23 */0xFDF5E6,
            /* 24 */0xFFFFF0,
            /* 25 */0xFAF0E6,
            /* 26 */0xFFF8DC,
            /* 27 */0xFAEBD7,
            /* 28 */0xFFEBCD,
            /* 29 */0xFFE4C4,
            /* 30 */0xFFFFE0,
            /* 31 */0xFFFACD,
            /* 32 */0xFAFAD2,
            /* 33 */0xFFEFD5,
            /* 34 */0xFFDAB9,
            /* 35 */0xFFE4B5,
            /* 36 */0xEEE8AA,
            /* 37 */0x426AD6,
            /* 38 */0xff9966
        ]

        const indexCor = new Map([
            ["rojo", 0],
            ["naranja", 1],
            ["verde", 2],
            ["azul", 3],
            ["amarillo", 4],
            ["gris", 5],
            ["blanco",6],
            ["celeste", 7],
            ["Powderblue", 8],
            ["purpura", 9],
            ["platinum", 10],
            ["gold", 11],
            ["plata", 12],
            ["bronce", 13],
            ["cardo", 14],
            ["caquii", 15],
            ["aliceBlue", 16],
            ["ghostWhite", 17],
            ["snow", 18],
            ["seashell", 19],
            ["floralWhite", 20],
            ["whiteSmoke", 21],
            ["beige", 22],
            ["oldLace", 23],
            ["ivory", 24],
            ["linen",25],
            ["cornsilk", 26],
            ["antiqueWhite", 27],
            ["blanchedAlmond", 28],
            ["bisque", 29],
            ["lightYellow", 30],
            ["lemonChiffon", 31],
            ["lightGoldenrodYellow", 32],
            ["papayaWhip", 33],
            ["peachPuff", 34],
            ["moccasin", 35],
            ["paleGoldenrod", 36],
            ["azulescuro", 37],
            ["warn", 38]
        ]);

        const  styles = [
            "normal",
            "bold",
            "italic", 
            "small", 
            "small-bold", 
            "small-italic"
        ]

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
                "borders" : {"vis": true, "cGroup" : ["wall", "ball"], "cMask" : ["ball"], "color" : "FFFFFF", "bCoef" : 0.67},
                "bordersInv" : {"vis": false, "cGroup" : ["wall", "ball"], "cMask" : ["ball"], "color" : "FFFFFF", "bCoef" : 0.5},
                "kickOffBarrier" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["redKO", "blueKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
                "kickOffBlue" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["blueKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
                "kickOffRed" : { "vis" : true, "bCoef" : 0.1, "cGroup" : ["redKO"], "cMask" : ["red", "blue"], "color" : "FFFFFF"},
                "goalNet" : {"vis" : true, "bCoef" : 0.1, "cGroup" : ["all"], color: "DDDDDD"},
                "area" : {"vis" : true, "cGroup" : [""], "cMask" : [""], "color" : "CCCCCC"},
                "ballArea" : { "vis" : false, "bCoef" : 10, "cMask" : ["ball"] },
            },
        
            "vertexes" : [
        
            /* Corners */
                /* 0 */ {"x" : -550, "y" : -240, "trait" : "borders"}, //Top left
                /* 1 */ {"x" : -550, "y" : 240, "trait" : "borders"}, //Bottom left
                /* 2 */ {"x" : 550, "y" : -240, "trait" : "borders"}, //Top right
                /* 3 */ {"x" : 550, "y" : 240, "trait" : "borders"}, //Bottom right
        
            /* Middle */
                /* 4 */ {"x" : 0, "y" : 240, "trait" : "borders"}, //Middle bototm
                /* 5 */ {"x" : 0, "y" : -240, "trait" : "borders"}, //Middle top
        
            /* Middle kickoff */
                /* 6 */ {"x" : 0, "y" : 60, "trait" : "kickOffBarrier"},  //Middle little bottom
                /* 7 */ {"x" : 0, "y" : -60, "trait" : "kickOffBarrier"},  //Middle little top
            
            /* Goals vertexes */
                /* 8 */ {"x" : -550, "y" : -75},  //Goal top left 
                /* 9 */ {"x" : -550, "y" : 75},   //Goal bottom left
                /* 10 */ {"x" : 550, "y" : -75},  //Goal top right 
                /* 11 */ {"x" : 550, "y" : 75},   //Goal bottom right
                
            /* Net post right*/
                /* 12 */ {"x" : 590, "y" : 75},   //Net bottom right 
                /* 13 */ {"x" : 590, "y" : -75},   //Net top right 
        
            /* Net post left*/
                /* 14 */ {"x" : -590, "y" : 75},   //Net bottom right 
                /* 15 */ {"x" : -590, "y" : -75},   //Net top right 
        
            /* Left area */
                /* 16 */ {"x" : -470, "y" : -120, "trait" : "area"},   //Area top left 
                /* 17 */ {"x" : -470, "y" : 120, "trait" : "area"},   //Area bottom left 
                /* 18 */ {"x" : -550, "y" : 120, "trait" : "area"},   //Area bottom left 
                /* 19 */ {"x" : -550, "y" : -120, "trait" : "area"},   //Area top left 
                /* 20 */ {"x" : -470, "y" : 100, "trait" : "area"},   //Area bottom left 
                /* 21 */ {"x" : -470, "y" : -100, "trait" : "area"},   //Area bottom left 
            /* Right area */
                /* 22 */ {"x" : 470, "y" : -120, "trait" : "area"},   //Area top left 
                /* 23 */ {"x" : 470, "y" : 120, "trait" : "area"},   //Area bottom left 
                /* 24 */ {"x" : 550, "y" : 120, "trait" : "area"},   //Area bottom left 
                /* 25 */ {"x" : 550, "y" : -120, "trait" : "area"},   //Area top left 
                /* 26 */ {"x" : 470, "y" : 100, "trait" : "area"},   //Area bottom left 
                /* 27 */ {"x" : 470, "y" : -100, "trait" : "area"},   //Area bottom left 
        
            /* Right top corner */
                /* 28 */ {"x" : 550, "y" : -210, "trait" : "area"},   //Area bottom left 
                /* 29 */ {"x" : 520, "y" : -240, "trait" : "area"},   //Area bottom left 
            
            /* Right bottom corner */
                /* 30 */ {"x" : 550, "y" : 210, "trait" : "area"},   //Area bottom left 
                /* 31 */ {"x" : 520, "y" : 240, "trait" : "area"},   //Area bottom left 
        
            /* Left bottom corner */
                /* 32 */ {"x" : -550, "y" : 210, "trait" : "area"},   //Area bottom left 
                /* 33 */ {"x" : -520, "y" : 240, "trait" : "area"},   //Area bottom left 
        
            /* Right top corner */
                /* 34 */ {"x" : -550, "y" : -210, "trait" : "area"},   //Area bottom left 
                /* 35 */ {"x" : -520, "y" : -240, "trait" : "area"},   //Area bottom left 
        
            /* REINFORCMENT */
                /* 36 */ {"x" : -552, "y" : -240, "trait" : "area"},
                /* 37 */ {"x" : -552, "y" : -75, "trait" : "area"},
        
                
                /* 38 */ {"x" : -552, "y" : 240, "trait" : "area"},
                /* 39 */ {"x" : -552, "y" : 75, "trait" : "area"},
        
                /* 40 */ {"x" : -554, "y" : -240, "trait" : "area"},
                /* 41 */ {"x" : -554, "y" : -75, "trait" : "area"},
        
                /* 42 */ {"x" : -554, "y" : 240, "trait" : "area"},
                /* 43 */ {"x" : -554, "y" : 75, "trait" : "area"},
        
                /* 44 */ {"x" : -556, "y" : -240, "trait" : "area"},
                /* 45 */ {"x" : -556, "y" : -75, "trait" : "area"},
        
                /* 46 */ {"x" : -556, "y" : 240, "trait" : "area"},
                /* 47 */ {"x" : -556, "y" : 75, "trait" : "area"},
        
                /* 48 */ {"x" : 552, "y" : -240, "trait" : "area"},
                /* 49 */ {"x" : 552, "y" : -75, "trait" : "area"},
        
                
                /* 50 */ {"x" : 552, "y" : 240, "trait" : "area"},
                /* 51 */ {"x" : 552, "y" : 75, "trait" : "area"},
        
                /* 52 */ {"x" : 554, "y" : -240, "trait" : "area"},
                /* 53 */ {"x" : 554, "y" : -75, "trait" : "area"},
        
                /* 54 */ {"x" : 554, "y" : 240, "trait" : "area"},
                /* 55 */ {"x" : 554, "y" : 75, "trait" : "area"},
        
                /* 56 */ {"x" : 556, "y" : -240, "trait" : "area"},
                /* 57 */ {"x" : 556, "y" : -75, "trait" : "area"},
        
                /* 58 */ {"x" : 556, "y" : 240, "trait" : "area"},
                /* 59 */ {"x" : 556, "y" : 75, "trait" : "area"}
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
                {"p0" : [-550, 70], "p1" : [-550, -80], "team" : "red"},
                {"p0" : [550, 70], "p1" : [550, -80], "team" : "blue"}
            ],
        
            "discs" : [
                /* Right disc*/
                {"pos" : [550, 75], "color" : "FFFFFF", "trait" : "goalPost"},
                {"pos" : [550, -75], "color" : "FFFFFF", "trait" : "goalPost"},
        
                /* Left disc*/
                {"pos" : [-550, 75], "color" : "FFFFFF", "trait" : "goalPost"},
                {"pos" : [-550, -75], "color" : "FFFFFF", "trait" : "goalPost"},
            ],
        
            "planes" : [
                { "normal" : [ 0, 1], "dist" : -240, "bCoef" : 0.98, "trait" : "ballArea"},
                { "normal" : [ 0, -1], "dist" : -240, "bCoef" : 0.98, "trait" : "ballArea"},
                { "normal" : [ 0, 1], "dist" : -270, "bCoef" : 0.98 }, // Top wall
                { "normal" : [ 0,-1], "dist" : -270, "bCoef" : 0.98 }, // Bottom wall
                { "normal" : [ 1, 0], "dist" : -590, "bCoef" : 0.98 }, // Left wall
                { "normal" : [-1, 0], "dist" : -590, "bCoef" : 0.98 } // Right wall
        
            ],
        
            "ballPhysics" : {
                "radius" : 6,
                "invMass" : 1.56,
                "color" : "FFFF00",
                "bCoef " : 0.4,
                "damping" : 0.99
            },
        
        
            "playerPhysics" : {
                "bCoef" : 0.5,
                "invMass" : 0.5,
                "damping" : 0.95,
                "acceleration" : 0.12,
                "kickingAcceleration" : 0.095,
                "kickingDamping" : 0.93,
                "kickStrength" : 4.52
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
        room.setTeamsLock(true)

        /* FUNCTIONS */

        function addMinutes(date, minutes) {
            date.setMinutes(date.getMinutes() + minutes);
            return date;
        }

        function substrctMinutes(dateFromSubstract, dateToSubstract) {
            return diff = Math.abs(dateFromSubstract - dateToSubstract);
        }

        function convertMilisecondsToMinutes(miliseconds) {
            if (miliseconds < 1000) {
            return -1
            }
            miliseconds = miliseconds / 1000
            let time = [0,0]
            time[0] = Math.floor(miliseconds / 60)
            time[1] = Math.floor(miliseconds - time[0] * 60)
            
            return time
        }

        /* Return -1 if there's no matching id with this name*/
        function getPlayerIDbyName(name) {
            let playersList = room.getPlayerList()
            for (let i = 0; i < playersList.length; i++) {
                console.log(playersList[i].name.replace(/ /g, '_'))
                nombreJugador = playersList[i].name.replace(/ /g, '_')
                if (nombreJugador == name) {
                    return playersList[i].id
                }
            }
            return -1
            
        }

        function randomIntFromInterval(min, max) { // min and max included 
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

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
        }
        
        function updateAdmins() { 
            // Get all players
            var players = room.getPlayerList();
            if ( players.length == 0 ) return; // No players left, do nothing.
            if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
            room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
        }

        function moveJug(team) {
            for (let i = Players_team[team].length, j = 0; i < 3 && j < Players_team[0].length; i++, j++) {

                //Se evita hasta encontrar uno que no este afk
                while (player_afk.has(Players_team[0][j]) == true) {
                    if (j == Players_team[0].length - 1) {
                        break;
                    }
                    j += 1
                }

                //Si no es afk, se lo mueve
                if (player_afk.has(Players_team[0][j]) == true) {
                    break;
                } 
                room.setPlayerTeam(Players_team[0][j], team)
            }
        }

        /* Moves all the players that started the game to spectator */
        function moveSpec(team_loser) {
            //Se ejecuta solo en el equipo que perdio
            for (let i = 0; i < player_on_game[team_loser - 1].length; i++) {
                //Si fue una persona que estuvo en el equipo desde el comienzo moverlo, sino solo dejarlo
                if (Players_team[team_loser].indexOf(player_on_game[team_loser - 1][i]) != -1) {
                    room.setPlayerTeam(player_on_game[team_loser - 1][i], 0)
                }
            }
        }
        /* 
            Esta función debe de hacer esto
                Si los equipos están llenos, no hace nada
                Si los equipos falta jugadores, mover los jugadores al menor equipo
                    Al mover los jugadores, verificar que no sean los afks, sino gente qeu dice que esta
                
                Verificar que haya jugadores parejos en ambos sitios
                    Sino, mover 1 jugador hacia el otro equipo
        */
        function enough_players() {
            player_online = room.getPlayerList().length - player_afk.size
            player_playing = Players_team[1].length + Players_team[2].length

            if (player_playing == 6) {return} //Juegan la cant maxima de jugadores
            else if (player_online == player_playing) { return} //Estàn jugando todos los jugadores
            else { //La única opción que queda es que haya gente esperando por jugar en equipos con falta de jugadores

                console.log("La cant de jugadores online son: " + player_online)
                console.log("La cant de jugadores jugando son: " + player_playing)
                console.log("La cant de jugador en team 0:" + Players_team[0].length)
                console.log("La cant de jugador en team 1:" + Players_team[1].length)
                console.log("La cant de jugador en team 2:" + Players_team[2].length)

                if (Players_team[1].length >= 3 && Players_team[2].length >= 3) {
                    return
                } 
                else if (player_online <= 6) {
                    if (player_online - player_playing != 0) {
                        for(let i = 0; i < Players_team[0].length; i++) {
                            if (Players_team[1].length > Players_team[2].length) {
                                room.setPlayerTeam(Players_team[0][i], 2)
                            } else if (Players_team[2].length > Players_team[1].length) {
                                room.setPlayerTeam(Players_team[0][i], 1)
                            } else {
                                room.setPlayerTeam(Players_team[0][i], 1)
                            }
                        }
                        //Estan jugando todos los jugadores
                    } else {
                        return
                    }
                }
                //Hay más de 7 jugadores 
                else {
                    //Están llenos los equipos
                    if (Players_team[1].length == 3 && Players_team[2].length == 3) {
                        return 
                    }
                    //Faltan jugadores en el equipo 1
                    else if (Players_team[1].length != 3 && Players_team[2].length == 3) {
                        for (let i = Players_team[1].length, j = 0; i < 3; i++, j++) {
                            while (player_afk.has(Players_team[0][j]) == true) {
                                j += 1
                                if (j == Players_team[0].length - 1) {
                                    break;
                                }
                            }
                            if (j == Players_team[0].length - 1) {
                                break;
                            }
                            room.setPlayerTeam(Players_team[0][j], 1)
                        }
                    }
                    //Faltan jugadores en el equipo 2
                    else if (Players_team[1].length == 3 && Players_team[2].length != 3) {
                        for (let i = Players_team[2].length, j = 0; i < 3; i++, j++) {
                            while (player_afk.has(Players_team[0][j]) == true) {
                                j += 1
                                if (j == Players_team[0].length - 1) {
                                    break;
                                }
                            }
                            if (j == Players_team[0].length - 1) {
                                break;
                            }
                            room.setPlayerTeam(Players_team[0][j], 2)
                        }
                    }
                    //Faltan jugadores en ambos equipos
                    else if (Players_team[1].length != 3 && Players_team[2].length != 3) {
                        for (let i = player_playing, j = 0; i < 6; i++, j++) {
                            while (player_afk.has(Players_team[0][j]) == true) {
                                j += 1
                                if (j == Players_team[0].length - 1) {
                                    break;
                                }
                            }
                            if (j == Players_team[0].length - 1) {
                                break;
                            }
                            if (Players_team[1].length > Players_team[2].length) {
                                room.setPlayerTeam(Players_team[0][j], 2)
                            } else if (Players_team[2].length > Players_team[1].length){
                                room.setPlayerTeam(Players_team[0][j], 1)
                            } else {
                                room.setPlayerTeam(Players_team[0][j], 1)
                            }
                        }
                    }
                }
            } 
        }

        function updateAFK(player) {
            console.log(player.id)
            //Si no está jugando
            if (Players_team[0].indexOf(player.id) != -1 ) {
                if (player_afk.has(player.id) == true) {
                    player_afk.delete(player.id)
                    room.sendAnnouncement("YA NO ESTAS MÁS AFK", player.id, cor[indexCor.get("verde")], "bold");
                } else {
                    player_afk.add(player.id)
                    room.sendAnnouncement("ESTAS AFK", player.id, cor[indexCor.get("verde")], "bold");
                }
            //SI esta jugando no puede estar afk
            } else {
                room.sendAnnouncement("Al estar jugando, no podes estar afk", player.id, cor[indexCor.get("rojo")], "bold");
            }
        }

        function updateAFKsalir(player) {
            if (player_afk.has(player.id)) {
                player_afk.delete(player.id)
            }
        }

        room.onPlayerJoin = function(player) {
            updateAdmins();
            updateTeamsEntrar(player.team, player.id);
            enough_players()
            room.sendAnnouncement("Bienvenido " + player.name + ". Espero que disfrutes del server", null, cor[indexCor.get("celeste")], "bold");
            room.sendAnnouncement("Para ver los comandos, podes pulsar !help y te los mostrará", null, cor[indexCor.get("celeste")], "bold");
        }
        
        room.onPlayerLeave = function(player) {
            updateTeamsSalir(player.team, player.id);
            updateAdmins();
            updateAFKsalir(player)
            enough_players();
            room.sendAnnouncement("Hasta luego " + player.name + ". Espero que hayas disfrutado del server", null, cor[indexCor.get("celeste")], "bold");
        }

        room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
            updateAdmins();
            updateAFKsalir(kickedPlayer)
            updateTeamsSalir(kickedPlayer.team, kickedPlayer.id);
            enough_players();
        }

        room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
            if (player_afk.has(changedPlayer.id) == true) {
                room.setPlayerTeam(changedPlayer.id, 0)
                room.sendAnnouncement("EL JUGADOR ESTA AFK", null, cor[indexCor.get("rojo")], "bold");
            } 
            updateTeamsChange(changedPlayer.team, changedPlayer.id);
            enough_players();
        }
        
        room.onPlayerChat = function(player, message) {
            if(message.charAt(0) == '!') {
                words = message.split(" ")
                switch (words[0].substring(1)) {
                    /* Si hay más de una persona con el mismo nombre no funciona correctamente, al no poder distiguir su nombre entre ellos*/
                    case "msg":
                        if (words.length == 1) {
                            room.sendAnnouncement("!msg @(nombre de la persona) (texto para quien dirigirlo) ", words[-1], cor[indexCor.get("plata")], "bold");  
                        }
                        else if (words.length > 2) {
                            playerID = getPlayerIDbyName(words[1].substring(1))
                            if (playerID != -1 ) {
                                
                                if (player.team == 0) {
                                    room.sendAnnouncement("[👻]"+ player.name + ": " + words.slice(2).join(' '), player.id, cor[indexCor.get("plata")], "bold");  
                                    room.sendAnnouncement("[👻]"+ player.name + ": " + words.slice(2).join(' '), playerID, cor[indexCor.get("plata")], "bold");  
                                } else if (player.team == 1) {
                                    room.sendAnnouncement("[🔴]"+ player.name + ": " + words.slice(2).join(' '), player.id, cor[indexCor.get("plata")], "bold"); 
                                    room.sendAnnouncement("[🔴]" + player.name + ": " + words.slice(2).join(' '), playerID, cor[indexCor.get("plata")], "bold");  
                                } else {
                                    room.sendAnnouncement("[🔵]"+ player.name + ": " + words.slice(2).join(' '), player.id, cor[indexCor.get("plata")], "bold"); 
                                    room.sendAnnouncement("[🔵]" + player.name + ": " + words.slice(2).join(' '), playerID, cor[indexCor.get("plata")], "bold");  
                                }
                            }
                            else {
                                room.sendAnnouncement("Jugador no encontrado. Verifique haberlo escrito de la siguiente forma: @nombre del jugador", player.id, cor[indexCor.get("rojo")], "bold")
                            }
                        }
                        break;
                    case "t":
                        if (words.length == 1) {
                            room.sendAnnouncement("!t mensaje", words[-1], cor[indexCor.get("plata")], "bold");  
                        } else {
                            for (let i = 0; i < Players_team[player.team].length; i++) {
                                console.log(words.slice(1).join(' '))
                                room.sendAnnouncement("[🔴]"+ words.slice(1).join(' '), Players_team[player.team][i], cor[indexCor.get("plata")], "normal");  
                            }   
                        }
                        break;
                    case "teams":
                        if (Players_team[0].length == 0) {
                            room.sendAnnouncement("No hay jugadores espectadores", player.id, cor[indexCor.get("plata")], "bold");
                        }
                        else {
                            room.sendAnnouncement("Los jugadores specteando son:", player.id, cor[indexCor.get("plata")], "bold");
                            for (let i = 0; i < Players_team[0].length; i++) {
                                room.sendAnnouncement("    " + room.getPlayer(Players_team[0][i]).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
                            }
                        }
                        if (Players_team[1].length == 0) {
                            room.sendAnnouncement("No hay jugadores en el equipo rojo", player.id, cor[indexCor.get("plata")], "bold");
                        }
                        else {
                            room.sendAnnouncement("Los jugadores del equipo rojo son:", player.id, cor[indexCor.get("plata")], "bold");
                            for (let i = 0; i < Players_team[1].length; i++) {
                                room.sendAnnouncement("    " + room.getPlayer(Players_team[1][i]).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
                            }
                        }
                        if (Players_team[2].length == 0) {
                            room.sendAnnouncement("No hay jugadores en el equipo azul", player.id, cor[indexCor.get("plata")], "bold");
                        }
                        else {
                            room.sendAnnouncement("Los jugadores del equipo azul son:", player.id, cor[indexCor.get("plata")], "bold");
                            for (let i = 0; i < Players_team[2].length; i++) {
                                room.sendAnnouncement("    " + room.getPlayer(Players_team[2][i]).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
                            }
                        }
                        console.log(Players_team)
                        break;
                    case "admins":
                        room.sendAnnouncement("Los admins en el host son: ", player.id, cor[indexCor.get("plata")], "bold");
                        for (let i = 0; i < admins.length; i++) {
                            room.sendAnnouncement("    " + room.getPlayer(admins).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
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
                            room.sendAnnouncement("Se aplicó correctamente la contraseña", player.id, cor[indexCor.get("verde")], "bold");
                        }
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                    case "help":
                        room.sendAnnouncement("USUARIOS\n!help: muestra está interfaz gráfica\n!msg: manda mensaje a una persona\n!bb: salir del server\n!stats: muestra las estadisticas (en desarrollo)\n!admins: muestra los admins en el server\n!teams: muestra los nombres de las personas de cada equipo\n!t: chatear con el equipo", player.id, cor[indexCor.get("gold")], "bold");
                        room.sendAnnouncement("ADMINISTRADORES\n!password: cambia la contraseña de la sala\n!stop: para el partido\n!start: empieza una partida\n!pause: pausa la partida\n!unpaused: despausa la partida\n!camis: cambia las camisetas de los equipos\n!rr: reiniciar partida\n!rand: partida con personas aleatorias (en desarrollo)", player.id, cor[indexCor.get("gold")], "bold");
                        break;
                    case "bb":
                        room.kickPlayer(player.id, "Nv, espero que hayas disfrutado del server", false) //Echar a la persona
                        updateAFKsalir(player)
                        break;
                    case "stats":
                        room.sendAnnouncement("Acá se muestran las stats propias", player.id);
                        break;
                    case "stop":
                        if (admins.indexOf(player.id) != -1) {
                            room.stopGame()
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                    case "pause":
                        if (admins.indexOf(player.id) != -1) {
                            room.pauseGame(true)
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                    case "unpaused":
                        if (admins.indexOf(player.id) != -1) {
                            room.pauseGame(false)
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                    case "start":
                        if (admins.indexOf(player.id) != -1) {
                            room.startGame()
                        }  
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        
                        break;
                    case "restart":
                    case "rr":
                        if (admins.indexOf(player.id) != -1) {
                            room.stopGame()
                            room.startGame()
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        
                        break;
                    case "rand":   
                    /*
                        if (admins.indexOf(player.id) != -1) {
                            for (let i = 0; i < 2; i++) {
                                moveJug(i)
                            }
                            setTimeout(() => {
                                for (let i = 1; i <= 2; i++)
                                {
                                    for (let j = 0; j < 3; j++)
                                    {
                                        numero = randomIntFromInterval(0, Players_team[0].length -1)
                                        room.setPlayerTeam(Players_team[i][j], team)
                                    }
                                }
                            }, 5000);
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        } 
                        */
                        break;
                    case "camis":
                    case "camisetas":
                        if (admins.indexOf(player.id) != -1) {
                            if(words.length == 1 || words.length == 2) {
                                room.sendAnnouncement("Para ejecutar este comando usar:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold")
                                room.sendAnnouncement("!camisetas 1 (red) / 2 (blue) nombre de equipo", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold")
                                room.sendAnnouncement("SELECCIONES: ", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("argentina, argentina-s, brasil, brasil-s, estados unidos, estados unidos-s, italia, italia-s, turquia, turquia-s, polonia, polonia-s, inglaterra, inglaterra-s, alemania, holanda-b, holanda, canada-b, japon: ", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
                                room.sendAnnouncement("EQUIPOS ITALIANOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("juventus, napoli, roma, inter, milan, genoa", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
                                room.sendAnnouncement("EQUIPOS INGLESES:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("leicester, manchester united, manchester city, arsenal, chelsea", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
                                room.sendAnnouncement("EQUIPOS ALEMANES:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("juventus, napoli, roma, inter, milan, genoa", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("EQUIPOS ESPAÑOLES::", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("barcelona, real madrid, atletico madrid, athletic club, real betis, espanyol, malaga, sevilla, valencia", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
                                room.sendAnnouncement("EQUIPOS ARGENTINOS:", player.id, cor[indexCor.get("lightGoldenrodYellow")], "bold");
                                room.sendAnnouncement("boca juniors, river plate, racing club, independiente, san lorenzo, huracan, estudiantes, gimnasia, rosario central, newell's, argentinos juniors, velez, banfield, lanus, belgrano, quilmes, tigre, colon, union, aldosivi, olimpo, defensa y justicia, godoy cruz, sarmiento, temperley, nueva chicago, arsenal, atletico de rafaela, san martin de san juan, crucero del norte, talleres de cordoba, talleres de remedios de escalada, all boys, almagro, atlanta, patronato, atletico tucuman, atletico parana, boca unidos, chacarita, ferro, instituto, los andes, santamarina, platense, estudiantes de caseros, alvarado", player.id, cor[indexCor.get("lightGoldenrodYellow")], "normal");
                            } else if(words.length >= 3) {
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
                                        team_sel = indexCamis.get(words.slice(2).join(' '))
                                        colors = camis[team_sel].slice(2)
                                        room.setTeamColors(teamColorSeleccionado, camis[team_sel][0], camis[team_sel][1], colors)
                                    }
                                    else {
                                        room.sendAnnouncement("There's no team with this particular name", player.id, cor[indexCor.get("rojo")], "bold");
                                    }
                                }
                                else {
                                    room.sendAnnouncement("The arguments must be numbers", player.id, cor[indexCor.get("rojo")], "bold");
                                }
                                room.sendAnnouncement("Se aplica la camiseta seleccionada", player.id);
                            } else if (words.length >= 5) {
                                room.sendAnnouncement("Se aplica la camiseta seleccionada", player.id);
                            }
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        } 
                        break;
                    case "discord":
                        if (admins.indexOf(player.id) != -1) {
                            room.sendAnnouncement("             ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
                            room.sendAnnouncement("             ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
                            room.sendAnnouncement("             ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
                            room.sendAnnouncement("             💬 Discord Link: ➡ https://discord.gg/ ⬅", null, 0xF6FF43, 'bold');
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                    case "mute":
                        if (admins.indexOf(player.id) != -1) {
                            if (words.length == 1) {
                                room.sendAnnouncement("!mute @(jugador) tiempo (opcional)", player.id, cor[indexCor.get("plata")], "bold");
                            }
                            else if (words.length == 2) {
                                if (getPlayerIDbyName(words[1].substring(1)) != -1) {
                                    playerIDMuted = getPlayerIDbyName(words[1].substring(1))
                                    dateMuted = addMinutes(new Date(), 2)
                                    muteTime.set(playerIDMuted, dateMuted)
                                    room.sendAnnouncement("Jugador muteado el tiempo indicado", player.id, cor[indexCor.get("verde")], "bold");
                                }
                            }
                            else if (words.length == 3) {
                                if (getPlayerIDbyName(words[1].substring(1)) != -1 && isNaN(words[2]) == false) {
                                    playerIDMuted = getPlayerIDbyName(words[1].substring(1))
                                    dateMuted = addMinutes(new Date(), parseInt(words[2]))
                                    muteTime.set(playerIDMuted, dateMuted)
                                    room.sendAnnouncement("Jugador muteado el tiempo indicado", player.id, cor[indexCor.get("verde")], "bold");
                                } else {
                                    room.sendAnnouncement("Error en los argumentos", player.id, cor[indexCor.get("rojo")], "bold");
                                }
                            }
                            else {
                                room.sendAnnouncement("Demasiados argumentos", player.id, cor[indexCor.get("rojo")], "bold");
                            }
                        } 
                        else {
                            room.sendAnnouncement("No tenés los requisitos necesarios", player.id, cor[indexCor.get("rojo")], "bold");
                        }
                        break;
                        case "afk":
                            updateAFK(player)
                        break;
                        case "afks":
                            room.sendAnnouncement("Los jugadores afks son:", player.id, cor[indexCor.get("plata")], "bold");
                            player_afk.forEach (function(value) {
                                room.sendAnnouncement("    " + room.getPlayer(value).name, player.id, cor[indexCor.get("blanchedAlmond")], "bold");
                            })
                        break;
                    default:
                        room.sendAnnouncement("Comando no existe", player.id, cor[indexCor.get("rojo")], "bold");
                }
                return false
            }
            else {
                if (muteTime.has(player.id) == true) {
                    dateMutedPlayer = muteTime.get(player.id)
                    dateNow = new Date()
                    if (dateMutedPlayer > dateNow) {
                        room.sendAnnouncement("No podes mandar mensajes", player.id, cor[indexCor.get("rojo")], "bold");
                        return false
                    }
                }

                if (admins.indexOf(player.id) != -1) {
                    room.sendAnnouncement("[👮]" + player.name + ": " + message, null, cor[indexCor.get("Powderblue")], "normal");
                }
                else if (player.team == 1) {
                    room.sendAnnouncement("[🔴]" + player.name + ": " + message, null, cor[indexCor.get("floralWhite")], "normal");
                }
                else if (player.team == 2) {
                    room.sendAnnouncement("[🔵]" + player.name + ": " + message, null, cor[indexCor.get("floralWhite")], "normal");
                }
                else {
                    room.sendAnnouncement("[👻]" + player.name + ": " + message, null, cor[indexCor.get("gris")], "normal");
                }
            }
            return false;
        }

        room.onGameStart = function(byPlayer) {
            tiempoEmpezadoJuego = new Date()

            golesPartido = []

            for (let i = 0; i < Players_team[1].length; i++) {
                player_on_game[0][i] = Players_team[1][i]
            }

            for (let i = 0; i < Players_team[2].length; i++) {
                player_on_game[1][i] = Players_team[2][i]
            }

            rand = randomIntFromInterval(0, camis.length)
            colors = camis[rand].slice(2)
            room.setTeamColors(1, camis[rand][0], camis[rand][1], colors)
            do {
                rand1 = randomIntFromInterval(0, camis.length)
            } while (rand1 == rand);
            
            colors = camis[rand1].slice(2)
            room.setTeamColors(2, camis[rand1][0], camis[rand1][1], colors)

            room.sendAnnouncement("PARTIDA: " + camisIndex.get(rand) + " vs " + camisIndex.get(rand1), null, cor[indexCor.get("verde")], "bold")
        }


        room.onPlayerBallKick = function(player) {
            playerKickBall[1] = playerKickBall[0]
            playerKickBall[0] = player.id

            teamKickBall[1] = teamKickBall[0]
            teamKickBall[0] = player.team
        }
        
        room.onTeamGoal = function(team) {
            
            tiempoGol = convertMilisecondsToMinutes(substrctMinutes(new Date(), tiempoEmpezadoJuego))
            str = tiempoGol[0].toString() + ':' + tiempoGol[1].toString()
            if (teamKickBall[0] == team) {
                if (team == 1) {
                    room.sendAnnouncement(frasesGol[randomIntFromInterval(0, frasesGol.length - 1)], null, cor[indexCor.get("warn")], "bold")
                } else if (team == 2) {
                    room.sendAnnouncement(frasesGol[randomIntFromInterval(0, frasesGol.length - 1)], null, cor[indexCor.get("azulescuro")], "bold")
                }
            } else {
                if (team == 1) {
                    room.sendAnnouncement(frasesAutogol[randomIntFromInterval(0, frasesAutogol.length - 1)], null, cor[indexCor.get("warn")], "bold")
                } else if (team == 2) {
                    room.sendAnnouncement(frasesAutogol[randomIntFromInterval(0, frasesAutogol.length - 1)], null, cor[indexCor.get("azulescuro")], "bold")
                }
            }
            
            golesPartido.push(new Array())

            asistidor = playerKickBall.slice(1,2)
            console.log(asistidor)
            console.log(typeof(asistidor[0]))
            console.log("El asistidor es: " + asistidor)

            playerGolNamePrueba = playerKickBall.slice(0,1)
            playerGolName = room.getPlayer(playerGolNamePrueba).name
            if (teamKickBall[0] == teamKickBall[1]) {
                asisPlayerName = room.getPlayer(asistidor[0]).name

                golesPartido[golesPartido.length - 1].push(playerGolName)
                golesPartido[golesPartido.length - 1].push(asisPlayerName)
                golesPartido[golesPartido.length - 1].push(str)
                golesPartido[golesPartido.length - 1].push(team)
            } else {
                asisPlayerName = ''
                golesPartido[golesPartido.length - 1].push(playerGolName)
                golesPartido[golesPartido.length - 1].push(asisPlayerName)
                golesPartido[golesPartido.length - 1].push(str)
                golesPartido[golesPartido.length - 1].push(team)
            }
            console.log(golesPartido)
            playerKickBall[0] = 0
            playerKickBall[1] = 0
            teamKickBall[0] = 0
            teamKickBall[1] = 0
            
        }
        
        room.onTeamVictory = function(scores) {
            //Se muestran los goles del partido
            room.sendAnnouncement("Los goles del partido son presentados por Monomel:", null, cor[indexCor.get("aliceBlue")], "bold")
                for (let i = 0; i < golesPartido.length; i++) {
                    if (golesPartido[i][1] == '') {
                        console.log("Se ejecuta en el primero")
                        if (golesPartido[i][golesPartido[i].length - 1] == 1) {
                            room.sendAnnouncement(golesPartido[i][2] + ':' + golesPartido[i][0], null, cor[indexCor.get("azul")], "bold")
                        } else {
                            room.sendAnnouncement(golesPartido[i][2] + ':' + golesPartido[i][0], null, cor[indexCor.get("rojo")], "bold")
                        }
                    } else {
                        console.log("Se ejecuta en el segundo")
                        if (golesPartido[i][golesPartido[i].length - 1] == 1) {
                            console.log("Primera condicion")
                            room.sendAnnouncement(golesPartido[i][2] + ':' + golesPartido[i][0] + '(' + golesPartido[i][1] + ')', null, cor[indexCor.get("azul")], "bold")
                        } else {
                            console.log("Segunda condicion")
                            room.sendAnnouncement(golesPartido[i][2] + ':' + golesPartido[i][0] + '(' + golesPartido[i][1]  + ')', null, cor[indexCor.get("rojo")], "bold")
                        }
                    }
                }
                room.stopGame()
            
            let teamGanador = 0
            if (scores.red > scores.blue) {
                teamGanador = 1
            } else {
                teamGanador = 2
            }
            if(scores.red > scores.blue) {
                room.sendAnnouncement("FELICITACIONES A " + camisIndex.get(rand) + " POR HABER GANADO", null, cor[indexCor.get("aliceBlue")], "bold")
                moveSpec(2)
                setTimeout(() => {
                    moveJug(2)
                }, "4000");
                
            }
            else {
                room.sendAnnouncement("FELICITACIONES A " + camisIndex.get(rand1) + " POR HABER GANADO", null, cor[indexCor.get("aliceBlue")], "bold")
                moveSpec(1)
                setTimeout(() => {
                    moveJug(1)
                }, "4000");
            }

            //Se hace la parte de win streak
            if (teamGanador == teamWinStreak) {
                winStreak += 1
                if (teamGanador == 1) {
                    room.sendAnnouncement("El equipo rojo tiene una racha de partidos de " + winStreak, null, cor[indexCor.get("celeste")], "bold")
                } else {
                    room.sendAnnouncement("El equipo azul tiene una racha de partidos de " + winStreak, null, cor[indexCor.get("celeste")], "bold")
                }
            } else {
                if (teamGanador == 1) {
                    teamWinStreak = 1
                    winStreak = 1
                    room.sendAnnouncement("El equipo rojo tiene una racha de partidos de " + winStreak, null, cor[indexCor.get("celeste")], "bold")
                } else {
                    teamWinStreak = 2
                    winStreak = 1
                    room.sendAnnouncement("El equipo azul tiene una racha de partidos de " + winStreak, null, cor[indexCor.get("celeste")], "bold")
                }
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
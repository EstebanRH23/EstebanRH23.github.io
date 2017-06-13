
function setup(){
    //////////////////////////////////////////TABLERO CUADRICULADO/////////////////////////////////////////////
    //var tablero = new THREE.PlaneGeometry(100,100);
    escena = new THREE.Scene();
    var cubo_lado = 10;
    
    
    //var cubo = new THREE.BoxGeometry(cubo_lado,4,cubo_lado); //tamaño de cada uno de los cubos de la celda
    for (var j = 0; j < 8; j++) //obtengo ancho y largo del tablero para el for 
    {
        for (var i = 0; i < 8; i++)
        {
            var rnd = (Math.random() * 0.9) + 0.1 ;   
            var cuboMaterial = new THREE.MeshBasicMaterial({color:new THREE.Color(rnd-(rnd/2), rnd, rnd-(rnd/2))});
            //if (Math.abs(i-j) === 0 || Math.abs(i-j) === 2) {
            //THREE.ImageUtils.crossOrigin = '';
            //var textura = THREE.ImageUtils.loadTexture('dark_wood.jpeg');		
            //}
            //var cuboMaterial = new THREE.MeshBasicMaterial({map: textura});
            var cubo = new THREE.BoxGeometry(cubo_lado,4,cubo_lado);
            
            tablero = new THREE.Mesh(cubo, cuboMaterial);
            
            tablero.position.z = 50+(j*cubo_lado); //escalamiento, si quieres que tenga alguna separación o que esten aun mas juntos, se varia el factor que multiplica a i y j
            tablero.position.x = 50+(i*cubo_lado);
            tablero.position.y = 10;
            escena.add(tablero);
        }
    }
    
    
/*
    ///////////////////////////////////// ESTRELLA ///////////////////////////////////////
    var estrella = new THREE.Shape();
    var base_estrella= new THREE.Shape();
    
    estrella.moveTo(0,5);
    estrella.lineTo(1.2,0.8);
    estrella.lineTo(5,2);
    estrella.lineTo(2,-1);
    estrella.lineTo(3,-4);
    estrella.lineTo(0,-2);
    estrella.lineTo(-3,-4);
    estrella.lineTo(-2,-1);
    estrella.lineTo(-5,2);
    estrella.lineTo(-1,1);
    var estrellaforma = new THREE.ExtrudeGeometry( estrella,
                                           {amount: 5} );
    
    base_estrella.moveTo(0,0);
    base_estrella.lineTo(0,-3);
    base_estrella.lineTo(10,-3);
    base_estrella.lineTo(10,0);
    base_estrella.lineTo(8,0);
    base_estrella.lineTo(8,-2);
    base_estrella.lineTo(2,-2);
    base_estrella.lineTo(2,0);
    base_estrella.lineTo(0,0);
    
    var baseforma = new THREE.ExtrudeGeometry(base_estrella,
                                            {amount: 5} );
    baseforma.translate(-4.8,-20,-15);
    
    var cilindro = new THREE.CylinderGeometry(2,4.5,10,100);
    cilindro.translate(10,-12,0);
    cilindro.rotateY(Math.PI/2);
    
    var material = new THREE.MeshNormalMaterial();
    var mallaestrella = new THREE.Mesh( estrellaforma, material );
    var cil= new THREE.Mesh( cilindro, material);
    var basemalla= new THREE.Mesh (baseforma, material);
    
    var te = new THREE.Geometry();
    te.merge(mallaestrella.geometry, mallaestrella.matrix);
    te.merge(cil.geometry, cil.matrix);
    te.merge(basemalla.geometry,basemalla.matrix);
    
    var teMalla = new THREE.Mesh(te, material);
    teMalla.scale.set(0.40,0.40,0.40);
    teMalla.position.x = 60;
    teMalla.position.y = 22;
    teMalla.position.z = 70;
    escena.add(teMalla);
    
    
    ////////////////////////////////////// PEON //////////////////////////////////////
    var base = new THREE.CylinderGeometry(4, 4, 2);
    var tronco = new THREE.CylinderGeometry(2,3,4.5);
    var plato = new THREE.CylinderGeometry(3,3,0.5);
    var pedazo = new THREE.CylinderGeometry(2,2,1.5);
    var esfera = new THREE.SphereGeometry(2.5);
    
    base.translate(0,0,0);
    tronco.translate(0,3.25,0);
    plato.translate(0,5.75,0);
    pedazo.translate(0,6.75,0);
    esfera.translate(0,8.5,0);
    
    var baseMalla = new THREE.Mesh(base);
    var troncoMalla = new THREE.Mesh(tronco);
    var platoMalla = new THREE.Mesh(plato);
    var pedazoMalla = new THREE.Mesh(pedazo);
    var esferaMalla = new THREE.Mesh(esfera);
    
    var peonForma = new THREE.Geometry();
    peonForma.merge(baseMalla.geometry, baseMalla.matrix);
    peonForma.merge(troncoMalla.geometry, troncoMalla.matrix);
    peonForma.merge(platoMalla.geometry, platoMalla.matrix);
    peonForma.merge(pedazoMalla.geometry, pedazoMalla.matrix);
    peonForma.merge(esferaMalla.geometry, esferaMalla.matrix);
    
    var peonMalla = new THREE.Mesh(peonForma, new THREE.MeshNormalMaterial());
    peonMalla.position.x = 75;
    peonMalla.position.y = 13;
    peonMalla.position.z = 65;
    escena.add(peonMalla);
    
    
    ///////////////////////////////////////////CAMARAS/////////////////////////////////////////////////////
    var campoVision = 50;
    var relacionAspecto = window.innerWidth / window.innerHeight;
    var planoCercano = 10;
    var planoLejano = 300;
    
    
    
    //////////////////////////////////////// LUZ PUNTUAL //////////////////////////////////////////////////
    var luzPuntual = new THREE.PointLight(0xFFFFFF);
        luzPuntul.position.x = 200;
        luzPuntual.position.y = 100;
        luzPuntual.position.z = 100;
        escena.add(luzPuntual);
    
    */
    
    ////////////////////////////////////////// RENDER //////////////////////////////////////////////
    camara = new THREE.PerspectiveCamera();
    
    camara.position.x= 85;
    camara.position.y= 40;
    camara.position.z = 250;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerHeight*0.95, window.innerHeight*0.95);
    document.body.appendChild(renderer.domElement );
    renderer.render(escena,camara);
}

function loop(){
    requestAnimationFrame(loop);
    renderer.render(escena,camara);
}

var camara, escena, renderer, tablero;

setup();
loop();


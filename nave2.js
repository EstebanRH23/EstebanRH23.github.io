///////////////////////BASE////////////////////////////
var base=new THREE.PlaneGeometry(10,10);
var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(base,material);
malla.rotateX(Math.PI*5/3)
//////////////////////CUERPO/////////////////////////////
THREE.ImageUtils.crossOrigin = '';
var textura1 = THREE.ImageUtils.loadTexture('http://i.imgur.com/R8Dj7GJ.jpg' );
var materialp= new THREE.MeshBasicMaterial({map:textura1});
var textura2 = THREE.ImageUtils.loadTexture('http://i.imgur.com/a930Aof.jpg' );
var materialn= new THREE.MeshBasicMaterial({map:textura2});

var cuerpo = new THREE.CylinderGeometry( 2,2,10,32 );
var cuerpoMalla = new THREE.Mesh( cuerpo, materialp );
cuerpo.rotateX(Math.PI/2)
cuerpo.translate(-2.5,10,0)

var cuerpo2 = new THREE.CylinderGeometry( 2,2,10,32 );
var cuerpoMalla2 = new THREE.Mesh( cuerpo2, materialp );
cuerpo2.rotateX(Math.PI/2)
cuerpo2.translate(2.5,10,0)

var puente = new THREE.CylinderGeometry( 1.3,1.3,15,32 );
var puenteMalla = new THREE.Mesh( puente, materialp );
puente.rotateZ(Math.PI/2)
puente.translate(0,10,2)

var panel = new THREE.CylinderGeometry( 4,4,13,3,1,true,3.55,Math.PI*3/4);
var panelMalla = new THREE.Mesh( panel, materialp );
panel.rotateX(Math.PI/2)
panel.translate(-4,10,2)

var panel2 = new THREE.CylinderGeometry( 4,4,13,3,1,true,0.4,Math.PI*3/4);
var panel2Malla = new THREE.Mesh( panel2, materialp );
panel2.rotateX(Math.PI/2)
panel2.translate(4,10,2)

var nave2_p= new THREE.Geometry();
nave2_p.merge(cuerpoMalla.geometry,cuerpoMalla.matrix);
nave2_p.merge(cuerpoMalla2.geometry,cuerpoMalla2.matrix);
nave2_p.merge(puenteMalla.geometry,puenteMalla.matrix);
nave2_p.merge(panelMalla.geometry,panelMalla.matrix);
nave2_p.merge(panel2Malla.geometry,panel2Malla.matrix);

nave2_p.rotateY(Math.PI/2);
nave2_p.scale(0.5,0.5,0.5);
nave2_p.translate(-2,0,0);
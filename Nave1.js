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

var nave = new THREE.SphereGeometry( 5, 32, 32 );
var nave1 = new THREE.Mesh( nave, materialp );
nave.translate(0,10,0);
nave.scale(0.6,0.6,0.6);

var cilindro = new THREE.CylinderGeometry(1,1,10,70);
var cilindromalla = new THREE.Mesh(cilindro,materialp);
cilindro.translate(6,0,0);
cilindro.rotateZ(Math.PI/2);

var panel = new THREE.CylinderGeometry( 5,5,1, 6 );
var panelmalla = new THREE.Mesh( panel, materialp );
panel.translate(6,5.5,0);
panel.rotateZ(Math.PI/2);

var panel2 = new THREE.CylinderGeometry( 5,5,1,6);
var panelmalla2 = new THREE.Mesh( panel2, materialp );
panel2.translate(6,-5.5,0);
panel2.rotateZ(Math.PI/2);

var nave1_p= new THREE.Geometry();
nave1_p.merge(nave1.geometry,nave1.matrix);
nave1_p.merge(cilindromalla.geometry,cilindromalla.matrix);
nave1_p.merge(panelmalla.geometry,panelmalla.matrix);
nave1_p.merge(panelmalla2.geometry,panelmalla2.matrix);

nave1_p.rotateY(Math.PI/2);
nave1_p.scale(0.6,0.6,0.6);
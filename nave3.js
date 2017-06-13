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

var nave = new THREE.SphereGeometry( 3.5, 32, 32 );
var nave3 = new THREE.Mesh( nave, materialp );
nave.translate(0,10,0);
nave.scale(0.6,0.6,0.6);

var cilindro = new THREE.CylinderGeometry(1,1,10,70);
var cilindromalla = new THREE.Mesh(cilindro,materialp);
cilindro.translate(6,0,0);
cilindro.rotateZ(Math.PI/2);

var panel = new THREE.Shape();
panel.moveTo(0,0);
panel.lineTo(-10,30);
panel.lineTo(0,40);
panel.lineTo(20,40);
panel.lineTo(30,30);
panel.lineTo(20,0);
panel.lineTo(20,30);
panel.lineTo(0,30);
panel.lineTo(0,0)
var panelforma= new THREE.ExtrudeGeometry(panel, {amount:5});
var mallapanel= new THREE.Mesh(panelforma,materialp);
panelforma.rotateY(Math.PI/2)
panelforma.rotateX(Math.PI*3/2)
panelforma.scale(0.1,0.1,0.2)
panelforma.translate(4,7,7)

var panel2 = new THREE.Shape();
panel2.moveTo(0,0);
panel2.lineTo(-10,30);
panel2.lineTo(0,40);
panel2.lineTo(20,40);
panel2.lineTo(30,30);
panel2.lineTo(20,0);
panel2.lineTo(20,30);
panel2.lineTo(0,30);
panel2.lineTo(0,0)
var panelforma2= new THREE.ExtrudeGeometry(panel2, {amount:5});
var mallapanel2= new THREE.Mesh(panelforma2,materialp);
panelforma2.rotateY(Math.PI/2)
panelforma2.rotateX(Math.PI*3/2)
panelforma2.scale(0.1,0.1,0.2)
panelforma2.translate(-5,7,7)

var nave3_p= new THREE.Geometry();
nave3_p.merge(nave3.geometry,nave3.matrix);
nave3_p.merge(cilindromalla.geometry,cilindromalla.matrix);
nave3_p.merge(mallapanel.geometry,mallapanel.matrix);
nave3_p.merge(mallapanel2.geometry,mallapanel2.matrix);

nave3_p.rotateY(-Math.PI/2);
nave3_p.scale(0.8,0.8,0.8);
nave3_p.translate(1,0,0);
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

var cuerpo = new THREE.Shape();
cuerpo.moveTo(0,0);
cuerpo.lineTo(3,0);
cuerpo.lineTo(3,2);
cuerpo.lineTo(2,2);
cuerpo.lineTo(2,3.5);
cuerpo.lineTo(1,3.5);
cuerpo.lineTo(1,2);
cuerpo.lineTo(0,2);
cuerpo.lineTo(0,0);
var cuerpoforma= new THREE.ExtrudeGeometry(cuerpo, {amount:1});
var mallacuerpo= new THREE.Mesh(cuerpoforma,materialp);
cuerpoforma.translate(0,10,0);
cuerpoforma.scale(.5,.5,.5);
//////////////////////////CARA///////////////////////////////////////////
var cara = new THREE.Shape();
cara.moveTo(0,0);
cara.lineTo(4,0);
cara.lineTo(4,2);
cara.lineTo(3,3);
cara.lineTo(1,3);
cara.lineTo(0,2);
cara.lineTo(0,0);
var caraforma= new THREE.ExtrudeGeometry(cara, {amount:1});
var mallacara= new THREE.Mesh(caraforma,materialp);
caraforma.translate(-0.50,16,0);
caraforma.scale(.6,.6,.6);
var resp1 = new THREE.CylinderGeometry( 5, 5, 10, 70 );
var respforma1 = new THREE.Mesh( resp1, materialn );
resp1.translate(-5,40,-90);
resp1.rotateX(Math.PI/2)
resp1.scale(0.1,0.1,0.1);
var resp2 = new THREE.CylinderGeometry( 5, 5, 10, 70 );
var respforma2 = new THREE.Mesh( resp2, materialn );
resp2.translate(22,40,-90);
resp2.rotateX(Math.PI/2)
resp2.scale(0.1,0.1,0.1);
var visor = new THREE.Shape();
visor.moveTo(0,0);
visor.lineTo(50,0);
visor.lineTo(50,-20);
visor.lineTo(40,-20);
visor.lineTo(40,-15);
visor.lineTo(10,-15);
visor.lineTo(10,-20);
visor.lineTo(0,-20);
visor.lineTo(0,0);
var visorforma= new THREE.ExtrudeGeometry(visor, {amount:1});
var mallavisor= new THREE.Mesh(visorforma,materialp);
visorforma.translate(-17,160,40);
visorforma.scale(.11,.07,.1);

var brazo1=new THREE.BoxGeometry(5,5,15);
var brazoforma=new THREE.Mesh(brazo1,materialn);
brazo1.translate(-9,-17,9);
brazo1.rotateX(Math.PI*5/4);
brazo1.scale(0.3,0.3,0.3);

var brazo2=new THREE.BoxGeometry(5,5,15);
var brazo2forma=new THREE.Mesh(brazo2,materialn);
brazo2.translate(13,-17,9);
brazo2.rotateX(Math.PI*5/4);
brazo2.scale(0.3,0.3,0.3);

var storm= new THREE.Geometry();
storm.merge(mallacara.geometry,mallacara.matrix);
storm.merge(mallacuerpo.geometry,mallacuerpo.matrix);
storm.merge(brazoforma.geometry,brazoforma.matrix);
storm.merge(brazo2forma.geometry,brazo2forma.matrix);
storm.merge(respforma1.geometry,respforma1.matrix);
storm.merge(respforma2.geometry,respforma2.matrix);
storm.merge(mallavisor.geometry,mallavisor.matrix);

storm.rotateY(-Math.PI/2);
storm.scale(0.8,0.8,0.8);
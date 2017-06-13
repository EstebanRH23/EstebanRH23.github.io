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

var nave = new THREE.Shape();
nave.moveTo(0,0);
nave.lineTo(5,0);
nave.lineTo(7,20);
nave.lineTo(10,20);
nave.lineTo(12,0);
nave.lineTo(17,0);
nave.lineTo(20,18);
nave.lineTo(18,20);
nave.lineTo(20,25);
nave.lineTo(25,25);
nave.lineTo(27,30);
nave.lineTo(26,30);
nave.lineTo(28,32);
nave.lineTo(8.5,35);
nave.lineTo(-11,32);
nave.lineTo(-9,30);
nave.lineTo(-10,30);
nave.lineTo(-8,25);
nave.lineTo(-3,25);
nave.lineTo(-1,20);
nave.lineTo(-3,18);

var naveforma= new THREE.ExtrudeGeometry(nave, {amount:1});
var mallanave= new THREE.Mesh(naveforma,materialp);
naveforma.scale(0.25,0.25,0.25)
naveforma.rotateX(Math.PI*7/4)
naveforma.translate(-2,4,0)

var triangulo=new THREE.Shape()
triangulo.moveTo(0,0)
triangulo.lineTo(10,0);
triangulo.lineTo(5,10);
triangulo.lineTo(0,0);
var tforma= new THREE.ExtrudeGeometry(triangulo, {amount:1});
var mallatriangulo= new THREE.Mesh(tforma,materialp);
tforma.translate(-4,30,22);
tforma.scale(0.25,0.25,0.25);
tforma.rotateX(Math.PI*7/4);

var d = new THREE.OctahedronGeometry(1,0);
var dmalla = new THREE.Mesh(d,materialp);
d.translate(0.25,13,-2);
//cilindro.rotateZ(Math.PI/2);

var nave5= new THREE.Geometry();
nave5.merge(mallanave.geometry,mallanave.matrix);
nave5.merge(mallatriangulo.geometry,mallatriangulo.matrix);
nave5.merge(dmalla.geometry,dmalla.matrix);

nave5.rotateY(-Math.PI/2);
nave5.rotateZ(-Math.PI/4);
nave5.scale(0.7,0.7,0.7);
nave5.translate(-7,0,0);
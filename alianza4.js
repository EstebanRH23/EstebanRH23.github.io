var material = new THREE.MeshLambertMaterial();

var shape = new THREE.Shape();
shape.moveTo(0,0);
shape.lineTo(4,0);
shape.lineTo(3.5,4);
shape.lineTo(0.5,4);
shape.lineTo(0,0);

var extrudeSettings = {
	steps: 2,
	amount: 3,
	bevelEnabled: true,
	bevelThickness: 0.2,
	bevelSize: 0.2,
	bevelSegments: 1
};

var cuerpo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
var cuerpoMesh = new THREE.Mesh(cuerpo,material);

var cabeza = new THREE.SphereGeometry(1.7,4,32);
var cabezaMesh = new THREE.Mesh(cabeza,material);

var brazo1 = new THREE.BoxGeometry(0.5,1,4);
var brazo1Mesh = new THREE.Mesh(brazo1,material);

var brazo2 = new THREE.BoxGeometry(0.5,1,4);
var brazo2Mesh = new THREE.Mesh(brazo2,material);

var mano1 = new THREE.TorusGeometry(0.6,0.2,5,15,4.4);
var mano1Mesh = new THREE.Mesh(mano1,material);

var mano2 = new THREE.TorusGeometry(0.6,0.2,5,15,4.4);
var mano2Mesh = new THREE.Mesh(mano2,material);

var ojo1 = new THREE.SphereGeometry(0.3,32,32);
var ojo1Mesh = new THREE.Mesh(ojo1,material);

var ojo2 = new THREE.SphereGeometry(0.3,32,32);
var ojo2Mesh = new THREE.Mesh(ojo2,material);

var mango = new THREE.CylinderGeometry(0.4,0.4,2.5,60);
var mangoMesh = new THREE.Mesh(mango,material);

var laser = new THREE.CylinderGeometry(0.3,0.3,7,60);
var laserMesh = new THREE.Mesh(laser,material);

var cabello1 = new THREE.TorusGeometry(0.7,0.5,30,30,6.3);
var cabello1Mesh = new THREE.Mesh(cabello1,material);

var cabello2 = new THREE.TorusGeometry(0.7,0.5,30,30,6.3);
var cabello2Mesh = new THREE.Mesh(cabello2,material);

cabeza.rotateY(Math.PI/4);
cabeza.translate(2,5.5,1.5);

brazo1.rotateX(Math.PI*5/4);
brazo1.translate(0,2.5,3);

brazo2.rotateX(Math.PI*5/4);
brazo2.translate(4,2.5,3);

mano1.rotateX(-Math.PI/3);
mano1.rotateY(-Math.PI/10);
mano1.translate(0,0.7,5);

mano2.rotateX(-Math.PI/3);
mano2.rotateY(-Math.PI/10);
mano2.translate(4,0.7,5);

ojo1.translate(1.5,5.7,2.7);
ojo2.translate(2.5,5.7,2.7);

mango.translate(0,0.6,5);

laser.translate(0,5,5);

cabello1.rotateY(Math.PI/2);
cabello1.translate(0.5,6,1.5);

cabello2.rotateY(Math.PI/2);
cabello2.translate(3.5,6,1.5);

var leiaGeo = new THREE.Geometry();
leiaGeo.merge(cuerpoMesh.geometry,cuerpoMesh.matrix);
leiaGeo.merge(cabezaMesh.geometry,cabezaMesh.matrix);
leiaGeo.merge(brazo1Mesh.geometry,brazo1Mesh.matrix);
leiaGeo.merge(brazo2Mesh.geometry,brazo2Mesh.matrix);
leiaGeo.merge(mano1Mesh.geometry,mano1Mesh.matrix);
leiaGeo.merge(mano2Mesh.geometry,mano2Mesh.matrix);
leiaGeo.merge(ojo1Mesh.geometry,ojo1Mesh.matrix);
leiaGeo.merge(ojo2Mesh.geometry,ojo2Mesh.matrix);
leiaGeo.merge(mangoMesh.geometry,mangoMesh.matrix);
leiaGeo.merge(laserMesh.geometry,laserMesh.matrix);
leiaGeo.merge(cabello1Mesh.geometry,cabello1Mesh.matrix);
leiaGeo.merge(cabello2Mesh.geometry,cabello2Mesh.matrix);

leiaGeo.rotateY(Math.PI/2);
leiaGeo.translate(-1,0,2);
leiaGeo.scale(1.5,1.5,1.5);

/*var leia = new THREE.Mesh(leiaGeo,material);

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.x = -20;
iluminacion.position.y = 20;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -20;
iluminacion2.position.x = 20;
iluminacion2.position.z = 20;

var escena = new THREE.Scene();
escena.add(leia);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.rotateX(Math.PI/6);
escena.rotateY(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;
camara.position.x = 2;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);
renderer.render(escena,camara);*/

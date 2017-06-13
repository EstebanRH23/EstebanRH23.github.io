var material = new THREE.MeshLambertMaterial();

var cuerpo = new THREE.CylinderGeometry(3,3,7,32);
var cuerpoMesh = new THREE.Mesh(cuerpo,material);

var cabeza = new THREE.SphereGeometry(3,32,32);
var cabezaMesh = new THREE.Mesh(cabeza,material);

var pie_centro = new THREE.TetrahedronGeometry(2,0);
var pie_centroMesh = new THREE.Mesh(pie_centro,material);

var pie1 = new THREE.TetrahedronGeometry(2,0);
var pie1Mesh = new THREE.Mesh(pie1,material);

var pie2 = new THREE.TetrahedronGeometry(2,0);
var pie2Mesh = new THREE.Mesh(pie2,material)

var brazo1 = new THREE.BoxGeometry(1,2,8);
var brazo1Mesh = new THREE.Mesh(brazo1,material);

var brazo2 = new THREE.BoxGeometry(1,2,8);
var brazo2Mesh = new THREE.Mesh(brazo2,material);

var ojo = new THREE.CylinderGeometry(0.2,0.2,1,32);
var ojoMesh = new THREE.Mesh(ojo,material);

cuerpo.rotateX(-Math.PI/20);

cabeza.translate(0,3.5,-0.55);

pie_centro.rotateY(Math.PI/4);
pie_centro.rotateX(Math.PI/1.6);
pie_centro.translate(0,-5.5,1.5);

pie1.rotateY(Math.PI/4);
pie1.rotateX(Math.PI/1.6);
pie1.translate(-3.8,-5.5,0);

pie2.rotateY(Math.PI/4);
pie2.rotateX(Math.PI/1.6);
pie2.translate(3.8,-5.5,0);

brazo1.rotateX(Math.PI/1.8);
brazo1.rotateZ(-.1);
brazo1.translate(-3.5,-1,0);

brazo2.rotateX(Math.PI/1.8);
brazo2.rotateZ(.1);
brazo2.translate(3.5,-1,0);

ojo.rotateX(7*Math.PI/20);
ojo.translate(1,5.5,1.7);

var r2d2Geo = new THREE.Geometry();
r2d2Geo.merge(cuerpoMesh.geometry,cuerpoMesh.matrix);
r2d2Geo.merge(cabezaMesh.geometry,cabezaMesh.matrix);
r2d2Geo.merge(pie_centroMesh.geometry,pie_centroMesh.matrix);
r2d2Geo.merge(pie1Mesh.geometry,pie1Mesh.matrix);
r2d2Geo.merge(pie2Mesh.geometry,pie2Mesh.matrix);
r2d2Geo.merge(brazo1Mesh.geometry,brazo1Mesh.matrix);
r2d2Geo.merge(brazo2Mesh.geometry,brazo2Mesh.matrix);
r2d2Geo.merge(ojoMesh.geometry,ojoMesh.matrix);

r2d2Geo.rotateY(Math.PI/2);

r2d2Geo.scale(0.9,0.9,0.9);

/*var r2d2 = new THREE.Mesh(r2d2Geo,material);

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.x = -20;
iluminacion.position.y = 20;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -20;
iluminacion2.position.x = 20;
iluminacion2.position.z = 20;

var escena = new THREE.Scene();
escena.add(r2d2);
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

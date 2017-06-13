var material = new THREE.MeshLambertMaterial();

var cuerpo = new THREE.SphereGeometry(4,32,32);
var cuerpoMesh = new THREE.Mesh(cuerpo,material);

var cabeza = new THREE.SphereGeometry(2,32,32,0,6.3,0,1.7);
var cabezaMesh = new THREE.Mesh(cabeza,material);

var antena = new THREE.CylinderGeometry(0.1,0.1,1.5,32);
var antenaMesh = new THREE.Mesh(antena,material);

var ojo = new THREE.CylinderGeometry(0.5,0.5,1,32);
var ojoMesh = new THREE.Mesh(ojo,material);

cabeza.translate(0,4.5,0);

antena.translate(0,7,-1);

ojo.rotateX(Math.PI/2);
ojo.translate(0,5.5,1.5);

var bb8Geo = new THREE.Geometry();
bb8Geo.merge(cuerpoMesh.geometry,cuerpoMesh.matrix);
bb8Geo.merge(cabezaMesh.geometry,cabezaMesh.matrix);
bb8Geo.merge(antenaMesh.geometry,antenaMesh.matrix);
bb8Geo.merge(ojoMesh.geometry,ojoMesh.matrix);

bb8Geo.rotateY(Math.PI/2);

/*var bb8 = new THREE.Mesh(bb8Geo,material);

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.x = -20;
iluminacion.position.y = 20;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -20;
iluminacion2.position.x = 20;
iluminacion2.position.z = 20;

var escena = new THREE.Scene();
escena.add(bb8);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.rotateX(Math.PI/6);
escena.rotateY(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;
camara.position.x = 0;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderer.domElement);
renderer.render(escena,camara);*/
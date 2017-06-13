var material = new THREE.MeshLambertMaterial({color:0xFFFF99});

var shape = new THREE.Shape();
shape.moveTo(0,0);
shape.lineTo(0.5,0);
shape.lineTo(5,1);
shape.lineTo(9.5,0);
shape.lineTo(10,0);
shape.lineTo(6,1.5);
shape.lineTo(10,3);
shape.lineTo(9.5,3);
shape.lineTo(5,2);
shape.lineTo(0.5,3);
shape.lineTo(0,3);
shape.lineTo(4,1.5);
shape.lineTo(0,0);

var extrudeSettings = {
	steps: 2,
	amount: 3.5,
	bevelEnabled: true,
	bevelThickness: 0.2,
	bevelSize: 0.2,
	bevelSegments: 1
};

var x = new THREE.ExtrudeGeometry(shape, extrudeSettings);
var xMesh = new THREE.Mesh(x,material);

var cuerpo2 = new THREE.BoxGeometry(2,2.5,5);
var cuerpo2Mesh = new THREE.Mesh(cuerpo2,material);

var punta = new THREE.CylinderGeometry(0.8,1.2,7,5);
var puntaMesh = new THREE.Mesh(punta,material);

var punta2 = new THREE.CylinderGeometry(0.01,0.85,2,5);
var punta2Mesh = new THREE.Mesh(punta2,material);

var motor1 = new THREE.CylinderGeometry(0.6,0.6,4,50);
var motor1Mesh = new THREE.Mesh(motor1,material);

var motor2 = new THREE.CylinderGeometry(0.6,0.6,4,50);
var motor2Mesh = new THREE.Mesh(motor2,material);

var motor3 = new THREE.CylinderGeometry(0.6,0.6,4,50);
var motor3Mesh = new THREE.Mesh(motor3,material);

var motor4 = new THREE.CylinderGeometry(0.6,0.6,4,50);
var motor4Mesh = new THREE.Mesh(motor4,material);

var cir1 = new THREE.CylinderGeometry(0.4,0.4,4,50);
var cir1Mesh = new THREE.Mesh(cir1,material);

var cir2 = new THREE.CylinderGeometry(0.4,0.4,4,50);
var cir2Mesh = new THREE.Mesh(cir2,material);

var cir3 = new THREE.CylinderGeometry(0.4,0.4,4,50);
var cir3Mesh = new THREE.Mesh(cir3,material);

var cir4 = new THREE.CylinderGeometry(0.4,0.4,4,50);
var cir4Mesh = new THREE.Mesh(cir4,material);

var arma1 = new THREE.CylinderGeometry(0.1,0.1,5,50);
var arma1Mesh = new THREE.Mesh(arma1,material);

var arma2 = new THREE.CylinderGeometry(0.1,0.1,5,50);
var arma2Mesh = new THREE.Mesh(arma2,material);

var arma3 = new THREE.CylinderGeometry(0.1,0.1,5,50);
var arma3Mesh = new THREE.Mesh(arma3,material);

var arma4 = new THREE.CylinderGeometry(0.1,0.1,5,50);
var arma4Mesh = new THREE.Mesh(arma4,material);

var cabina = new THREE.BoxGeometry(1.2,1.5,1.5);
var cabinaMesh = new THREE.Mesh(cabina,material);

cuerpo2.translate(5,1.5,2.5);

punta.rotateX(Math.PI/2);
punta.translate(5,1.5,7);

punta2.rotateX(Math.PI/2);
punta2.translate(5,1.5,11.5);

motor1.rotateX(Math.PI/2);
motor1.translate(3.5,2.7,2);

motor2.rotateX(Math.PI/2);
motor2.translate(6.5,2.7,2);

motor3.rotateX(Math.PI/2);
motor3.translate(3.5,0.5,2);

motor4.rotateX(Math.PI/2);
motor4.translate(6.5,0.5,2);

cir1.rotateX(Math.PI/2);
cir1.translate(0,3.5,2);

cir2.rotateX(Math.PI/2);
cir2.translate(0,-0.5,2);

cir3.rotateX(Math.PI/2);
cir3.translate(10,3.5,2);

cir4.rotateX(Math.PI/2);
cir4.translate(10,-0.5,2);

arma1.rotateX(Math.PI/2);
arma1.translate(0,3.5,6);

arma2.rotateX(Math.PI/2);
arma2.translate(0,-0.5,6);

arma3.rotateX(Math.PI/2);
arma3.translate(10,3.5,6);

arma4.rotateX(Math.PI/2);
arma4.translate(10,-0.5,6);

cabina.rotateX(Math.PI/8);
cabina.translate(5,2,5.5);

var xWingGeo = new THREE.Geometry();
xWingGeo.merge(xMesh.geometry,xMesh.matrix);
xWingGeo.merge(cuerpo2Mesh.geometry,cuerpo2Mesh.matrix);
xWingGeo.merge(puntaMesh.geometry,puntaMesh.matrix);
xWingGeo.merge(punta2Mesh.geometry,punta2Mesh.matrix);
xWingGeo.merge(motor1Mesh.geometry,motor1Mesh.matrix);
xWingGeo.merge(motor2Mesh.geometry,motor2Mesh.matrix);
xWingGeo.merge(motor3Mesh.geometry,motor3Mesh.matrix);
xWingGeo.merge(motor4Mesh.geometry,motor4Mesh.matrix);
xWingGeo.merge(cir1Mesh.geometry,cir1Mesh.matrix);
xWingGeo.merge(cir2Mesh.geometry,cir2Mesh.matrix);
xWingGeo.merge(cir3Mesh.geometry,cir3Mesh.matrix);
xWingGeo.merge(cir4Mesh.geometry,cir4Mesh.matrix);
xWingGeo.merge(arma1Mesh.geometry,arma1Mesh.matrix);
xWingGeo.merge(arma2Mesh.geometry,arma2Mesh.matrix);
xWingGeo.merge(arma3Mesh.geometry,arma3Mesh.matrix);
xWingGeo.merge(arma4Mesh.geometry,arma4Mesh.matrix);
xWingGeo.merge(cabinaMesh.geometry,cabinaMesh.matrix);

xWingGeo.rotateY(Math.PI/2);
xWingGeo.translate(-5,0,4);
xWingGeo.scale(0.7,1.8,0.7);

var xWingGeo2 = xWingGeo.clone();
xWingGeo2.rotateY(Math.PI);
xWingGeo2.translate(1,0,-0.5);

/*var xWing = new THREE.Mesh(xWingGeo,material);

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 20;
iluminacion.position.x = -20;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -20;
iluminacion2.position.x = 20;
iluminacion2.position.z = 20;

var escena = new THREE.Scene();
escena.add(xWing);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.rotateX(Math.PI/6);
//escena.rotateY(Math.PI/6);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 30;
camara.position.x = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);*/
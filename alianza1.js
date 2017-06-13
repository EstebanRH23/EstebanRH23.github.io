var material = new THREE.MeshLambertMaterial();

var shape = new THREE.Shape();
shape.moveTo(0,0);
shape.lineTo(2.5,0);
shape.lineTo(2.5,5);
shape.lineTo(1.5,5);
shape.lineTo(0,0);

var shape2 = new THREE.Shape();
shape2.moveTo(0,0);
shape2.lineTo(2.5,0);
shape2.lineTo(0.75,5);
shape2.lineTo(0,5);
shape2.lineTo(0,0);

var extrudeSettings = {
	steps: 2,
	amount: 1,
	bevelEnabled: true,
	bevelThickness: 0.2,
	bevelSize: 0.2,
	bevelSegments: 1
};

var ala1 = new THREE.ExtrudeGeometry( shape, extrudeSettings );
var ala2 = new THREE.ExtrudeGeometry( shape2, extrudeSettings );
var ala1Mesh = new THREE.Mesh(ala1,material);
var ala2Mesh = new THREE.Mesh(ala2,material);
var cuerpo = new THREE.CylinderGeometry(5,5,1.5,50);
var cuerpoMesh = new THREE.Mesh(cuerpo,material);
var cyl = new THREE.CylinderGeometry(2,2,1,50);
var cylMesh = new THREE.Mesh(cyl,material);
var cyl2 = new THREE.CylinderGeometry(0.7,1,5.5,50);
var cyl2Mesh = new THREE.Mesh(cyl2,material);
var cyl3 = new THREE.CylinderGeometry(1,1,2,50);
var cyl3Mesh = new THREE.Mesh(cyl3,material);
var cyl4 = new THREE.CylinderGeometry(0.6,1,2,50);
var cyl4Mesh = new THREE.Mesh(cyl4,material);
var rect = new THREE.BoxGeometry(2,2,7);
var rectMesh = new THREE.Mesh(rect,material);
var antena = new THREE.SphereGeometry(2,32,32,6,6.3,0,0.9);
var antenaMesh = new THREE.Mesh(antena,material);

ala1.rotateX(Math.PI/2);
ala1.translate(-4,0.7,3);

ala2.rotateX(Math.PI/2);
ala2.translate(1.5,0.7,3);

cyl.translate(0,0.75,0);

cyl2.rotateX(Math.PI/2);
cyl2.rotateY(Math.PI*3/5);
cyl2.translate(-2.5,0.4,1);

cyl3.rotateX(Math.PI/2);
cyl3.translate(-5,0.4,2);

cyl4.rotateX(Math.PI/2);
cyl4.translate(-5,0.4,4);

rect.translate(0,0,2.5);

antena.rotateX(3*Math.PI/5);
antena.rotateY(Math.PI);
antena.rotateZ(Math.PI/2);
antena.translate(2.5,2,2.5);

var halconGeo = new THREE.Geometry();
halconGeo.merge(ala1Mesh.geometry,ala1Mesh.matrix);
halconGeo.merge(cuerpoMesh.geometry,cuerpoMesh.matrix);
halconGeo.merge(ala2Mesh.geometry,ala2Mesh.matrix);
halconGeo.merge(rectMesh.geometry,rectMesh.matrix);
halconGeo.merge(cylMesh.geometry,cylMesh.matrix);
halconGeo.merge(cyl2Mesh.geometry,cyl2Mesh.matrix);
halconGeo.merge(cyl3Mesh.geometry,cyl3Mesh.matrix);
halconGeo.merge(cyl4Mesh.geometry,cyl4Mesh.matrix);
halconGeo.merge(antenaMesh.geometry,antenaMesh.matrix);

halconGeo.rotateY(Math.PI/2);
halconGeo.scale(0.75,1.8,0.75);
halconGeo.translate(-1.5,0,0);

var halconGeo2 = halconGeo.clone();
halconGeo2.rotateY(Math.PI);

/*var halcon = new THREE.Mesh(halconGeo,material);

var iluminacion = new THREE.PointLight(0xFFFFFF);
iluminacion.position.y = 20;
iluminacion.position.x = -20;

var iluminacion2 = new THREE.PointLight(0xFFFFFF);
iluminacion2.position.y = -20;
iluminacion2.position.x = 20;
iluminacion2.position.z = 20;

var escena=new THREE.Scene();
escena.add(halcon);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.rotateX(Math.PI/6);
escena.rotateY(Math.PI/6);

var camara=new THREE.PerspectiveCamera();
camara.position.z=30;
camara.position.y=-5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*0.95,window.innerHeight*0.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);*/

var audio = document.createElement('audio');
var source = document.createElement('source');
source.src = 'MI.mp3';
audio.appendChild(source);
audio.play();

///////////////////////BASE////////////////////////////
var base=new THREE.PlaneGeometry(10,10);
var material= new THREE.MeshNormalMaterial();
var malla= new THREE.Mesh(base,material);
malla.rotateX(Math.PI*5/3);
//////////////////////CUERPO/////////////////////////////
THREE.ImageUtils.crossOrigin = '';
var textura1 = THREE.ImageUtils.loadTexture('http://i.imgur.com/R8Dj7GJ.jpg' );
var materialp= new THREE.MeshBasicMaterial({map:textura1});
var textura2 = THREE.ImageUtils.loadTexture('http://i.imgur.com/a930Aof.jpg' );
var materialn= new THREE.MeshBasicMaterial({map:textura2});

var deathstar = new THREE.SphereGeometry(5,32,32);
var deathstarmalla = new THREE.Mesh(deathstar,materialp);
deathstar.translate(0,10,0);

var muesca = new THREE.CircleGeometry(1.5,32);
var muescamalla = new THREE.Mesh(muesca,materialp);
muesca.translate(1,11,6);
//nave5.rotateY(Math.PI/2)
var ds = new THREE.Geometry();
ds.merge(deathstarmalla.geometry, deathstarmalla.matrix);
ds.merge(muescamalla.geometry, muescamalla.matrix);

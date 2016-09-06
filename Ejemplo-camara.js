var campoVision =45;
var relacionAspecto =window.innerWidth/window.inneerHeigth
var planoCercano =1;
var planoLejano=1000;
var camara = new TRHEE.PerspectiveCamera(CampoVision, relacionAspecto, planoCercano, planoLejano);
camara.position.z=15;

var cubo = new THREE.Mesh(new THREE.BoxGeometry(2,2,2),
				new THREE.MeshNormalMaterial() );
var esfera1 = new THREE.Mesh( new THREE.SphereGeometry(1),
				new THREE.MeshNormalMaterial());
var esfera2 = new THREE.Mesh(new THREE.SphereGeometry(1)
				new THREE.MeshNormalMaterial());
esfera2.position.x=-5;
esfera2.position.z=-10;

var escena = new THREE.Scene();
escena.add(esfera1);
escena.add(esfera2);
escena.add(cubo);

var renderizador= new THREE.WebGLRender();
renderizador.setSize(window.innerWidth,
			window.innerHeigth);
document.body.appendChild( renderizador.domElement);
renderizador.render(escena, camara);

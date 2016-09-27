var VENTANA = new Object();

VENTANA.listener=funtion(){
	VENTANA.camara.aspect=window.innerWidth / window.innerHeigth
	VENTANA.camara.updateProjetionMatrix();
	VENTANA.renderizador.setSize(window, inneWidth,window.innerHeigth);
}

VENTANA.setup=function {
	var tipo_evento = 'resize';
	var capturarp = false;
	window.addEventListener( tipo_evento, VENTANA.listener, capturarp);
	VENTANA.escena = new THREE.Scene();
	VENTANA.camara = new THREE.perspectiveCamera();
	VENTANA.camara.position.z=5;
	
var lienzo = document.getElementById("ejemplo-ventana");
VENTANA.renderizador = new THREE.WebGLRenderer({canvas: lienzo,
						antialias: true});
VENTANA.renderizador.setSize(window.innerWidth, window.innerHeight);
VENTANA.malla = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshNormalMaterial());
}
VENTANA.loop= function () {
	requestAnimationFrame(VENTANA.loop);
	VENTANA.malla.rotaX(0.01);
	VENTANA.malla.rotaY(0.01);
	VENTANA.renderizador.render(VENTANA.escena, VENTANA.camara);	
}
VENTANA.setup();
VENTANA.loop();

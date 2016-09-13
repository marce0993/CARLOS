var forma = new THREE.SphereGeometry(1);
var marterial = new THREE.MeshBasicMaterial({color: 0x00f00});
var malla = new THREE.Mesh(forma, material);
var escena = new THREE.Scene();
escena.add(malla);

vara camara = new THREE.PerspectiveCamera();
camara.position.z=5;

var lienzo = document.getElementById("basicMaterial");
var renderizador = new THREE.WebGLRender(canvas: lienzo, 
                                            antialias:true});
                                            
renderizador.setSize(600,600);
renderizador.render(escena,camara);

<canvas id="basicMaterial" width="600" height="600"></canvas>
<script scr="ejemplo-basicMaterial.js"></script>

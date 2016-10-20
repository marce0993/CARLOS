function Pieza()
{
    THREE.Object3D.call(this);
    
    this.piernaIzq = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
    this.piernaDer = new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
    var cuerpo = new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
    this.add(this.piernaDer,this.piernaIzq, cuerpo);
    
    this.piernaIzq.position.z = -2;
    this.piernaIzq.position.y = -2.5;
    this.piernaDer.position.z = 7;
    this.piernaDer.position.y = -2.5;
    cuerpo.position.z=2.5;
}

var pieza;
var escena;
var renderizador;
var camara;

Pieza.prototype = new THREE.Object3D;

function setup()
{
      pieza = new Pieza();
      
      escena = new THREE.Scene();
      escena.add(pieza);
      camara= new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
      
      camara.position.z=25;
      
      var lienzo=document.getElementById("ejemplo-pieza-mov");
      renderizador=new THREE.WebGLRenderer({canvas:lienzo, antialias: true});
      renderizador.setSize(600,600);
}

function loop()
{
    requestAnimationFrame(loop);
    pieza.rotateY(0.05);
    pieza.piernaIzq.rotateZ(0.05);
    renderizador.render(escena,camara)
}

setup();
loop();

Rodrigo
----HTML-----

Rodrigo
<!doctype html>
<html>
      <head>
            <title> Pieza Movimiento</title>
            <meta http-equiv="Context-Type"
                            content="text/html; charset=utf-8">
            <style>
                body{text-align: center;}
            </style>
      </head>
      
      <body>
            <script src="./three.min.js"></script>
           <canvas id="ejemplo-pieza-mov"  ></canvas>
           <script src="ejemplo-pieza-mov.js"></script>          
      </body>
</html>

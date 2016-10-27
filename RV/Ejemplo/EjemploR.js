function Agent(x=0, y=0)
{
      THREE.Object3D.call(this);
      this.postion.x =x;
      this.postion.y =y;     
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense= function(environment) {};
Agent.prototype.plan= function(environment) {};
Agent.prototype.act= function(environment) {};

function Environment()
{
      THREE.Scene.call(this);
}

function Wall(size, x, y){
  THREE.Mesh.call(this,
        new THREE.BoxGeometry(size,size, size),
              new THREE.MeshNormalMaterial());
        this.size = size;
        this.position.x=x;
        this.position.y=y;
}

Wall.prototype = new THREE.Mesh();
  Environment.prototype.setMap = function(map){
  var _offset = Math.floor(map.length/2);
  for(var i=0; i< map.length; i++)
    for(var j=0;j<map.length; j++){
    if(map[i][j]==="x")
      this.add(new wall(1,j-_offset,-(i -_offset)));
      else if(map[i][j]==="r")
        this.add(new Robot(0.5,j -_offset, -(i -_offset)));
        }
  }
  
  function setup(){
   var mapa = new Array();
   mapa[0]="xxxxxxxxxxxxxxxxxxxxxxxxx";
   mapa[1]="x                       x";
   mapa[2]="x                       x";
   mapa[3]="x   r                   x";
   mapa[4]="x                       x";
   mapa[5]="x                       x";
   mapa[6]="x                       x";
   mapa[7]="xxxxx   xxxxxxxxxxx   xxx";
   mapa[8]="x                       x";
   mapa[9]="x                       x";
   mapa[10]="x                       x";
   mapa[11]="x          r            x";
   mapa[12]="x                       x";
   mapa[13]="x                       x";
   mapa[14]="x                       x";
   mapa[15]="x                       x";
   mapa[16]="xxx    xxxxxxxxxxxxxxxxxx";
   mapa[17]="x                       x";
   mapa[18]="x       r               x";
   mapa[19]="x                       x";
   mapa[20]="xxx    xxxxxxxxxx    xxxx";
   mapa[21]="x                       x";
   mapa[22]="x                       x";
   mapa[23]="x         r             x";
   mapa[24]="xxxxxxxxxxxxxxxxxxxxxxxxx";
   
   enviroment = new Environment();
   
   environmet.setMap(mapa);
   
   camera = new THREEPerspectiveCamera();
   camera.position.z=30;
   
   renderer= new THREE.WebGLRenderer();
   renderer.setSize(window.innerHeight*.95, window.innerHeight*.95)
   document.body.appendChild(renderer.domElement);
   
   environmet.add( camera);
   }
   function loop(){
    requestAnimationFrame( loop );
      enviroment.sense();
      enviroment.plan();
      enviroment.act();
      
      renderer.render(environmet, camera); 
   }
   var enviroment, camera, renderer;
     function Sensor(position,direction){
     THREE.Raycaster.call(this, position, direction);
     this.colision= false;
     } 
  Sensor.prototype = new THREE.Raycaster();
  
  function Robot(size,x,y){
  Agent.call(this, x, y);
  
  this.sensor = new Sensor();
  this.actuador = new THREE.Mesh(new THREE.BoxGeometry( size, size, size),new THREE.MeshBasicMaterial({color: '#aa000'}));
  this.add(this.actuador);
  }
  Robot.prototype = new Agent();
  
  Robot.prototype.sense= function(enviroment){
  this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.totation.z),0));
  var obstaculo = this.sensor.intersectObjects(enviroment.children, true);
  
  if((obstaculo.lenght > 0 && (obstaculo[0].distance <= .5)))
    this.sensor.colision = true;
    else
    this.sensor.colision= flase;
    }
    
    Robot.prototype.plan=function(environment){
    this.actuador.comands =[];
    
    if(this.sensor.colision==true)
    this.actuador.cammands.push('rotateCCW');
    else
    this.actuador.commands.push('goStraight');
    };
    Robot.protoype.act = function(enviroment){
    var command = this.actuador.commands.pop();
    
    if(command === undefined)
    console.log('Undefined command');
    else if (comand in this.operations)
    this.operations[comand](this);
    else
    console.log('UNknow command');
    };
    
   
   Robot.prototype.operations ={};
   
   Robot.prototype.operations.goStraight = function(robot, distance){
      if (distance===undefined)
      distance=.05;
      robot.position.x += distance*Math.cos(robot.rotation.z);
      robot.position.y += distance*Math.sin(robot.rotation.z);
   };
   Robot.prototype.operations.rotateCW = function(robot, angle){
    if(angle==undefined)
    angle = -Math.PI/2;
    robot.rotation.z +=angle;
   };  
   Robot.prototype.operations.rotateCCW = function(robot, angle){
      angle=Math.PI/2;
      robot.rotation.z +=angle;
   };
   setup();
   loop();  

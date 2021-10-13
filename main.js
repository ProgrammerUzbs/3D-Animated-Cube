var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight
var renderer = new THREE.WebGLRenderer({anitialias:true})
renderer.setSize(WIDTH,HEIGHT)
renderer.setClearColor(0xDDDDDD,1)

document.body.appendChild(renderer.domElement)



var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(70,WIDTH/HEIGHT)
camera.position.z = 50
scene.add(camera)

var boxGeometry = new THREE.BoxGeometry(10,10,10)
var basicMaterial = new THREE.MeshBasicMaterial({color:'#009999'})
var cube = new THREE.Mesh(boxGeometry, globalThis.basicMaterial)
cube.rotation.set(0.1,0.1,0.1)

scene.add(cube)

function render(){
    cube.rotation.y += 0.01
    cube.rotation.x += 0.01
    requestAnimationFrame(render)
    renderer.render(scene, camera)
}
render()
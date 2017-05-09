function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 10 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var vertices = [
      [-1, 1,-1],
      [-1,-1,-1],
      [ 1,-1,-1],
      [ 1, 1,-1],
      [-1, 1, 1],
      [-1,-1, 1],
      [ 1,-1, 1],
      [ 1, 1, 1]
    ];

    var faces = [
      [ 0, 1, 2],
      [ 0, 2, 3],
      [ 0, 4, 5],
      [ 0, 5, 1],
      [ 1, 5, 6],
      [ 1, 6, 2],
      [ 2, 6, 7],
      [ 2, 7, 3],
      [ 5, 4, 7],
      [ 5, 7, 6],
      [ 4, 0, 3],
      [ 4, 3, 7]
    ];

    var geometry = new THREE.Geometry();

    for (var i = 0; i < 8; i++) {
      geometry.vertices.push( new THREE.Vector3().fromArray( vertices[i] ) );
    }

    for (var i = 0; i < 12; i++) {
      geometry.faces.push( new THREE.Face3( faces[i][0], faces[i][1], faces[i][2] ) );
    }

    var material = new THREE.MeshBasicMaterial();
    material.side = THREE.BackSide;
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0, 0 );

    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var light = new THREE.PointLight( 0xffffff );
    light.position.set( 5, 5, 5 );
    scene.add( light );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}

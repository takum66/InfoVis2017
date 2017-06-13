function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    cmap = [];

    for ( var i = 0; i < 256; i++ )
    {
      var S = i/ 255.0;
      var R = Math.max( Math.cos( (S-1.0) * Math.PI ), 0.0 );
      var G = Math.max( Math.cos( (S-0.5) * Math.PI ), 0.0 );
      var B = Math.max( Math.cos( (S-0.0) * Math.PI ), 0.0 );
      var color = new THREE.Color( R, G, B );
      cmap.push( [ S, color.getHexString() ] );
    }

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var [ geometry, material ] = Isosurfaces( volume, isovalue, screen, cmap );
    var surfaces = new THREE.Mesh( geometry, material );
    screen.scene.add( surfaces );

    var controller = document.getElementById("controller");
    controller.style.backgroundColor = '#' + cmap[isovalue][1];

    document.addEventListener('mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener('resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });

    var colorSlider = document.querySelector('input[type="range"]');

    colorSlider.addEventListener('input', function() {
      var controller = document.getElementById("controller");
      controller.style.backgroundColor = '#' + cmap[Math.round(colorSlider.value)][1];
    });

    var applyButton = document.getElementById('change-isovalue-button');

    applyButton.addEventListener('click', function() {
      // setcolor( material, Math.round(colorSlider.value) );
      material.color = new THREE.Color().setHex( '0x' + cmap[Math.round(colorSlider.value)][1] );
      /*materialColor = new THREE.Color().setHex( '0x' + cmap[Math.round(colorSlider.value)][1] );
      material = new THREE.ShaderMaterial({
        vertexColors: THREE.VertexColors,
        vertexShader: document.getElementById('gouraud.vert').text,
        fragmentShader: document.getElementById('gouraud.frag').text,
        uniforms: {
          light_position: { type: 'v3', value: screen.light.position },
          cameta_position: { type: 'v3', value: screen.camera.position },
          m_color: { type: 'v3', value: materialColor }
        }
      });*/
    });

    screen.loop();
}

function setcolor( material, isovalue )
{
  cmap = [];

  for ( var i = 0; i < 256; i++ )
  {
    var S = i / 255.0;
    var R = Math.max( Math.cos( (S-1.0) * Math.PI ), 0.0 );
    var G = Math.max( Math.cos( (S-0.5) * Math.PI ), 0.0 );
    var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
    var color = new THREE.Color( R, G, B );
    cmap.push( [ S, color.getHexString() ] );
  }

  material.color = new THREE.Color().setHex( '0x' + cmap[isovalue][1] );
}

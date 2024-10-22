/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Ahmad Riazi (https://sketchfab.com/ahmadriazi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/instagram-7336c24e31d2492abf0e67b60b3e3c1b
Title: Instagram
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Instagram = React.forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/models/instagram.glb');
    return (
      <group {...props} ref={ref} dispose={null}>
        <group position={[0, 0.229, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials['Material.001']}
          />
        </group>
      </group>
    );
  });
  
  useGLTF.preload('/models/instagram.glb');
  
  export default Instagram;
  
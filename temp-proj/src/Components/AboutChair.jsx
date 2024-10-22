/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Nikodoo (https://sketchfab.com/Nikodoo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-black-wave-inspired-by-stable-diffusion-8d268b3735f14b09b576e89dd36dec2d
Title: Chair "Black Wave" inspired by Stable Diffusion
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const AboutChair=(props)=> {
  const { nodes, materials } = useGLTF('/models/About_chair.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -3.136]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Black_seat_0.geometry}
            material={materials.Black_seat}
            rotation={[0, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Black_fabric_0.geometry}
            material={materials.Black_fabric}
            rotation={[0, 0, -Math.PI]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Black_legs_0.geometry}
            material={materials.Black_legs}
            rotation={[-Math.PI, -Math.PI / 2, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/About_chair.glb')

export default AboutChair;
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tent(props) {
  const { nodes, materials } = useGLTF('/models/tent.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sticks_Stick_0.geometry}
        material={materials.Stick}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ropes_Ropes_0.geometry}
        material={materials.Ropes}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tent_Tent_0.geometry}
        material={materials.Tent}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  )
}

useGLTF.preload('/models/tent.glb')
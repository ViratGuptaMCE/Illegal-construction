import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tent2(props) {
  const { nodes, materials } = useGLTF('/models/medieval_tent.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Tent_1011}
            position={[-17.303, 16.182, 14.077]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.Woods_1001}
            position={[-17.303, 16.182, 14.077]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/medieval_tent.glb')

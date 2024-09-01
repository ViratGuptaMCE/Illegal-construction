import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function House(props) {
  const { nodes, materials } = useGLTF('/models/house.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-988.75, 117.5, -525]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_02_Door_0.geometry}
          material={materials.Door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_02_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Lock_02_Door_Lock_0.geometry}
          material={materials.Door_Lock}
          position={[81.833, 4.28, -1.5]}
        />
      </group>
      <group position={[-565, 127.5, 170]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_01_Door_0.geometry}
          material={materials.Door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_01_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Lock_01_Door_Lock_0.geometry}
          material={materials.Door_Lock}
          position={[81.833, 4.28, -1.5]}
        />
      </group>
      <group position={[975, 127.5, 250]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_03_Door_0.geometry}
          material={materials.Door}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_03_Glass_0.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Door_Lock_03_Door_Lock_0.geometry}
          material={materials.Door_Lock}
          position={[-81.833, 4.28, 1.5]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House_House_0.geometry}
        material={materials.House}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.House_Glass_0.geometry}
        material={materials.Glass}
      />
    </group>
  )
}

useGLTF.preload('/models/house.glb')

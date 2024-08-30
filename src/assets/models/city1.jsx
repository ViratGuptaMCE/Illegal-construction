import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function City1(props) {
  const { nodes, materials } = useGLTF('/models/monteriggioni_high_quality.glb')
  return (
    <group
      {...props}
      dispose={null}
      onDoubleClick={({ point }) => {
        new JEASINGS.JEasing(controls.current.target)
          .to(
            {
              x: point.x,
              y: point.y,
              z: point.z,
            },
            1000
          )
          .easing(JEASINGS.Cubic.Out)
          .start();
      }}
    >
      <group rotation={[-1.4, -0.166, 0.012]}>
        <group position={[-9.157, -9.327, -2.974]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.material_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.material_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.material_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.material_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.material_4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.material_5}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.material_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.material_6}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials.material_7}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.material_8}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials.material_9}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/monteriggioni_high_quality.glb')
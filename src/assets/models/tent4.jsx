import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tent4(props) {
  const { nodes, materials } = useGLTF('/models/old_snowy_tent.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.042, 0.002, -0.04]} rotation={[-Math.PI / 2, 0, -1.56]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.424, 0.039, -0.346]}>
            <group
              position={[0.619, 0.003, 0.722]}
              rotation={[0, -0.028, Math.PI / 2]}
              scale={[1, 0.711, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                material={materials.old_tent}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials.old_tent}
                position={[0.308, -0.012, 0]}
                rotation={[0, 0, -0.05]}
                scale={[1.37, 1, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                material={materials.old_tent}
                position={[0.179, 0.011, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials.old_tent}
                position={[0.072, 0.013, 0]}
              />
            </group>
            <group position={[0.063, 0.098, -0.841]} rotation={[-Math.PI, 1.491, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_15.geometry}
                material={materials.old_tent}
                position={[-0.17, 0.006, -0.216]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_17.geometry}
                material={materials.old_tent}
                position={[-0.042, 0.006, -0.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_19.geometry}
                material={materials.old_tent}
                position={[-0.043, 0.006, -0.223]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_21.geometry}
                material={materials.old_tent}
                position={[-0.169, 0.007, -0.077]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group position={[0.044, -0.039, -0.573]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_24.geometry}
                material={materials.old_tent}
                position={[-0.17, 0.006, -0.216]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_26.geometry}
                material={materials.old_tent}
                position={[-0.042, 0.006, -0.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_28.geometry}
                material={materials.old_tent}
                position={[-0.043, 0.006, -0.223]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_30.geometry}
                material={materials.old_tent}
                position={[-0.169, 0.007, -0.077]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group position={[0.975, -0.039, 0.379]} rotation={[0, -0.148, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_33.geometry}
                material={materials.old_tent}
                position={[-0.17, 0.006, -0.216]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_35.geometry}
                material={materials.old_tent}
                position={[-0.042, 0.006, -0.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_37.geometry}
                material={materials.old_tent}
                position={[-0.043, 0.006, -0.223]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_39.geometry}
                material={materials.old_tent}
                position={[-0.169, 0.007, -0.077]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group position={[1.421, -0.039, 0.346]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_42.geometry}
                material={materials.old_tent}
                position={[-0.212, 0.012, -0.366]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.775]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_44.geometry}
                material={materials.old_tent}
                position={[-0.297, 0.008, 0.414]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 0.884]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_46.geometry}
                material={materials.old_tent}
                position={[-0.694, -0.01, -0.384]}
                rotation={[Math.PI / 2, 0.139, 0]}
                scale={[1, 1, 0.901]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_48.geometry}
                material={materials.old_tent}
                position={[-0.764, 0.008, 0.388]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.024]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_50.geometry}
                material={materials.old_tent}
                position={[-1.15, 1.056, -0.608]}
                scale={[1, 1, 0.775]}
              />
            </group>
            <group position={[1.895, -0.039, 0.346]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_53.geometry}
                material={materials.old_tent}
                position={[-0.967, -0.006, -0.554]}
                rotation={[0.329, 0, Math.PI]}
                scale={0.6}
              />
            </group>
            <group
              position={[0.64, 0.003, -0.035]}
              rotation={[0, -0.028, Math.PI / 2]}
              scale={[1, 0.82, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_56.geometry}
                material={materials.old_tent}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_58.geometry}
                material={materials.old_tent}
                position={[0.257, -0.008, 0]}
                rotation={[0, 0, -0.05]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_60.geometry}
                material={materials.old_tent}
                position={[0.155, 0.011, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_62.geometry}
                material={materials.old_tent}
                position={[0.072, 0.013, 0]}
              />
            </group>
            <group position={[1.103, -0.039, -0.283]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_65.geometry}
                material={materials.old_tent}
                position={[-0.17, 0.006, -0.216]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_67.geometry}
                material={materials.old_tent}
                position={[-0.042, 0.006, -0.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_69.geometry}
                material={materials.old_tent}
                position={[-0.043, 0.006, -0.223]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_71.geometry}
                material={materials.old_tent}
                position={[-0.169, 0.007, -0.077]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group position={[1.122, 0.098, -0.551]} rotation={[-Math.PI, 1.491, Math.PI]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_74.geometry}
                material={materials.old_tent}
                position={[-0.17, 0.006, -0.216]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_76.geometry}
                material={materials.old_tent}
                position={[-0.042, 0.006, -0.09]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_78.geometry}
                material={materials.old_tent}
                position={[-0.043, 0.006, -0.223]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_80.geometry}
                material={materials.old_tent}
                position={[-0.169, 0.007, -0.077]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_82.geometry}
              material={materials.old_tent}
              position={[0.424, -0.039, 0.346]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/old_snowy_tent.glb')
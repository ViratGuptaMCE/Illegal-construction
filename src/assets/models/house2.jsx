import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function House2(props) {
  const { nodes, materials } = useGLTF("/models/house2.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Building}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Cable}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Window_Glass}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/house2.glb");

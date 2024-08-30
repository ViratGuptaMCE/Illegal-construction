import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hut(props) {
  const { nodes, materials } = useGLTF("/models/old_building.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.building_1_Building_1_0.geometry}
          material={materials.Building_1}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/old_building.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tent3(props) {
  const { nodes, materials } = useGLTF("/models/military_tent.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001__0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.111}
      />
    </group>
  );
}

useGLTF.preload("/models/military_tent.glb");

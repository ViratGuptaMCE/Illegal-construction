import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Soil(props) {
  const { nodes, materials } = useGLTF("/models/digging_in_the_sand.glb");
  return (
    <group {...props} dispose={null}>
      {/* <directionalLight position={[0,1,0]} intensity={1} color={'black'}/> */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.main}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.main}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/digging_in_the_sand.glb");

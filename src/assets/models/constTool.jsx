import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Soil } from './soil'

export function Tool(props) {
  const { nodes, materials } = useGLTF('/models/construction_site_-_low_poly_prop_set.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <ambientLight intensity={1} />
        <Soil scale={380} rotation={[0, -5*Math.PI / 4, 0]} position={[0,-170,-300]} />
        <group
          position={[-947.251, 0, -198.034]}
          rotation={[-Math.PI / 2, 0, 1.222]}
          scale={[2.2, 1.59, 1.778]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DP_CSS_WoodBox_1_DP_CSS_WoodBox_1_0.geometry}
            material={materials.DP_CSS_WoodBox_1}
            position={[0, 0, 3.736]}
          />
        </group>
        <group position={[-386.254, 0, -433.837]} rotation={[-Math.PI / 2, 0, 0.262]} scale={1.48}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_CCS_CableReel_1_SP_CCS_CableReel_1_0.geometry}
            material={materials.SP_CCS_CableReel_1}
            position={[0, 0, 78.39]}
          />
        </group>
        <group
          position={[581.263, 0, -156.731]}
          rotation={[0, -Math.PI / 4, 0]}
          scale={[2.54, 2.54, 4.479]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_CCS_ConcretePipe_1_SP_CCS_ConcretePipe_1_0.geometry}
            material={materials.SP_CCS_ConcretePipe_1}
            position={[0, 40, 64.7]}
          />
        </group>
        <group
          position={[748.159, 0, 72.747]}
          rotation={[-Math.PI / 2, 0, Math.PI / 4]}
          scale={2.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_CCS_IronPipes_1_SP_CCS_IronPipes_1_0.geometry}
            material={materials.SP_CCS_IronPipes_1}
            position={[-149.185, 3.313, 23.117]}
          />
        </group>
        <group
          position={[173.074, 0, -274.856]}
          rotation={[0, Math.PI / 6, 0]}
          scale={[7.711, 5.77, 5.77]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_CSS_Excavator_1_SP_CSS_Excavator_1_0.geometry}
            material={materials.SP_CSS_Excavator_1}
            position={[-21.414, 29.647, 4.041]}
          />
        </group>
        <group position={[-93.741, 0, -429.553]} rotation={[0, 0.087, 0]} scale={2.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.DP_CCS_Toilet_1_DP_CCS_Toilet_1_0.geometry}
            material={materials.DP_CCS_Toilet_1}
            position={[0, 48.931, 19.848]}
          />
        </group>
        <group position={[-680.234, 0, -669.659]} rotation={[-Math.PI / 2, 0, -2.182]} scale={2.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_CSS_ShipingCont_2_SP_CSS_ShipingCont_2_0.geometry}
            material={materials.SP_CSS_ShipingCont_2}
            position={[-119.142, 0, 0]}
          />
        </group>
        <group
          position={[410.606, 0, -802.869]}
          rotation={[0, 1.484, 0]}
          scale={[5.435, 7.275, 7.275]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_HWS_TrailerTruck_1_SP_HWS_TrailerTruck_1_0.geometry}
            material={materials.SP_HWS_TrailerTruck_1}
            position={[-15.433, 7.563, 81.341]}
          />
        </group>
        <group position={[-554.229, 0, -177.336]} rotation={[-Math.PI / 2, 0, -2.967]} scale={2.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_JNK_ScrapPile_1_SP_JNK_ScrapPile_1_0.geometry}
            material={materials.SP_JNK_ScrapPile_1}
            position={[2.5, -75.851, 0.096]}
          />
        </group>
        <group position={[-361.073, 0, -295.908]} rotation={[-Math.PI / 2, 0, 0]} scale={2.54}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SP_RST_Loudspeaker_1_SP_RST_Loudspeaker_1_0.geometry}
            material={materials.SP_RST_Loudspeaker_1}
            position={[-14.701, 0.768, 173.412]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DP_CCS_RoadGate_1_DP_CCS_RoadGate_1_0.geometry}
          material={materials.DP_CCS_RoadGate_1}
          position={[-97.244, 0, 253.164]}
          rotation={[-Math.PI / 2, 0, 0.175]}
          scale={7.443}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SP_CCS_MetalBeams_1_SP_CCS_MetalBeams_1_0.geometry}
          material={materials.SP_CCS_MetalBeams_1}
          position={[-683.84, 0, 248.315]}
          rotation={[-Math.PI / 2, 0, 1.134]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SP_CSS_ShipingCont_1_SP_CSS_ShipingCont_1_0.geometry}
          material={materials.SP_CSS_ShipingCont_1}
          position={[447.376, 155.201, -797.103]}
          rotation={[-Math.PI / 2, 0, -0.087]}
          scale={2.54}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DP_JNK_FenceRust_1_DP_JNK_FenceRust_1_0.geometry}
          material={materials.DP_JNK_FenceRust_1}
          position={[-311.884, 0, -773.214]}
          rotation={[-Math.PI / 2, 0, -2.007]}
          scale={3.916}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/construction_site_-_low_poly_prop_set.glb')
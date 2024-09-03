import React from 'react'
import { House2 } from '../assets/models/house2'

const RandomExtension = (props) => {

  const propList = [
    { position: [-0.55, -0.5, 0.2], rotation: [0, 0, 0] },
    { position: [-0.55, -0.5, 0.75], rotation: [0, Math.PI, 0] },
    { position: [-0.15, -0.5, 1], rotation: [0, Math.PI/2, 0] },
    { position: [-0.65, -0.5, -1.1], rotation: [0, -Math.PI/2, 0] },
  ];
  const prop = props.pos;
  // props.Ref.current = prop.position;
  return (
    <House2 scale={0.003} {...prop} />
  )
}

export default RandomExtension
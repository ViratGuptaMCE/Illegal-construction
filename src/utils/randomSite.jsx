import React from 'react'
import { CONSTR_SITES } from '../constants'
import { Tool } from '../assets/models/constTool'

const RandomSite = (props) => {
  // const pos = CONSTR_SITES[Math.floor(Math.random() *3)]
  const pos = props.pos;
  return <Tool scale={0.08} position={pos} />;
}

export default RandomSite
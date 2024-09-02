import React from 'react'
import { House3 } from '../assets/models/house3';
import { House } from '../assets/models/house';

const RandomHouse = () => {
  const randNum = Math.floor(Math.random() * 2) + 1;
  const posList = [
    [-(Math.floor(Math.random() * 55) + 75) / 100, -0.35, -1.1],
    [-(Math.floor(Math.random() * 2) + 0) / 10, -0.4, 2.45],
    [-2.5,-0.3 ,-1.8]
  ];
  const randIndex = Math.floor(Math.random() * 3)
  const pos = posList[randIndex];
  console.log(pos)
  switch (randNum) {
    case 1:
      return (
        <>
          <House
            position={pos}
            scale={0.0003}
            rotation={randIndex == 2 ? [0, 0, 0] : [0, Math.PI / 2, 0]}
          />
          <ambientLight intensity={12} />
        </>
      );
  
    default:
      return (
        <>
          <House3
            position={pos}
            scale={0.03}
            rotation={randIndex == 2 ? [0, Math.PI / 2, 0] : [0, 0, 0]}
          />
          <ambientLight intensity={4} />
        </>
      );
  }
  
}

export default RandomHouse
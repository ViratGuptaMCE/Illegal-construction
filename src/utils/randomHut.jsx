import React from 'react'
import { Hut } from '../assets/models/hut';
import { Tent } from '../assets/models/tent';
import { Tent2 } from '../assets/models/tent2';
import { Tent5 } from '../assets/models/tent5';
import { Tent4 } from '../assets/models/tent4';

const RandomHut = () => {
  const posList = [
    [
      (Math.floor(Math.random() * 8) + 30) / 10,
      -0.1,
      (Math.floor(Math.random() * 6) + 18) / 10,
    ],
    [
      (Math.floor(Math.random() * 35) - 15) / 10,
      -0.1,
      (Math.floor(Math.random() * -7) - 23) / 10,
    ],
    [
      (Math.floor(Math.random() * -8) - 12) / 10,
      -0.1,
      (Math.floor(Math.random() * 6) + 22) / 10,
    ],
  ];
  // console.log(posList)
  const pos = posList[Math.floor(Math.random() * 3)]
  console.log(pos)
  const tentNo = Math.floor(Math.random() * 5) + 1
  
  switch (tentNo) {
    case 1:
      return (
        <>
          <ambientLight intensity={4} color={"orange"} />
          <Hut scale={0.1} position={pos} />
        </>
      );
    case 2:
      return <Tent2 scale={0.007} position={pos} />;
    case 3:
      return <Tent5 scale={0.001} position={pos} />;
    case 4:
      return <Tent4 scale={0.3} position={pos} />;
    default:
      return <Tent scale={0.0015} position={pos} />;
  }
  
}

export default RandomHut
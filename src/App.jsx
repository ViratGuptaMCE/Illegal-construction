import { Suspense, useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from './utils/loader'
import { City1 } from './assets/models/city1'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import JEASINGS from "https://esm.sh/jeasings";

function App() {
  // const [count, setCount] = useState(0)
  const camera = useRef();
  const control = useRef();
  function JEasings() {
    useFrame(() => {
      JEASINGS.update();
    });
  }
  const annotate = [
    {
      title: "Normal View",
      description: "<p>Looking in front from side</p>",
      position: {
        x: 0,
        y: 0,
        z: 6,
      },
      lookAt: {
        x: 0,
        y: 0,
        z: 0,
      },
    },
    {
      title: "Drone View",
      description: "<p>Looking from above.</p>",
      position: {
        x: 0,
        y: 4,
        z: 0,
      },
      lookAt: {
        x: 0,
        y: 1,
        z: 0,
      },
    },
  ];
  const buttons = annotate.map(({ title, lookAt, position }) => (
    <button
      key={title}
      onClick={() => {
        console.log(title, " clicked");
        new JEASINGS.JEasing(control.current.target)
          .to(
            {
              x: lookAt.x,
              y: lookAt.y,
              z: lookAt.z,
            },
            2100
          )
          .easing(JEASINGS.Cubic.Out)
          .start();

        // change camera position
        new JEASINGS.JEasing(camera.current.position)
          .to(
            {
              x: position.x,
              y: position.y,
              z: position.z,
            },
            2000
          )
          .easing(JEASINGS.Cubic.Out)
          .start();
      }}
    >
      {title}
    </button>
  ));

  return (
    <div className="App h-[100vh]">
      <header className="App-header h-[100vh]">
        <Canvas
          className={`w-full h-screen bg-transparent
          }`}
        >
          <Suspense fallback={<Loader />}>
            <City1 position={[0, -0.5, -0]} scale={0.7} controls={control} />
            <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 6]} />
            <OrbitControls ref={control} target={[0, 0, 0]} />
            {/* <ambientLight intensity={50}/> */}
            <Environment
              files="/hdris/sky.hdr"
              background
              backgroundBlurriness={0}
              backgroundRotation={[0, Math.PI / 8, 0]}
            />
            <JEasings />
          </Suspense>
        </Canvas>
        <div id="ui">{buttons}</div>
      </header>
    </div>
  );
}

export default App

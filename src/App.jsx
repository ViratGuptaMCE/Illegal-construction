import { Suspense, useEffect, useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Loader from './utils/loader'
import { City1 } from './assets/models/city1'
import { Hut } from './assets/models/hut'
import { Stairs } from './assets/models/stairs'
import { Tent } from './assets/models/tent'
import { Tent2 } from './assets/models/tent2'
import { Tent3 } from './assets/models/tent3'
import { Tent4 } from './assets/models/tent4'
import { Tent5 } from './assets/models/tent5'
import RandomSite from './utils/randomSite'
// import { Tool } from './assets/models/constTool'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Environment } from '@react-three/drei'
import JEASINGS from "https://esm.sh/jeasings";



function App() {
  const [isContructAdded, setIsContructAdded] = useState(true)
  const camera = useRef();
  const control = useRef();
  function JEasings() {
    useFrame(() => {
      JEASINGS.update();
    });
  }
  const handleKeyDown = (event) => {
    console.log(event.key, " clicked");
    switch (event.key) {
      case "ArrowUp":
        if (Math.abs(camera.current.position.z - 0.2)<5){
          camera.current.position.z -= 0.02;
          control.current.target.z -= 0.02;
        }
        break;
      case "ArrowDown":
        if (Math.abs(camera.current.position.z + 0.2) < 5) {
          camera.current.position.z += 0.02;
          control.current.target.z += 0.02;
        }
        break;
      case "ArrowLeft":
        if (Math.abs(camera.current.position.x - 0.2) < 5){
          camera.current.position.x -= 0.02;
          control.current.target.x -= 0.02;
        }
        break;
      case "ArrowRight":
        if (Math.abs(camera.current.position.x + 0.2) < 5) {
          camera.current.position.x += 0.02;
          control.current.target.x += 0.02;
        }
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


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
      type="reset"
      className="w-full bg-[#eb3d3df9] font-extrabold text-center align-middle cursor-pointer px-3 py-1 m-2 text-lg rounded-lg transition-all hover:opacity-75 hover:bg-slate-700 hover:text-white"
      onClick={() => {
        // console.log(title, " clicked");
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
      <header className="App-header h-[100vh] relative">
        <Canvas className={`w-full h-screen bg-transparent`}>
          <Suspense fallback={<Loader />}>
            <City1 position={[0, -0.5, -0]} scale={0.7} controls={control} />
            {/* <Stairs position={[200,0,400] } scale={0.1} /> */}

            {/* <Tent scale={0.001} position={[-1.5, -0.1, -3]} /> */}
            {/* <Tent2 scale={0.007} position={[-1, -0.1, -3]} /> */}
            {/* <Tent3 scale={0.001} position={[1, -0.1, -3]} /> */}
            <Hut
              scale={0.1}
              position={[2, -0.3, -2.8]}
              // rotation={[-1 * Math.PI, 0, 0]}
            />
            {isContructAdded && <RandomSite />}
            <ambientLight intensity={4} color={"orange"} />
            <Tent5 scale={0.001} position={[3.8, -0.1, 1.8]} />
            {/* <Tool scale={0.08} position={[3, -0.1, 2.5]} /> */}

            <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 6]} />
            <OrbitControls ref={control} target={[0, 0, 0]} />
            {/* <ambientLight intensity={50}/> */}
            <Environment
              files="/hdris/sky.hdr"
              background
              backgroundBlurriness={0}
              backgroundRotation={[0, Math.PI, 0]}
            />
            <JEasings />
          </Suspense>
        </Canvas>
        <div id="ui" className="top-[50px] left-[10px] absolute w-[200px]">
          {buttons}
        </div>
        <div className="absolute bottom-5 right-4 w-fit overflow-hidden flex">
          <button
            className={`w-full  font-bold text-center align-middle cursor-pointer px-1 py-1 m-1 text-lg rounded-lg transition-all hover:opacity-75 hover:bg-slate-700 hover:text-white ${
              isContructAdded ? "bg-slate-700" : "bg-[#1fb3eef9]"
              }`}
            onClick={()=>setIsContructAdded(!isContructAdded)}
          >
            {`${
              isContructAdded ? "Remove" : "Add"
            } Construction Site`}
          </button>
          <button className="w-full bg-[#eeb71ff9] font-bold text-center align-middle cursor-pointer px-1 py-1 m-1 text-lg rounded-lg transition-all hover:opacity-75 hover:bg-slate-700 hover:text-white">
            Add Changes
          </button>
        </div>
      </header>
    </div>
  );
}

export default App

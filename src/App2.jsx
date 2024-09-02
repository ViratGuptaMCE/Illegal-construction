import { Suspense, useEffect, useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Loader from "./utils/loader";
import { City3 } from "./assets/models/city3";
import RandomHut from "./utils/randomHut";
import RandomSite from "./utils/randomSite";
import { House } from "./assets/models/house";
import { House2 } from "./assets/models/house2";
import { House3 } from "./assets/models/house3";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import JEASINGS from "https://esm.sh/jeasings";
import { CONSTR_SITES } from "./constants";
import RandomHouse from "./utils/randomHouse";
import RandomExtension from "./utils/randomExtension";

function checkVisibility(camPos, objPos) {
  const dist = Math.pow(
    Math.pow(camPos.x - objPos[0], 2) +
      Math.pow(camPos.y - objPos[1], 2) +
      Math.pow(camPos.z - objPos[2], 2),
    1 / 2
  );
  console.log(objPos)
  if (dist < 3.5) return true;
  return false;
  // console.log(obj);
}

function App2() {
  const [isContructAdded, setIsContructAdded] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const [isPos, setPos] = useState([0, 0, 0]);
  const [tentNo, setTentNo] = useState(0);

  const camera = useRef();
  const control = useRef();
  function JEasings() {
    useFrame(() => {
      JEASINGS.update();
    });
  }
  // const handleKeyDown = (event) => {
  //   // console.log(event.key, " clicked");
  //   switch (event.key) {
  //     case "ArrowUp":
  //       if (Math.abs(camera.current.position.z - 0.2)<5){
  //         camera.current.position.z -= 0.02;
  //         control.current.target.z -= 0.02;
  //       }
  //       break;
  //     case "ArrowDown":
  //       if (Math.abs(camera.current.position.z + 0.2) < 5) {
  //         camera.current.position.z += 0.02;
  //         control.current.target.z += 0.02;
  //       }
  //       break;
  //     case "ArrowLeft":
  //       if (Math.abs(camera.current.position.x - 0.2) < 5){
  //         camera.current.position.x -= 0.02;
  //         control.current.target.x -= 0.02;
  //       }
  //       break;
  //     case "ArrowRight":
  //       if (Math.abs(camera.current.position.x + 0.2) < 5) {
  //         camera.current.position.x += 0.02;
  //         control.current.target.x += 0.02;
  //       }
  //       break;
  //     default:
  //       break;
  //   }
  //   checkVisibility(camera.current.position, isPos);
  // };

  useEffect(() => {
    if (isChanged) {
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
    const pos = posList[Math.floor(Math.random() * 3)];
    setPos(pos);
    const tentNo = Math.floor(Math.random() * 5) + 1;
    setTentNo(tentNo);}
    // setTentNo(Math.floor(Math.random() * 5) + 1);
  }, [isChanged]);

  useEffect(() => {
    if(isContructAdded){
      const pos = CONSTR_SITES[Math.floor(Math.random() * 3)];
      setPos(pos);
    }
  }, [isContructAdded]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          if (Math.abs(camera.current.position.z - 0.2) < 2.4) {
            camera.current.position.z -= 0.02;
            control.current.target.z -= 0.02;
          }
          break;
        case "ArrowDown":
          if (Math.abs(camera.current.position.z + 0.2) < 2.4) {
            camera.current.position.z += 0.02;
            control.current.target.z += 0.02;
          }
          break;
        case "ArrowLeft":
          if (Math.abs(camera.current.position.x - 0.2) < 2.4) {
            camera.current.position.x -= 0.02;
            control.current.target.x -= 0.02;
          }
          break;
        case "ArrowRight":
          if (Math.abs(camera.current.position.x + 0.2) < 2.4) {
            camera.current.position.x += 0.02;
            control.current.target.x += 0.02;
          }
          break;
        default:
          break;
      }
      if (checkVisibility(camera.current.position, isPos)) {
        setIsButton(true);
      } else {
        setIsButton(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPos]);

  const annotate = [
    {
      title: "Normal View",
      description: "<p>Looking in front from side</p>",
      position: {
        x: 0,
        y: 0,
        z: 4,
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
        y: 2,
        z: 2.5,
      },
      lookAt: {
        x: 0,
        y: 0,
        z: 2.5,
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

  const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };
  return (
    <div className="App h-[100vh]">
      <header className="App-header h-[100vh] relative">
        <Canvas className={`w-full h-screen bg-transparent`}>
          <Suspense fallback={<Loader />}>
            <City3
              position={[-1.4, -70, -1.2]}
              scale={0.05}
              controls={control}
            />
            {isChanged && <RandomHouse pos={isPos} tent={tentNo} />}

            {isContructAdded && <RandomExtension pos={isPos} />}
            {/* <House scale={0.0003} position={[-2.5, -0.3, -1.6]} /> */}
            {/* <House2 scale={0.003} position={[-0.55,-0.5,0.2]} /> */}
            {/* <House2
              scale={0.003}
              position={[-0.65, -0.5, -1.1]}
              rotation={[0, -Math.PI / 2, 0]}
            /> */}
            {/* <House3 scale={0.03} position={[-0, -0.4, 2.45]} /> */}
            <ambientLight intensity={4} />

            <PerspectiveCamera ref={camera} makeDefault position={[0, 0, 4]} />
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
            className={`w-full  font-bold text-center align-middle cursor-pointer px-1 py-1 m-1 text-lg rounded-lg transition-all hover:opacity-75 hover:bg-slate-700 hover:text-white  ${
              isContructAdded ? "bg-slate-700" : "bg-[#1fb3eef9]"
            } ${isChanged ? "pointer-events-none" : ""}`}
            onClick={() => setIsContructAdded(!isContructAdded)}
          >
            {`${isContructAdded ? "Remove" : "Add"} Constructing Site`}
          </button>
          <button
            className={`w-full  font-bold text-center align-middle cursor-pointer px-1 py-1 m-1 text-lg rounded-lg transition-all hover:opacity-75 hover:bg-slate-700 hover:text-white ${
              isChanged ? "bg-slate-700" : "bg-[#eeb71ff9]"
            } ${isContructAdded ? "pointer-events-none" : ""}`}
            onClick={() => setIsChanged(!isChanged)}
          >
            {`${isChanged ? "Remove" : "Add"} Changes`}
          </button>
        </div>
        {isButton && !arraysEqual(isPos, [0, 0, 0]) && (
          <button className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] font-bold text-center align-middle cursor-pointer bg-green-600 px-1 py-1 m-1 text-lg rounded-lg border-4 animate-bounce">
            Send Mail
          </button>
        )}
      </header>
    </div>
  );
}

export default App2;
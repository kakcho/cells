import { Suspense, lazy, useContext, useState } from "react";
import AppContext from "./context/AppContext";
import Loading from "./components/Loading";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Controls from './components/Controls'
import Help from "./components/Help.jsx";

const Grid = lazy(() => import("./components/Grid"));

function Content() {
  const myContext = useContext(AppContext);
  const [cellActive, setCellActive] = useState(false);
  function onSubmit() {
    if (myContext.countX > 250) {
      alert("введите значение меньше 250");
    } else {
      setCellActive(!cellActive);
      myContext.committedFieldsToAdd.current = myContext.countX;
    }
  }
  const [isMoveable, setIsMoveable] = useState(false);

  console.log(myContext)
  const onStop = () => {
    setIsMoveable(true) 
    setTimeout(() => {
      setIsMoveable(false) 
    }, 200);

  }
  return (
    <div className="h-screen flex justify-center w-screen ">
      {!cellActive && (
        <div className="flex flex-col place-content-center justify-center ">
          <h1 className="text-3xl font-bold text-slate-950 ">
            Введите размер сетки:
          </h1>

              <input
                pattern="[0-9]"
                type="number"
                className="border-solid border-2 border-slate-950 w-48 mt-4 flex ml-16"
                value={myContext.countX ? myContext.countX : ''}
                onChange={(e) =>
                  myContext.setCountX(parseInt(e.currentTarget.value, 10))
                }
                max={250}
              />

            <button
            onClick={onSubmit}
            type="submit"
            className="bg-slate-950 hover:bg-slate-700 w-48 h-12 mt-4 ml-16 text-white"
          >
            {cellActive ? "Удалить" : "Потвердить"}
          </button>

        </div>
      )}

      {cellActive && (
        <Suspense fallback={<Loading />}>
        {(  <TransformWrapper initialScale={1}
        disabled={isMoveable}
        minScale={.5}
        maxScale={2}
        limitToBounds={false}
        pinch={{ step: 5 }}
        pan={{disabled:true}}
        doubleClick={{disabled: true, disableOnTarget: "[input]"}}>
            <TransformComponent wrapperClass="w-600 h-600 max-sm:w-450 max-sm:h-450 mt-10vh border-solid border-cyan-700 border-4 border-solid relative" >
              <Grid className="z-40" onStop={onStop} setIsMoveable={setIsMoveable} />
            </TransformComponent>
            <Controls/>
          </TransformWrapper>)}
          {/* <Help/> */}
        </Suspense>
        
      ) }

    </div>
  );
}

export default Content;

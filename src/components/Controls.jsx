import { useControls } from "react-zoom-pan-pinch";

const Controls = () => {
    const { zoomIn, zoomOut, resetTransform } = useControls();
    return (
      <div className="absolute mt-8 w-450 flex flex-row " >
        <button className="h-12 ml-12  pl-4 pr-4 border-cyan-700 border-2 border-solid" onClick={() => zoomIn()}>Увеличить</button>
        <button className="h-12 ml-8 pl-4 pr-4 border-cyan-700 border-2 border-solid" onClick={() => resetTransform()}>Сброс</button>
        <button className="h-12 ml-8 pl-4 pr-4 border-cyan-700 border-2 border-solid" onClick={() => zoomOut()}>Уменьшить</button>

      </div>
    );
  };
export default Controls
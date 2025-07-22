import './App.css';
import { useEffect, useRef, useState } from "react";
import Menu from './components/Menu.jsx';

function App(){
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("black");
  const [lineOpacity, setLineOpacity] = useState(1);

  console.log("App component rendered");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
    console.warn("Canvas not ready yet");
    return;
    }
    canvas.width = 1280;
    canvas.height = 720;

    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = lineColor;
    ctx.globalAlpha = lineOpacity;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;
  }, [lineColor, lineOpacity, lineWidth]);

    const startDrawing = (e) => {
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    setIsDrawing(true);
  };

  const endDrawing = () => {
    ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    ctxRef.current.lineTo(
      e.nativeEvent.offsetX,
      e.nativeEvent.offsetY
    );
    ctxRef.current.stroke();
  };

  return (
     <div className="main">
      <h1 className="word">PAINT APP</h1>
      <Menu
        setLineColor={setLineColor}
        setLineWidth={setLineWidth}
        setLineOpacity={setLineOpacity}
      />
      <canvas
        className="draw-area"
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
        onMouseLeave={endDrawing}
      />
    </div>
  );
}

export default App;

//   return (
//     <>
//     <div className="main">
//       <h1 className="word"> PAINT APP </h1>
    
//     <div className="container">
//       <div className='box'>
//         <label for = "col" className='col1'>color: </label>
//         <input type="color" className="color" name='col'/>

//         <label for = "range1">Brush Width: </label>
//         <input type="range" className='range1' name="range1"></input>

//          <label for = "range2">Brush Opacity: </label>
//         <input type="range" className='range2' name="range2"></input>
//       </div> 
//     </div>
//     </div>
//     </>
//   )
// }

// export default App;
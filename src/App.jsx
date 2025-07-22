import './App.css';


function App(){
  return (
    <>
    <div className="main">
      <h1 className="word"> PAINT APP </h1>
    
    <div className="container">
      <div className='box'>
        <label for = "col" className='col1'>color: </label>
        <input type="color" className="color" name='col'/>

        <label for = "range1">Brush Width: </label>
        <input type="range" className='range1' name="range1"></input>

         <label for = "range2">Brush Opacity: </label>
        <input type="range" className='range2' name="range2"></input>
      </div> 
    </div>
    </div>
    </>
  )
}

export default App;
import React from 'react';


const Menu = ({ setLineColor, setLineWidth,
    setLineOpacity }) => {
    return (
        <>
        <div className="main">
         <div className="container">
      <div className='box'>

        <label htmlFor = "col" className='col1'>color: </label>
        <input type="color"
              className="color" name='col'
              onChange={(e) => {
                    setLineColor(e.target.value);
                }}
         />

        <label htmlFor = "range1">Brush Width: </label>
        <input type="range"
               className='range1'
               name="range1"
                min="3"
                max="20"
                onChange={(e) => {
                    setLineWidth(Number(e.target.value));
                }}
        />

         <label htmlFor = "range2">Brush Opacity: </label>
        <input type="range"
               className='range2'
               name="range2"
                min="1"
                max="100"
                onChange={(e) => {
                    setLineOpacity(Number(e.target.value) / 100);
                    
                }}
        />
      </div> 
            <h1 className="word">PAINT AREA</h1>
    </div>
    </div>
        
        </>
    )
}

export default Menu;
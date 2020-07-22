import React from 'react';
import tinycolor from 'tinycolor2';

export default function ColorGradient(props) {
    // define props
    const { userColor } = props;
    //convert to tiny color
    const tColor = new tinycolor(userColor);
    // generate series of colors
    let colorsArray = tColor.monochromatic(10);

  // Since all you do is return the result of map,
  // you can alternatively write:
  // return colorsArray.map(...)
  //
  // So a nice re-structuring of this code is to define a helper function
  function renderColorBox(color) {
    return (
      <div
        key={color.toHexString()}
        className="boxed"
        style={{
          backgroundColor: color.toHexString(),
          width: "100px",
          height: "100px",
        }}
      />
    );
  }

  // And then use:
  return colorsArray.map(renderColorBox);

  // Nicer still is to accept this function from external code and use a default
  // value. See my example here:
  // https://www.tocode.co.il/blog/2020-07-react-render-props

    // return (
    //     <>
    //         {
    //         colorsArray.map(
    //             color => <div
    //                         key={color.toHexString()}
    //                         className="boxed"
    //                         style={{
    //                             backgroundColor: color.toHexString(),
    //                             width: "100px",
    //                             height: "100px",
    //                         }}
    //                     />
    //         )}
    //     </>
    // )
}

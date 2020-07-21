import React from 'react';
import tinycolor from 'tinycolor2';

export default function ColorGradient(props) {
    // define props
    const { userColor } = props;
    //convert to tiny color
    const tColor = new tinycolor(userColor);
    // generate series of colors
    let colorsArray = tColor.monochromatic(10);

    return (
        <>
            {
            colorsArray.map(
                color => <div
                            key={color.toHexString()}
                            className="boxed"
                            style={{
                                backgroundColor: color.toHexString(),
                                width: "100px",
                                height: "100px",
                            }}
                        />
            )}
        </>
    )
}
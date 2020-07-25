import React from 'react';

const _ = require("lodash")

export default function GrabbingArea(props) {
    // define props
    const { amount, communistIndex, changeScore } = props;

    function selectedTile(isCommunist) {
        changeScore(isCommunist);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            {
                _.range(amount).map(
                    index =>
                        <Box
                            key={index}
                            isCommunist={index === communistIndex ? true : false}
                            onClick={selectedTile}
                        />
                )
            }
        </div>
    )
}

function Box(props) {
    const { isCommunist, onClick } = props;
    const color = isCommunist ? 'red' : 'gray';

    const boxStyle = {
        backgroundColor: color,
        width: "100px",
        height: "100px",
        border: "1px solid black",
    }

    function scoreAndShuffle() {
        onClick(isCommunist);
    }

    return (
        <div className="boxed" style={boxStyle} onClick={scoreAndShuffle} />
    )
}
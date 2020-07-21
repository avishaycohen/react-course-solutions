import React from 'react';

export default function GrabbingArea(props) {
    // define props
    const { tiles, changeScore, randomRed } = props;

    function selectedTile(isCommunist) {
        changeScore(isCommunist);
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            {
                tiles.map(
                    tile =>
                        <Box
                            key={Math.random()}
                            isCommunist={tile}
                            onClick={selectedTile}
                            randomRed={randomRed}
                            tiles={tiles}
                        />
                )
            }
        </div>
    )
}

function Box(props) {
    const { isCommunist, onClick, randomRed} = props;
    const color = isCommunist ? 'red' : 'gray';

    const boxStyle = {
        backgroundColor: color,
        width: "100px",
        height: "100px",
        border: "1px solid black",
    }

    function scoreAndShuffle() {
        onClick(isCommunist);
        randomRed();
    }

    return (
        <div className="boxed" style={boxStyle} onClick={scoreAndShuffle} />
    )
}
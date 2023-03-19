import React from "react"

type mainPropsType ={
    onChange: any;
    value: number;
    min: number;
    max: number;
    step: number;
    width: string;
}

function Range({onChange, value, min, max, step, width}:mainPropsType){
    return(
        <div>
            <input onChange={onChange} type="range" value={value} min={min} max={max} step={step} />
        </div>
    )
}

export default Range;
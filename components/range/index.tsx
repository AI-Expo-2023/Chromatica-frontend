import React from "react"

type mainPropsType ={
    onChange: any;
    value: number;
    min: number;
    max: number;
    step: number;
    width: string;
    label: string;
}

function Range({onChange, value, min, max, step, width, label}:mainPropsType){
    return(
        <div>
            <div>
            {label}{value}
            </div>
            <input onChange={onChange} type="range" value={value} min={min} max={max} step={step} />
        </div>
    )
}

export default Range;
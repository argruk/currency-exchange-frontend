import React, {useEffect, useState} from "react";
import {convert} from "../../BusinessLogic/Converter";

//TODO: Fix the bug with floating point
//TODO: Fix transition from one currency to another

export default function DoubleInputElements({newFactor}){
    const [toEuro, setToEuro] = useState("0");
    const [toCurrency, setToCurrency] = useState("0");
    const [conversionFactor, setConversionFactor] = useState(newFactor);

    useEffect(()=>{
        setConversionFactor(newFactor);
    },[newFactor]);

    function onToEuroChange(event){
        event.persist();
        let input;
        if (event.target.value !== ""){
            input = parseFloat(event.target.value);
            setToCurrency(input.toString());
            setToEuro(convert(input,conversionFactor).toString());
        }else {
            input = 0;
            setToCurrency(input.toString());
            setToEuro(input.toString());
        }
    }

    function onToCurrencyChange(event) {
        event.persist();
        let input ;
        if (event.target.value !== ""){
            input = parseFloat(event.target.value);
            setToCurrency(convert(input,1/conversionFactor).toString());
            setToEuro(input.toString());
        }else {
            input = 0;
            setToCurrency(input.toString());
            setToEuro(input.toString());
        }
    }

    return(<div className="row justify-content-center" style={{marginBottom:"1%"}}>
        <div className="col-lg-2">
            <input className="form-control form-control-lg" value={toCurrency} onChange={onToEuroChange}/>
        </div>
        <div className="col-1 align-self-center" style={{fontSize:"30px"}}>
            to
        </div>
        <div className="col-lg-2 align-self-center">
            <input className="form-control form-control-lg toEur" value={toEuro} onChange={onToCurrencyChange}/>
        </div>
    </div>);
}
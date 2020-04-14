import React, {useEffect} from 'react';

export default function Selector({currencyArray,updateFactor,updateCurrencyToSend}) {

    function onSelectedChange(event){
        event.persist();
        updateFactor(currencyArray[event.target.selectedIndex].conversionFactor);
        updateCurrencyToSend(currencyArray[event.target.selectedIndex]);
    }

    useEffect(()=>{
        console.log(currencyArray, "this is the array needed");
        if ((currencyArray[0] !== undefined)){
            updateCurrencyToSend(currencyArray[0]);
            updateFactor(currencyArray[0].conversionFactor);
        }
    },[currencyArray]);

    return (
        <div className="row justify-content-center" >
            <div className="col-lg-2">
                <select className="form-control form-control-lg fromCurrency" onChange={onSelectedChange}>
                    {currencyArray.map((e,key)=>{
                        return <option key={key} defaultValue={e.fullCurrencyName}>{e.shortCurrencyName}</option>
                    })}
                </select>
            </div>
            <div className="col-1"></div>

            <div className="col-lg-2 align-self-center">
                <select className="form-control form-control-lg toEuro">
                    <option selected defaultValue="Euro">EUR</option>
                </select>
            </div>
        </div>);
}
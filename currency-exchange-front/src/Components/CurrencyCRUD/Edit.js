import RequestMaker from "../../DAL/ServerRequest";
import {useHistory} from "react-router-dom";
import React, {useState} from "react";


export default function EditComponent({currency}){
    const worker = new RequestMaker();
    const history = useHistory();

    const[shortCurrencyName,setShortCurrencyName] = useState(currency.shortCurrencyName);
    const[longCurrencyName,setLongCurrencyName] = useState(currency.fullCurrencyName);
    const[conversionFactor,setConversionFactor] = useState(currency.conversionFactor);
    const[id,setId] = useState(currency.id);


    const updateHandler = (event) => {
        worker.updateCurrency(id,longCurrencyName,shortCurrencyName,conversionFactor);
        window.location.reload();
    };

    return (
        <div className="container " style={{marginTop: "10%",marginBottom:"15%"}}>
                <div className="form-group row justify-content-center">
                    <div className="col-lg-6">
                        <input className="form-control"
                               placeholder={`${longCurrencyName}`}
                               onChange={(event)=>{event.persist();setLongCurrencyName(event.target.value);}}
                        />
                    </div>
                </div><div className="form-group row justify-content-center">
                <div className="col-lg-6">
                    <input className="form-control"
                           placeholder={`${shortCurrencyName}`}
                           onChange={(event)=>{event.persist();setShortCurrencyName(event.target.value);}}
                    />
                </div>
            </div>
                <div className="form-group row justify-content-center">
                    <div className="col-lg-6">
                        <input type="number" step="0.01" className="form-control"
                               placeholder={`${conversionFactor}`}
                               onChange={(event)=>{event.persist();setConversionFactor(parseFloat(event.target.value));}}
                        />
                    </div>
                </div>
                <button className="btn btn-success" onClick={updateHandler}>Click to update</button>
        </div>
    );
}
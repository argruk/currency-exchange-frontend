import React, {useState} from 'react';
import RequestMaker from "../../DAL/ServerRequest";
import {useHistory} from "react-router-dom";

export default function AddPage(){

    const worker = new RequestMaker();
    const history = useHistory();

    const[shortCurrencyName,setShortCurrencyName] = useState("");
    const[longCurrencyName,setLongCurrencyName] = useState("");
    const[conversionFactor,setConversionFactor] = useState(0);


    const submissionHandler = (event) =>{
        event.preventDefault();
        event.persist();
        worker.addCurrency(longCurrencyName,shortCurrencyName,conversionFactor);
        history.push("/homepage");
    };


    return(
        <div className="container" style={{marginTop: "10%",marginBottom:"15%"}}>
            <div className="form-group row justify-content-center">
                <h1>You can add your currency here:</h1>
            </div>
            <form>
                <div className="form-group row justify-content-center">
                    <div className="col-lg-4">
                        <input className="form-control"
                               placeholder="Enter long name for currency (E.x. Euro)"
                               onChange={(event)=>{event.persist();setLongCurrencyName(event.target.value);}}
                        />
                    </div>
                </div><div className="form-group row justify-content-center">
                <div className="col-lg-4">
                    <input className="form-control"
                           placeholder="Enter short name for currency (E.x. EUR)"
                           onChange={(event)=>{event.persist();setShortCurrencyName(event.target.value);}}
                    />
                </div>
            </div>
                <div className="form-group row justify-content-center">
                    <div className="col-lg-4">
                        <input type="number" step="0.01" className="form-control"
                               placeholder="Enter conversion factor for currency (X/EUR)"
                               onChange={(event)=>{event.persist();setConversionFactor(parseFloat(event.target.value));}}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={submissionHandler}>Submit</button>
            </form>
        </div>
    );
}
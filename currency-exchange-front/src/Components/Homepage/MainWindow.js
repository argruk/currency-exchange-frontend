import React, {useEffect, useState} from "react";
import DoubleInputElements from "./InputField";
import Selector from "./ConverterSelectField";
import RequestMaker from "../../DAL/ServerRequest";
import DetailsPage from "../CurrencyCRUD/Details";
import Popup from "reactjs-popup";


export default function MainWindow() {

    const request = new RequestMaker();

    const[currencies, setCurrency] = useState([]);
    const[conversionFactor,setConversionFactor] = useState(1);
    const[currencyToSend, setCurrencyToSend] = useState({});
    const[showEdit,setShowEdit] = useState(false);

    const onShowButtonClick = () =>{
        //setShowEdit(prevState => !prevState);

    };


    useEffect(() => {
        request.getAllCurrencies(setCurrency);
    },[]);

        return(
            <div className="container" style={{marginTop: "20%"}}>
                <DoubleInputElements newFactor={conversionFactor}/>
                <Selector currencyArray={currencies} updateFactor={setConversionFactor} updateCurrencyToSend={setCurrencyToSend}/>
                <Popup modal trigger={<button className="btn btn-info" onClick={onShowButtonClick} style={{marginTop: "15%"}}>Show/Hide edit options</button>}>
                    <DetailsPage currency={currencyToSend}/>
                </Popup>
            </div>
        );

}

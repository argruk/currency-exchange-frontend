import React from "react";
import {useHistory} from 'react-router-dom';
import RequestMaker from "../../DAL/ServerRequest";
import EditComponent from "./Edit";

export default function DetailsPage({currency}){
    const worker = new RequestMaker();
    const history = useHistory();

    const deleteHandler = (event) => {
        worker.deleteCurrency(currency.id);
        //history.push("/homepage");
        window.location.reload();

    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <EditComponent currency={currency}/>
                </div>
            </div>

            <button className="btn btn-danger" onClick={deleteHandler}>Click to Delete</button>
        </div>
    );
}
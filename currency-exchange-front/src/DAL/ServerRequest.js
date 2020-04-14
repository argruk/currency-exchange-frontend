import axios from 'axios';


const API_URL = "http://localhost:8080/api";

export default class RequestMaker {

    async getAllCurrencies(setCurrency){
            const result = await axios(
                `${API_URL}/homepage`
            );
            setCurrency(result.data);
    }
    async getCurrency(id,setCurrency){
        const result = await axios(
            `${API_URL}/homepage/${id}`
        );
        setCurrency(result.data);
    }

    async addCurrency(longCurrencyName, shortCurrencyName, conversionFactor){

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullCurrencyName: longCurrencyName,
                shortCurrencyName:shortCurrencyName,
                conversionFactor: conversionFactor})
        };
        await fetch(`${API_URL}/homepage/addCurrency`,requestOptions);
    }

    async updateCurrency(id,longCurrencyName, shortCurrencyName, conversionFactor){

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                fullCurrencyName: longCurrencyName,
                shortCurrencyName:shortCurrencyName,
                conversionFactor: conversionFactor})
        };
        await fetch(`${API_URL}/homepage/edit`,requestOptions);
    }

    async deleteCurrency(id){
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:id})
        };
        await fetch(`${API_URL}/homepage/currencies`,requestOptions);

    }
}
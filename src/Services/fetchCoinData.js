import axiosInstance from "../helpers/axiosinstance";

async function fetchCoinData(){
    try{
        const response = await axiosInstance.get('/coins/markets?vs_currency=usd');
        console.log(response);
        return response;
    }
    catch(error){
        console.error(error);
        return null;
        
    }
}
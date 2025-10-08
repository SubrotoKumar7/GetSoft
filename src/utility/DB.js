import { toast } from "react-toastify";

const getLSData = () => {
    const getData = localStorage.getItem('list');
    if(getData){
        const data = JSON.parse(getData);
        return data;
    } else{
        return [];
    }
}

const setLSData = (id, title) => {
    let oldData = getLSData();
    
    
    if(oldData.includes(id)){
        return;
    }
    else{
        const currentData = [...oldData, id];
        const str = JSON.stringify(currentData);
        localStorage.setItem('list', str);
        toast.success(`${title} install successfully`, {position: "top-center"});
    }
}

export {getLSData, setLSData}

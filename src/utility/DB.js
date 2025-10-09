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
        toast.success(`${title} install successfully`, {position: "top-center"});
        const currentData = [...oldData, id];
        const str = JSON.stringify(currentData);
        localStorage.setItem('list', str);
    }
}

const removeLSData = (id) => {
    const oldData = getLSData();
    const filter = oldData.filter(appId => appId !== String(id));
    const str = JSON.stringify(filter);
    localStorage.setItem('list', str);
}

export {getLSData, setLSData, removeLSData}

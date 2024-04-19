import React from "react";
import { useParams } from "react-router-dom";
import { getDeviceById } from "../services/deviceService";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import './Page.css';
import { Device } from "../types";

export function DeviceDetails(){
    const[device, setDevice] = React.useState<Device[]>([{
        id: '',
        custId: '',
        name: '',
        number: ''
    }]);

    const{ custId } = useParams();

    React.useEffect(() => {
        if(!custId){
            return;
        }
        getDeviceById(custId).then(response =>{
            setDevice(response.data)
        });
    }, [setDevice, custId])

    function register(){
        var printThis = "";
        for(var i = 0; i < device.length; i++){
            printThis += "||| Device" + i + " Name: " + device[i].name + " Device " + i +" Number: " + device[i].number + " |||";
        }
        return printThis;
    }

    return(
        <>
        <Header />
        <div className="centerText rose_quartz">
            
            <a className="btn btn-info button white btn-lg" href="/">Home</a>
            <a className='btn btn-info button white btn-lg' href="/Device">Back To Devices</a>
            <h2>Customer Device(s) Details</h2>
            <dl className="jet white_text">
                <br />
                {register()}
            </dl>
            <p className="flexbox">Too blank here? Buy more devices. :)</p>
        </div>
        <Footer />
        </>
    )
}
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
            printThis += "Device " + i + " Name: " + device[i].name + " Device " + i +" Number: " + device[i].number + "\n";
        }
        return printThis;
    }

    return(
        <>
        <Header />
        <div className="centerText">
            <h2>Customer Device(s) Details</h2>
            <a className="btn btn-info button rose_quartz btn-lg" href="/">Home</a>
            <a className='btn btn-info button rose_quartz btn-lg' href="/Device">Devices</a>
            <dl>
                {register()}
            </dl>
        </div>
        <Footer />
        </>
    )
}
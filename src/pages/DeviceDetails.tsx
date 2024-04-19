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


    return(
        <>
        <Header />
        <div className="centerText">
            <h2>Customer Device Details</h2>
            <a className="btn btn-info button rose_quartz btn-lg" href="/">Home</a>
            <a className='btn btn-info button rose_quartz btn-lg' href="/Device">Devices</a>
            <dl>
                Device Name: {device[0].name}
            </dl>
        </div>
        <Footer />
        </>
    )
}
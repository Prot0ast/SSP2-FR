import React from "react";
import { useParams } from "react-router-dom";
import { getDeviceById } from "../services/deviceService";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
import './Page.css';

export function DeviceDetails(){
    const[device, setDevice] = React.useState({
        id: '',
        custId: '',
        name: '',
        number: ''
    });

    const{deviceId} = useParams();

    React.useEffect(() => {
        if(!deviceId){
            return;
        }
        getDeviceById(device.id).then(response =>{
            setDevice(response.data)
        });
    }, [setDevice, deviceId])

    return(
        <>
        <Header />
        <div className="centerText">
            <h2>Customer Device Details</h2>
            <a className="btn btn-info button rose_quartz btn-lg" href="/">Home</a>
            <a className='btn btn-info button rose_quartz btn-lg' href="/Customer/$:bill">Bill Breakdown</a>
            <a className='btn btn-info button rose_quartz btn-lg' href="/Device">Devices</a>
            <dl>
                <dt>ID</dt>
                <dd>{device.id}</dd>
                <dt>Customers ID</dt>
                <dd>{device.custId}</dd>
                <dt>Device Name</dt>
                <dd>{device.name}</dd>
                <dt>Device Phone Number</dt>
                <dd>{device.number}</dd>
            </dl>
        </div>
        <Footer />
        </>
    )
}
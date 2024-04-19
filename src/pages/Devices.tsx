import React from "react"
import { Device } from "../types"
import { getAllDevices } from "../services/deviceService";
import { DeviceTableRow } from "../components/DeviceTableRow";
import { Footer } from "../components/Footer.component";
import { Header } from "../components/Header.component";
export function Devices() {
    const [devices, setDevices] = React.useState(new Array<Device>());

    let newDevice = {id: "", custId: "", name: "", number: ""}

    React.useEffect(() => {
        getAllDevices().then(response => {
            setDevices(response.data)
        });
    }, [setDevices])
    return(
        <>
        <Header />
        <div className="rose_quartz centerText">
            <a className="btn btn-info button white btn-lg" href="/">Home</a>
            <h2>Devices</h2>
            <table className="table table-responsive table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {devices.map((devices) => (<DeviceTableRow key={devices.id} device={devices} />))}
                </tbody>
            </table>
        <Footer />
        </div>

        </>
    )
}



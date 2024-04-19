import React from "react";
import { JsxElement } from "typescript";
import { Device } from "../types";
import '../pages/Pallete.css';

interface DeviceTableRowProps {
    device: Device
}

export function DeviceTableRow({device}: DeviceTableRowProps): JSX.Element{
    let deviceLink = `/Device/Customer/${device.custId}`;

    return(
        <tr>
            <td>{device.id}</td>
            <td>{device.custId}</td>
            <td>{device.name}</td>
            <td>{device.number}</td>
            <td><a className="btn btn-info button rose_quartz" href={deviceLink}>Click Here</a></td>
        </tr>
    )
}
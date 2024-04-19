import axios from "axios";
import { Device } from "../types";

export const http = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-type': 'application/json',
    },
});

const getAllDevices = async() => {
    return await http.get<Array<Device>>('/Device');
}

const getDeviceById = async (custId: string) => {
    return await http.get<Device[]>(`/Device/${custId}`)
};

export {getDeviceById, getAllDevices}
import axios from "axios";
import { useEffect, useState } from "react";

export interface Device {
    id: number,
    name: string
}

export function useDeivceHook () {
    const [devices, setDevices] = useState<Device[]>([]);
    
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST}/device`).then((response) => {
            setDevices(response.data);
        });
    }, []);

    return devices;
}
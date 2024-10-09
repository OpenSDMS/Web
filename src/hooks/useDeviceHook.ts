import axios from "axios";
import { useEffect, useState } from "react";

export interface Device {
    id: number,
    name: string,
    createdAt: string,
    user: string,
    type: "REPOSITROY" | "DEVICE" | "RAWDATA",

}

export function useDeivceHook () {
    const [devices, setDevices] = useState<Device[]>([]);
    
    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_API_HOST as string}/api/object/device`).then((response) => {
            response.data.result = response.data.result.map((item: any) => {
                const date = new Date(item.createdAt);
                return {
                    ...item,
                    createdAt: `${(date.getMonth() + 1)}월 ${date.getDate()}일`
                }
            });
            setDevices(response.data.result);
        });
    }, []);

    return devices;
}
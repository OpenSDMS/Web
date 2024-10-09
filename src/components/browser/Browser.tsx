"use client"

import { useEffect, useState }  from "react";
import BrowserMainHeader        from "./BrowserMainHeader";
import BrowserFunctionHeader    from "./BrowserFunctionHeader";
import BrowserBreadCrumb        from "./BrowserBreadCrumb";
import BrowserTable             from "./table/BrowserTable";    
import axios from "axios";
import { useDeivceHook } from "@/hooks/useDeviceHook";

export interface TableData {
    id: number,
    type: "REPOSITORY" | "DEVICE" | "DATA"
    name: string,
    updatedAt: string,
    modifier: string
}

export default function Browser () {

    const [data, setData] = useState<TableData[]>();
    const [path, setPath] = useState<string[]>(["모든 장비"]);
    const devices = useDeivceHook();

    useEffect(() => {
        console.log(devices);
    }, [devices]);

    return (
        <div>
            <BrowserMainHeader title="SDMS Cluster 01" />
            <BrowserFunctionHeader />
            { path    && <BrowserBreadCrumb path={path} />}
            { devices && <BrowserTable data={devices}   />}
        </div>
    );
}
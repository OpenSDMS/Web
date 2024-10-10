"use client"

import { useEffect, useState }  from "react";
import BrowserMainHeader        from "./BrowserMainHeader";
import BrowserFunctionHeader    from "./BrowserFunctionHeader";
import BrowserBreadCrumb        from "./BrowserBreadCrumb";
import BrowserTable             from "./table/BrowserTable";    
import { useFetchObject } from "@/hooks/useFetchObject";


export default function Browser () {

    const [data, setData] = useState<any[]>();
    const [path, setPath] = useState<string[]>(["모든 장비"]);
    
    useEffect(() => {
        setData(useFetchObject());
    }, []);

    return (
        <div>
            <BrowserMainHeader title="SDMS Cluster 01" />
            <BrowserFunctionHeader />
            { path && <BrowserBreadCrumb path={path} />}
            { data && <BrowserTable data={data}      />}
        </div>
    );
}
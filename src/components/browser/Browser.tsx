"use client"

import { useEffect, useState }  from "react";
import BrowserMainHeader        from "./BrowserMainHeader";
import BrowserFunctionHeader    from "./BrowserFunctionHeader";
import BrowserBreadCrumb        from "./BrowserBreadCrumb";
import BrowserTable             from "./table/BrowserTable";

export default function Browser () {

    const [path, setPath] = useState<string[]>(["SDMS"]);
    const [data, setData] = useState();

    useEffect(() => {
        
    }, []);

    return (
        <div>
            <BrowserMainHeader title="Agilent UPLC702" />
            <BrowserFunctionHeader />
            <BrowserBreadCrumb path={path} />
            <BrowserTable />
        </div>
    )
}
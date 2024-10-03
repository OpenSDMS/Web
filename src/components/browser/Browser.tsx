"use client"

import { useState } from "react";
import BrowserMainHeader from "./BrowserMainHeader";
import BrowserFunctionHeader from "./BrowserFunctionHeader";
import BrowserBreadCrumb from "./BrowserBreadCrumb";

export default function Browser () {
    
    const [path, setPath] = useState<string[]>();

    return (
        <div>
            <BrowserMainHeader title="Agilent UPLC702" />
            <BrowserFunctionHeader />
            <BrowserBreadCrumb />
        </div>
    )
}
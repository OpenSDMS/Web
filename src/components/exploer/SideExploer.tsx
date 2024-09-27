"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image, { StaticImageData } from "next/image"
import React from "react"

import computerIcon  from '@/resources/interface/computer.png';
import addUserIcon   from '@/resources/interface/add-user.png';
import settingDbIcon from '@/resources/interface/database-config.png';
import accessIcon    from '@/resources/interface/access.png';
import serverIcon    from '@/resources/interface/server.png';


import { ScrollArea } from "../ui/scroll-area";
import Link from "next/link";
import TreeView from "../treeview/TreeView";

const data: any = [
    {
        id: 1,
        name: '/',
        icon: serverIcon,
        children: [
            {
                id: 2, 
                name: 'Particle Counter',
                children: [
                    {
                        id: 3, 
                        name: '701',
                        children: []
                    },
                    {
                        id: 3, 
                        name: '702',
                        children: []
                    },
                    {
                        id: 3, 
                        name: '703',
                        children: []
                    }
                ]
            },
            {
                id: 2, 
                name: 'Agilent UPLC',
                children: [
                    {
                        id: 3, 
                        name: '701',
                        children: []
                    },
                    {
                        id: 3, 
                        name: '702',
                        children: []
                    },
                    {
                        id: 3, 
                        name: '703',
                        children: []
                    }
                ]
            },
        ]
    },
]


export default function SideExploer () {
    return (
        <ScrollArea className="max-w-full h-full">
            {/* defaultValue={["item-1", "item-2"]} */}
            <Accordion type="multiple">
                <AccordionItem value="item-1" className="shadow-md bg-gradient-to-b from-[#4b4b4b] to-[#494949] text-white">
                    <AccordionTrigger className="px-4 font-bold text-[#e8e8e8] text-[13px] hover:no-underline">Device</AccordionTrigger>
                    <AccordionContent>
                        <AccordionContentWrapper>
                            <AccordionContentListItem icon={computerIcon} value="Agilent (UPLC702)" />
                            <AccordionContentListItem icon={computerIcon} value="Particle Counter(UPLC702)" />
                            <AccordionContentListItem icon={computerIcon} value="Particle Counter(UPLC705)" />
                            <AccordionContentListItem icon={computerIcon} value="Agilent (UPLC702)" />
                            <AccordionContentListItem icon={computerIcon} value="Particle Counter(UPLC702)" />
                            <AccordionContentListItem icon={computerIcon} value="Particle Counter(UPLC705)" />
                            <AccordionContentListItem icon={computerIcon} value="Agilent (UPLC702)" />
                        </AccordionContentWrapper>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-gradient-to-b from-[#4b4b4b] to-[#494949] text-white">
                    <AccordionTrigger className="px-4 font-bold text-[#e8e8e8] text-[13px] hover:no-underline">Repository</AccordionTrigger>
                    <AccordionContent>
                        <AccordionContentWrapper>
                            <TreeView 
                                data={data} />
                        </AccordionContentWrapper>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-gradient-to-b from-[#4b4b4b] to-[#494949] text-white">
                    <AccordionTrigger className="px-4 font-bold text-[#e8e8e8] text-[13px] hover:no-underline">System Management</AccordionTrigger>
                    <AccordionContent>
                        <AccordionContentWrapper>
                            <AccordionContentListItem icon={addUserIcon}   value="Device settings"  href="/admin/user" />
                            <AccordionContentListItem icon={settingDbIcon} value="Repository settings"  href="/admin/repository" />
                            <AccordionContentListItem icon={computerIcon}  value="User settings" href="/admin/device" />
                            <AccordionContentListItem icon={accessIcon}    value="Authority settings" href="/admin/authority" />
                            <AccordionContentListItem icon={accessIcon}    value="View logs" href="/admin/authority" />
                            <AccordionContentListItem icon={accessIcon}    value="System status" href="/admin/authority" />
                        </AccordionContentWrapper>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </ScrollArea>
    )
}


function AccordionContentListItem ({icon, value, href="#", isOnline=false}: {icon: StaticImageData, value: string, isOnline?: boolean, href?: string}) {
    return (
        <Link href={href}>
            <div className="flex items-center space-x-2 p-1 rounded hover:bg-[#686f76] cursor-pointer">
                <Image src={icon} alt="" width={12} height={15} />
                <p className="text-[12px]">{value}</p>
            </div>
        </Link>
    )
}


function AccordionContentWrapper ({children}: {children: any}) {
    return (
        <div className="p-2 py-3 bg-[#404040]">
            <div className="w-full rounded p-2 bg-[#333333] text-white shadow-lg">
                {children}
            </div>
        </div>
    )
}
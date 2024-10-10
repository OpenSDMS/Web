"use client"

import Image, { StaticImageData } from "next/image"

import shareIcon from '@/resources/share.svg';
import linkIcon  from '@/resources/link.svg';
import addIcon   from '@/resources/addIcon.png';
import arrowDown from '@/resources/arrow-down.png';
import repositoryIcon from '@/resources/folder.png';
import deviceIcon from '@/resources/device.png';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useState } from "react";
import ObjectDialogWrapper from "../dialog/ObjectDialogWrapper";


export default function BrowserFunctionHeader () {

    const [deviceIsOpen, setDeviceIsOpen] = useState<boolean>(false);
    const [repositoryIsOpen, setRepositoryIsOpen] = useState<boolean>(false);

    return (
        <div style={{borderBottom: '1px solid #ebebeb'}}>
            <div className="flex items-center min-h-[44px] px-[32px] space-x-3 font-normal">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex justify-center items-center text-white font-semibold rounded-[2px] px-[12px] min-h-[32px] bg-[#004E8C] space-x-1">
                            <Image src={addIcon} alt="" className="w-[18px] h-[18px]" />
                            <p className="text-[14px]">새로 만들기</p>
                            <Image src={arrowDown} alt="" className="w-[18px] h-[18px] rotate-180" />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <div>
                            <DropdownMenuItem className={"space-x-2"} onClick={() => setRepositoryIsOpen(true)}>
                                <Image src={repositoryIcon} alt="" className="h-[18px] w-[18px]" />
                                <p className="pl-1">저장소 추가하기</p>
                            </DropdownMenuItem>
                        </div>
                        <div>
                            <DropdownMenuItem className={"space-x-2"} onClick={() => setDeviceIsOpen(true)}>
                                <Image src={deviceIcon} alt="" className="h-[15px] w-[23px]" />
                                <p>새로운 장치</p>
                            </DropdownMenuItem>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Function>
                    <Image src={shareIcon} alt="" className="h-[18px] w-[18px]" />
                    <p className="text-[14px]">{"공유"}</p>
                </Function>
                <Function>
                    <Image src={linkIcon} alt="" className="h-[18px] w-[18px]" />
                    <p className="text-[14px]">{"링크 복사"}</p>                    
                </Function>
            </div>
            
            <ObjectDialogWrapper 
                deviceIsOpen={deviceIsOpen}
                setDeviceIsOpen={setDeviceIsOpen}
                repositoryIsOpen={repositoryIsOpen}
                setRepositoryIsOpen={setRepositoryIsOpen}
            />
        </div>
    )
}


function Function ({children, exec}: {children: any, exec?: string}) {
    return (
        <div className="flex min-h-[32px] items-center cursor-pointer hover:bg-slate-300 space-x-2 rounded-sm px-2">
            {children}
        </div>
    )
}

import Image, { StaticImageData } from "next/image"

import shareIcon from '@/resources/share.svg';
import linkIcon  from '@/resources/link.svg';
import addIcon   from '@/resources/addition.svg';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function BrowserFunctionHeader () {
    return (
        <div style={{borderBottom: '1px solid #ebebeb'}}>
            <div className="flex items-center min-h-[44px] px-[32px] space-x-3 font-normal">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="flex justify-center items-center text-white font-semibold rounded-[2px] px-[12px] min-h-[32px] bg-[#004E8C]">
                            <Image src={addIcon} alt="" className="" />
                            <p className="text-[14px]">새로 만들기</p>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>새로운 장치</DropdownMenuItem>
                        <DropdownMenuItem>저장소 추가하기</DropdownMenuItem>
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
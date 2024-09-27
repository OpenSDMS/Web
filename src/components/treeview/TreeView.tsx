import Image, { StaticImageData } from "next/image"

import databaseIcon from '@/resources/interface/database.png';

export interface TreeViewData {
    id: number,
    name: string,
    icon?: StaticImageData,
    children: TreeViewData[]
}


export default function TreeView ({data, onSelect}: {data: any, onSelect?: any}) {    
    return (
        <div>
            {data.map((item: TreeViewData) => <Node item={item} onSelect={onSelect} />)}
        </div>
    )
}


function Node ({item, onSelect}: any) {
    return (
        <div className="cursor-pointer p-[1px]">
            {item.icon ? 
                <div onClick={() => onSelect(item)} className="p-[1px] px-1 flex items-center space-x-2 rounded hover:bg-[#686f76] cursor-pointer">
                    <Image src={item.icon} alt="" className="h-[14px] w-[12px]" />
                    <p>{item.name}</p>
                </div> :
                <div onClick={() => onSelect(item)} className="p-[1px] px-2 flex items-center space-x-2 rounded hover:bg-[#686f76] cursor-pointer">
                    <Image src={databaseIcon} alt="" className="h-[14px] w-[11px]" />
                    <p>{item.name}</p>
                </div>}

            {item.children && item.children.length > 0 && (
                <div className="pl-[18px] text-[12px]">
                    {item.children.map((children: any) => ( <Node item={children} onSelect={onSelect}/>))}
                </div>
            )}
        </div>
    )
}
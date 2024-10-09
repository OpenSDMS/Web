
"use client"

import Image from "next/image";

import documentIcon from '@/resources/document.svg';
import folderIcon   from '@/resources/folder.png';
import deviceIcon   from '@/resources/device.png';

export type ColumnsType = {
    type: string,
    name: string,
    createdAt: string,
    user: string,
    id: string
}

export const columns = [
    {
        accessorKey: "type",
        header: () => <Image src={documentIcon} alt="" className="w-[20px] h-[16px]" />,
        size: 10,
        cell: ({cell, row}: any) => {
            const type = row.original.type || "REPOSITORY";
            return (
                <div>
                    { type === "REPOSITORY" && (<Image alt="" src={folderIcon} className="h-[22px] w-[22px]" />)}
                    { type === "DEVICE"     && (<Image alt="" src={deviceIcon} className="h-[17px] w-[29px]" />)}
                    { type === "RAWDATA"    && (<Image alt="" src={folderIcon} className="h-[22px] w-[22px]" />)}
                </div>
            );
        }
    },
    {
        accessorKey: "name",
        header: "이름",
        size: 150,
    },
    {
        accessorKey: "createdAt",
        header: "수정된 날짜",
        size: 35,
    },
    {
        accessorKey: "user",
        header: "수정한 사람",
    },
    {
        accessorKey: "id",
        header: "id",
        size: 0,
        ColumnVisibility: false,
    }
];
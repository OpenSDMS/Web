
"use client"

import Image from "next/image";
import documentIcon from '@/resources/document.svg';

export type ColumnsType = {
    type: string,
    name: string,
    updatedAt: string,
    modifier: string
}

export const columns = [
    {
        accessorKey: "type",
        header: () => <Image src={documentIcon} alt="" className="w-[20px] h-[16px]" />,
    },
    {
        accessorKey: "name",
        header: "이름",
    },
    {
        accessorKey: "updatedAt",
        header: "수정된 날짜",
    },
    {
        accessorKey: "modifier",
        header: "수정한 사람",
    },
];
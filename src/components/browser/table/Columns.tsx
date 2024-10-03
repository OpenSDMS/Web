
"use client"

import { ColumnDef } from "@tanstack/react-table";


export type ColumnsType = {
    type: string,
    name: string,
    updatedAt: string,
    modifier: string
}

export const columns: ColumnDef<ColumnsType>[] = [
    {
        accessorKey: "type",
        header: "type"
    },
    {
        accessorKey: "name",
        header: "이름"
    },
    {
        accessorKey: "updatedAt",
        header: "수정된 날짜"
    },
    {
        accessorKey: "modifier",
        header: "수정한 사람"
    },
];
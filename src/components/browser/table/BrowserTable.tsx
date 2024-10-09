
"use client"

import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { columns } from "./Columns";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BrowserTable ({data}: {data: any}) {

    const table = useReactTable({
        data: data,
        columns,
        initialState: {
            columnVisibility: {
                id: false
            }
        },
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div>
            <div className="px-[32px]">
            <Table style={{ tableLayout: 'fixed', width: '100%' }}>
                <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="w-full">
                    {headerGroup.headers.map((header) => {
                        return (
                        <TableHead key={header.id} 
                            style={{ width: `${header.getSize()}px` }}
                            className={cn(`font-bold text-[#323130] text-[13px]`)}>
                            { header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext())}
                        </TableHead>
                        )
                    })}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                    <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="text-[14px] py-[12px]" onClick={() => console.log(row.original.id)}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                        ))}
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            </div>
        </div>
    )
}
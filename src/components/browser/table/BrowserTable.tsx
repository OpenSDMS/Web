
"use client"

import {
    ColumnDef,
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
   
const tempData = [
    { type: "file", name: "rawdata01.erp", updatedAt: "5월 1일",  modifier: "Min, Daehong" },
    { type: "file", name: "rawdata02.erp", updatedAt: "3월 1일",  modifier: "Min, Daehong" },
    { type: "file", name: "rawdata01.erp", updatedAt: "7월 1일",  modifier: "Min, Daehong" },
    { type: "file", name: "rawdata01.erp", updatedAt: "9월 1일",  modifier: "Min, Daehong" },
    { type: "file", name: "rawdata01.erp", updatedAt: "11월 1일", modifier: "Min, Daehong" },
];

export default function BrowserTable () {

    const table = useReactTable({
        data: tempData,
        columns,
        getCoreRowModel: getCoreRowModel()
    });

    return (
        <div>
            <div className="px-[32px]">
            <Table>
                <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                        <TableHead key={header.id} className="font-bold text-[#323130] text-[14px]">
                            {header.isPlaceholder
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
                        <TableCell key={cell.id} className="text-[14px] py-[12px]">
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
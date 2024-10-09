import Browser, { TableData } from "@/components/browser/Browser";


const tempData: TableData[] = [
    // { id: 1, type: "DATA", name: "rawdata01.erp", updatedAt: "5월 1일",  modifier: "Min, Daehong" },
    // { id: 2, type: "DATA", name: "rawdata02.erp", updatedAt: "3월 1일",  modifier: "Min, Daehong" },
    // { id: 3, type: "DATA", name: "rawdata01.erp", updatedAt: "7월 1일",  modifier: "Min, Daehong" },
    // { id: 4, type: "DATA", name: "rawdata01.erp", updatedAt: "9월 1일",  modifier: "Min, Daehong" },
    // { id: 5, type: "DATA", name: "rawdata01.erp", updatedAt: "11월 1일", modifier: "Min, Daehong" },
];

export default function Home () {
	return (
		<div className="text-[#323130]">
			<Browser />
		</div>
	)
}
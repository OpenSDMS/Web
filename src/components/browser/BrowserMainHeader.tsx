

export default function BrowserMainHeader ({title}: {title: string}) {
    return (
        <div className="min-h-[80px] flex items-center" style={{borderBottom: '1px solid #ebebeb'}}>
            <div className="px-[32px]">
                <h2 className="text-[24px] font-bold">{title}</h2>
            </div>
        </div>
    )
}
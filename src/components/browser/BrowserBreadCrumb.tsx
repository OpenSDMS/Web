import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BrowserBreadCrumb ({path}: {path: string[]}) {
    return (
        <div className="py-[34px]">
            <div className="px-[32px]">
                <Breadcrumb>
                    <BreadcrumbList className="text-[18px] font-normal">
                        {path && path.map(p =>
                            <>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/">{p}</BreadcrumbLink>
                                </BreadcrumbItem>
                                {/* <BreadcrumbSeparator /> */}
                                
                            </>
                        )}
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </div>
    )
}
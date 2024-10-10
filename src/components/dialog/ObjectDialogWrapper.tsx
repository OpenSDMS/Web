
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import repositoryIcon from '@/resources/folder.png';
import Image from "next/image";

export default function ObjectDialogWrapper ({
    deviceIsOpen, setDeviceIsOpen,
    repositoryIsOpen, setRepositoryIsOpen}: any) {

    return (
        <div>
            <Dialog open={deviceIsOpen} onOpenChange={setDeviceIsOpen}>
                <DialogContent className="sm:max-w-[425px] rounded">
                    <DialogHeader>
                        <DialogTitle>새로운 장치</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            {/* ////////////////////////////////////////////////////////////////////////////////////////// */}
            <Dialog open={repositoryIsOpen} onOpenChange={setRepositoryIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>새로운 저장소</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
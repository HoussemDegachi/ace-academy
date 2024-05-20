import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogHeader } from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"
import React, { Dispatch, SetStateAction } from "react"

type ModalProps = {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    children: React.ReactNode,
    title: string,
    description: string
}

function Modal({ openModal, setOpenModal, title, description, children }: ModalProps) {
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
    <DialogContent>
    <ScrollArea className="max-h-[calc(100vh-20px)] sm:max-h-[80vh]">
      <DialogHeader className="mb-5">
        <DialogTitle className="text-2xl">{title}</DialogTitle>
        <DialogDescription className="text-neutral-600 text-sm ">{description}</DialogDescription>
      </DialogHeader>
            {children}
      </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
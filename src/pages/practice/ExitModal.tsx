import CtaBtn from "@/components/CtaBtn"
import Modal from "@/components/Modal"
import SecBtn from "@/components/SecBtn"
import { Dispatch, SetStateAction } from "react"

type ExitModalProps = {
    openModal: boolean,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    onFinish: () => void
}

function ExitModal({openModal, setOpenModal, onFinish}: ExitModalProps) {
  return (
    <Modal openModal={openModal} setOpenModal={setOpenModal} title="إنهاء الحصة" description="هل أنت متأكد أنك تريد إنهاء الحصة">
        <CtaBtn className="w-full mt-6 mb-2" text="مواصلة التعلم" onClick={() => setOpenModal(false)} />
        <SecBtn text="إنهاء" className="w-full text-sky-500 hover:text-sky-500" onClick={onFinish} />
    </Modal>
  )
}

export default ExitModal
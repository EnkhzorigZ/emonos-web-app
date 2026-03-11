import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function ChangeLocationDialog({
  openModal,
  setOpenModal,
}: {
  openModal: boolean
  setOpenModal: (open: boolean) => void
}) {
  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Descc</DialogDescription>
        </DialogHeader>
        <DialogBody>asdasdasd</DialogBody>
        <DialogFooter>Footer</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

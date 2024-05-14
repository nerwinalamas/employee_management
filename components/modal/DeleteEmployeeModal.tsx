import { useModal } from "@/hooks/useModal";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { deleteEmployee } from "@/app/api";
import { Input } from "@/components/ui/input";

const DeleteEmployeeModal = () => {
	const { type, isOpen, onClose, data } = useModal();
	const isModalOpen = isOpen && type === "deleteEmployeeModal";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Delete Employee</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					Are you sure you want to delete this employee to the record?
				</DialogDescription>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button" variant="ghost">
							Cancel
						</Button>
					</DialogClose>
					<form action={deleteEmployee}>
						<Input type="hidden" name="id" value={data?.id} />
						<Button type="submit" variant="destructive" onClick={onClose} >
							Delete
						</Button>
					</form>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteEmployeeModal;

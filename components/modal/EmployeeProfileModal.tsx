import { useModal } from "@/hooks/useModal";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const EmployeeProfileModal = () => {
	const { type, isOpen, onClose, data } = useModal();
	const isModalOpen = isOpen && type === "employeeProfileModal";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Employee Profile</DialogTitle>
				</DialogHeader>
				<div>
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						name="name"
						value={data?.name}
						disabled
					/>
					<Label htmlFor="email">Email</Label>
					<Input
						type="text"
						id="email"
						name="email"
						value={data?.email}
						disabled
					/>
					<Label htmlFor="position">Position</Label>
					<Input
						type="text"
						id="position"
						name="position"
						value={data?.position}
						disabled
					/>
					<Label htmlFor="phone">Phone</Label>
					<Input
						type="text"
						id="phone"
						name="phone"
						value={data?.phone}
						disabled
					/>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button type="button">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default EmployeeProfileModal;

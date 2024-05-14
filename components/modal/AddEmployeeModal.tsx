import { useModal } from "@/hooks/useModal";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { positions } from "@/components/constants";
import { addNewEmployee } from "@/app/api";

const AddEmployeeModal = () => {
	const { type, isOpen, onClose } = useModal();
	const isModalOpen = isOpen && type === "addEmployeeModal";

	return (
		<Dialog open={isModalOpen} onOpenChange={onClose}>
			<DialogContent>
				<form action={addNewEmployee} className="flex flex-col gap-2">
					<DialogHeader>
						<DialogTitle>Add Employee</DialogTitle>
					</DialogHeader>
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						name="name"
						placeholder="e.g. Juan Dela Cruz"
					/>
					<Label htmlFor="email">Email</Label>
					<Input
						type="text"
						id="email"
						name="email"
						placeholder="e.g. juandelacruz@gmail.com"
					/>
					<Label htmlFor="position">Position</Label>
					<Select name="position">
						<SelectTrigger>
							<SelectValue placeholder="e.g. Frontend Developer" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Positions</SelectLabel>
								{positions.map((position) => (
									<SelectItem key={position} value={position}>
										{position}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Label htmlFor="phone">Phone</Label>
					<Input
						type="text"
						id="phone"
						name="phone"
						placeholder="e.g. 09123456789"
					/>
					<DialogFooter>
						<DialogClose asChild>
							<Button type="button" variant="secondary">
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit" onClick={onClose}>Submit</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddEmployeeModal;

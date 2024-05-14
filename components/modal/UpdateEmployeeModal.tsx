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
import { updateEmployeesInfo } from "@/app/api";
import { useState } from "react";

const UpdateEmployeeModal = () => {
	const { type, isOpen, onClose, data } = useModal();
	const isModalOpen = isOpen && type === "updateEmployeeModal";

	const [name, setName] = useState(data?.name);
	const [email, setEmail] = useState(data?.email);
	const [position, setPosition] = useState(data?.position);
	const [phone, setPhone] = useState(data?.phone);

	const handleReset = () => {
		onClose();

		setName("");
		setEmail("");
		setPosition("");
		setPhone("");
	};

	const handleSubmit = () => { 
		onClose();

		if (isOpen) {
			setName("");
			setEmail("");
			setPosition("");
			setPhone("");
		}
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={handleReset}>
			<DialogContent>
				<form action={updateEmployeesInfo}>
					<DialogHeader>
						<DialogTitle>Update Employee</DialogTitle>
					</DialogHeader>
					<Input type="hidden" name="id" value={data?.id} />
					<Label htmlFor="name">Name</Label>
					<Input
						type="text"
						id="name"
						name="name"
						placeholder="e.g. Juan Dela Cruz"
						value={name || data?.name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Label htmlFor="email">Email</Label>
					<Input
						type="text"
						id="email"
						name="email"
						placeholder="e.g. juandelacruz@gmail.com"
						value={email || data?.email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Label htmlFor="position">Position</Label>
					<Select
						value={position || data?.position}
						defaultValue={position || data?.position}
						onValueChange={(value) => setPosition(value)}
						name="position"
					>
						<SelectTrigger>
							<SelectValue />
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
						value={phone || data?.phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
					<DialogFooter>
						<DialogClose asChild>
							<Button
								type="button"
								variant="ghost"
								onClick={handleReset}
							>
								Cancel
							</Button>
						</DialogClose>
						<Button type="submit" onClick={handleSubmit}>
							Submit
						</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default UpdateEmployeeModal;

"use client";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/useModal";
import { Plus } from "lucide-react";

const AddEmployee = () => {
	const { onOpen } = useModal();

	return (
		<Button
			variant="secondary"
			className="flex gap-1"
			onClick={() => onOpen("addEmployeeModal")}
		>
			<Plus size={15} />
			Add
		</Button>
	);
};

export default AddEmployee;

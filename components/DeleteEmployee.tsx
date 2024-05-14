"use client"

import { useModal } from "@/hooks/useModal";
import { EmployeeData } from "@/types";
import { Trash } from "lucide-react";

const DeleteEmployee = ({ employee } : { employee: EmployeeData }) => {
	const { onOpen } = useModal();

	return (
		<Trash
			className="hover:cursor-pointer"
			onClick={() => onOpen("deleteEmployeeModal", employee)}
		/>
	);
};

export default DeleteEmployee;

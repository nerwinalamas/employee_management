"use client";

import { useModal } from "@/hooks/useModal";
import { EmployeeData } from "@/types";
import { Pencil } from "lucide-react";

const UpdateEmployee = ({ employee } : { employee: EmployeeData }) => {
	const { onOpen } = useModal();

	return (
		<Pencil
			className="hover:cursor-pointer"
			onClick={() => onOpen("updateEmployeeModal", employee)}
		/>
	);
};

export default UpdateEmployee;

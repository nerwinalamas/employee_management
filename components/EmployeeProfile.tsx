"use client";

import { useModal } from "@/hooks/useModal";
import { EmployeeData } from "@/types";
import { Eye } from "lucide-react";

const EmployeeProfile = ({ employee } : { employee: EmployeeData }) => {
	const { onOpen } = useModal();

	return (
		<Eye
			className="hover:cursor-pointer"
			onClick={() => onOpen("employeeProfileModal", employee)}
		/>
	);
};

export default EmployeeProfile;

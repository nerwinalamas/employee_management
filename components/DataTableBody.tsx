"use client"

import {
	TableBody,
	TableCell,
	TableRow,
} from "@/components/ui/table";
import EmployeeProfile from "./EmployeeProfile";
import UpdateEmployee from "./UpdateEmployee";
import DeleteEmployee from "./DeleteEmployee";
import { usePagination } from "@/hooks/usePagination";
import { EmployeeData } from "@/types";

const DataTableBody = ({ data, count }: { data : EmployeeData[], count : number }) => {
    const { dataPerPage } = usePagination(data, count);

	return (
		<TableBody>
			{dataPerPage?.map((employee) => (
				<TableRow key={employee.id}>
					<TableCell>{employee.name}</TableCell>
					<TableCell>{employee.email}</TableCell>
					<TableCell>{employee.position}</TableCell>
					<TableCell>{employee.phone}</TableCell>
					<TableCell className="flex gap-5 justify-center">
						<EmployeeProfile employee={employee} />
						<UpdateEmployee employee={employee} />
						<DeleteEmployee employee={employee} />
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	);
};

export default DataTableBody;

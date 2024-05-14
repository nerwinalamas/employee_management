import {
	Table,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import TablePagination from "./TablePagination";
import { getEmployees, totalEmployees } from "@/app/api";
import DataTableBody from "./DataTableBody";

const EmployeeTable = async () => {	
	const data = await getEmployees();
	const count = await totalEmployees();

	return (
		<div>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-40">Name</TableHead>
						<TableHead className="w-52">Email</TableHead>
						<TableHead className="w-40">Position</TableHead>
						<TableHead className="w-40">Phone</TableHead>
						<TableHead className="w-52 text-center">
							Actions
						</TableHead>
					</TableRow>
				</TableHeader>
				<DataTableBody data={data} count={count} />
			</Table>
			<div className="w-full flex items-center justify-between">
				<p className="mt-1 text-sm">Total Employess: {count}</p>
				<div>
					<TablePagination data={data} count={count} />
				</div>
			</div>
		</div>
	);
};

export default EmployeeTable;

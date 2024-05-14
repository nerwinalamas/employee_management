import AddEmployee from "@/components/AddEmployee";
import EmployeeTable from "@/components/EmployeeTable";
import SearchEmployee from "@/components/SearchEmployee";

const Home = () => {
	return (
		<main className="h-screen flex items-center justify-center bg-slate-900 text-white">
			<div className="xl:w-2/3 xl:flex flex-col gap-3">
				<div className="flex justify-between items-center">
					<h1 className="font-semibold text-xl">Employee Management</h1>
					<div className="flex gap-5">
						<SearchEmployee />
						<AddEmployee />
					</div>
				</div>
				<EmployeeTable />
			</div>
		</main>
	);
};

export default Home;

import { findEmployees } from "@/app/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchEmployee = async () => {
	return (
		<form action={findEmployees} className="text-black flex gap-2">
			<Input type="text" name="search" placeholder="Search" />
			<Button type="submit" variant="secondary">Search</Button>
		</form>
	);
};

export default SearchEmployee;

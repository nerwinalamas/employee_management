import { EmployeeData } from "@/types";
import { create } from "zustand";

type ModalType =
	| "employeeProfileModal"
	| "updateEmployeeModal"
	| "addEmployeeModal"
	| "deleteEmployeeModal";

interface ModalState {
	type: ModalType | null;
	isOpen: boolean;
	data?: EmployeeData;
	id?: string;
	onOpen: (type: ModalType, data?: EmployeeData) => void;
	onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
	type: null,
	isOpen: false,
	onOpen: (type, data = undefined, id = undefined) => set({ type, isOpen: true, data, id }),
	onClose: () => set({ type: null, isOpen: false, data: undefined, id: undefined }),
}));

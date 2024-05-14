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
	onOpen: (type: ModalType, data?: EmployeeData) => void;
	onClose: () => void;
}

export const useModal = create<ModalState>((set) => ({
	type: null,
	isOpen: false,
	onOpen: (type, data = undefined) => set({ type, isOpen: true, data }),
	onClose: () => set({ type: null, isOpen: false, data: undefined }),
}));

"use client"

import AddEmployeeModal from "@/components/modal/AddEmployeeModal"
import DeleteEmployeeModal from "@/components/modal/DeleteEmployeeModal"
import EmployeeProfileModal from "@/components/modal/EmployeeProfileModal"
import UpdateEmployeeModal from "@/components/modal/UpdateEmployeeModal"

const ModalProvider = () => {
  return (
    <>
        <EmployeeProfileModal />
        <AddEmployeeModal />
        <UpdateEmployeeModal />
        <DeleteEmployeeModal />
    </>
  )
}

export default ModalProvider
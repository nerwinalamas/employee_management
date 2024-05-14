"use server";

import { prisma } from "@/utils/client";
import { revalidatePath } from "next/cache";

export const getEmployees = async () => {
    const data = await prisma.employee.findMany()

    return data
}

export const getEmployeeById = async (formData: FormData) => {
	const id = formData.get("id") as string;
	const data = await prisma.employee.findFirst({
		where: {
			id,
		},
	});

	return data;
};

export const addNewEmployee = async (formData: FormData) => {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const position = formData.get("position") as string;
	const phone = formData.get("phone") as string;

	if (!name.trim() || !email.trim() || !position.trim() || !phone.trim())
		return;

	await prisma.employee.create({
		data: {
			name,
			email,
			position,
			phone,
		},
	});

	revalidatePath("/");
};

export const deleteEmployee = async (formData: FormData) => {
	const id = formData.get("id") as string;

	await prisma.employee.delete({
		where: {
			id,
		},
	});

	revalidatePath("/");
};

export const updateEmployeesInfo = async (formData: FormData) => {
	const id = formData.get("id") as string;
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const position = formData.get("position") as string;
	const phone = formData.get("phone") as string;

	const employee = await prisma.employee.findUnique({
		where: {
			id,
		},
	});

	if (!employee) return;
	if (!name.trim() || !email.trim() || !position.trim() || !phone.trim()) return;

	await prisma.employee.update({
		where: {
			id,
		},
		data: {
			name,
			email,
			position,
			phone,
		},
	});

	revalidatePath("/");
};

export const totalEmployees = async () => {
	const count = await prisma.employee.count();

	return count;
};

export const findEmployees = async (formData: FormData) => {
	const search = formData.get("search") as string;

	if (!search) return;

	const results = await prisma.employee.findMany({
		where: {
			OR: [
				{ name: { contains: search } },
				{ email: { contains: search } },
				{ position: { contains: search } },
				{ phone: { contains: search } },
			],
		},
	});

	return results;
};

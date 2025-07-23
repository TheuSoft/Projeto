"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db";
import { appointmentsTable } from "@/db/schema";

interface CancelAppointmentParams {
  appointmentId: string;
}

type ActionResult = {
  success: boolean;
  message: string;
};

export async function cancelAppointment({
  appointmentId,
}: CancelAppointmentParams): Promise<ActionResult> {
  try {
    await db
      .update(appointmentsTable)
      .set({
        status: "canceled",
        updatedAt: new Date(),
      })
      .where(eq(appointmentsTable.id, appointmentId));

    revalidatePath("/dashboard/appointments");
    revalidatePath("/appointments");

    return { success: true, message: "Agendamento cancelado com sucesso!" };
  } catch (error) {
    console.error("Erro ao cancelar agendamento:", error);
    return { success: false, message: "Erro ao cancelar agendamento" };
  }
}

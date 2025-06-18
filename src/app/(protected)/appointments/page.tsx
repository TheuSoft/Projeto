import { Suspense } from "react";

import {
  PageContainer,
  PageHeader,
  PageTitle,
} from "@/components/ui/page-container";

import { NewAppointmentDialog } from "./_components/add-appointment-button";

export default function AppointmentsPage() {
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Agendamentos</PageTitle>
      </PageHeader>
      <div className="mb-4 flex justify-end">
        <Suspense fallback={null}>
          <NewAppointmentDialog />
        </Suspense>
      </div>
      {/* Listagem de agendamentos será implementada futuramente */}
    </PageContainer>
  );
}

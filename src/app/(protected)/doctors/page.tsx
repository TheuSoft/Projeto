import { PlusIcon } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/page-container";
import { auth } from "@/lib/auth";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session.user.clinic) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <PageContainer>
        <PageHeader>
          <PageHeaderContent>
            <PageTitle>Medicos</PageTitle>
            <PageDescription>
              Gerencie os médicos cadastrados no sistema
            </PageDescription>
          </PageHeaderContent>
          <PageActions>
            <Button>
              <PlusIcon className="h-4 w-4" />
              Novo Médico
            </Button>
          </PageActions>
        </PageHeader>
        <PageContent>
          <div className="flex items-center justify-between">
            <h1>Medicos</h1>
          </div>
        </PageContent>
      </PageContainer>
    </div>
  );
};

export default DoctorsPage;

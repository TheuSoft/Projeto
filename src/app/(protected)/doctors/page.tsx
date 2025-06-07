import { PlusIcon } from "lucide-react";

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

const DoctorsPage = () => {
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

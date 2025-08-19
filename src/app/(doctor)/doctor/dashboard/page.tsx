import {
  CalendarIcon,
  DollarSignIcon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DoctorDashboard() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard do Médico</h1>
        <p className="text-muted-foreground">
          Bem-vindo! Acesse suas funcionalidades principais
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Card Agendamentos */}
        <Link href="/doctor/appointments">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Meus Agendamentos
              </CardTitle>
              <CalendarIcon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Consultas</div>
              <p className="text-muted-foreground text-xs">
                Visualize e gerencie suas consultas
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Card Relatórios */}
        <Link href="/doctor/reports">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Relatórios</CardTitle>
              <FileTextIcon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Faturamento</div>
              <p className="text-muted-foreground text-xs">
                Analise suas consultas e ganhos
              </p>
            </CardContent>
          </Card>
        </Link>

        {/* Card Perfil */}
        <Link href="/doctor/profile">
          <Card className="cursor-pointer transition-shadow hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Meu Perfil</CardTitle>
              <UserIcon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Dados</div>
              <p className="text-muted-foreground text-xs">
                Visualize suas informações
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Seção de acesso rápido */}
      <div className="mt-8">
        <h2 className="mb-4 text-xl font-semibold">Acesso Rápido</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSignIcon className="h-5 w-5" />
                Relatórios de Faturamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Visualize suas consultas realizadas e o faturamento por período.
              </p>
              <Link
                href="/doctor/reports"
                className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Ver Relatórios
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Próximas Consultas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Confira sua agenda e gerencie seus agendamentos.
              </p>
              <Link
                href="/doctor/appointments"
                className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Ver Agendamentos
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

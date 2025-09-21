import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Settings, 
  UserPlus, 
  BookOpen,
  Bell,
  Shield,
  MoreHorizontal,
  Edit,
  Trash2
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mockUsers, mockWorkshops, mockNotifications } from "@/lib/mockData";

const Dashboard = () => {
  const [users] = useState(mockUsers);
  const [workshops] = useState(mockWorkshops);
  const [notifications] = useState(mockNotifications);

  const totalUsers = users.length;
  const totalWorkshops = workshops.length;
  const totalNotifications = notifications.filter(n => !n.read).length;
  const averageParticipants = Math.round(
    workshops.reduce((sum, w) => sum + w.participants, 0) / workshops.length
  );

  const getRoleBadge = (role: string) => {
    const roleMap = {
      visitor: { label: "Visitante", variant: "secondary" as const },
      user: { label: "Usuário", variant: "default" as const },
      admin: { label: "Admin", variant: "destructive" as const }
    };
    return roleMap[role as keyof typeof roleMap] || roleMap.visitor;
  };

  const getNotificationBadge = (type: string) => {
    const typeMap = {
      info: { variant: "default" as const },
      success: { variant: "default" as const },
      warning: { variant: "secondary" as const },
      error: { variant: "destructive" as const }
    };
    return typeMap[type as keyof typeof typeMap] || typeMap.info;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Administrativo</h1>
          <p className="text-muted-foreground">Gerencie usuários, oficinas e configurações</p>
        </div>
        <Button>
          <Settings className="mr-2 h-4 w-4" />
          Configurações
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">+12% este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Oficinas Ativas</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalWorkshops}</div>
            <p className="text-xs text-muted-foreground">+2 esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participação Média</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageParticipants}</div>
            <p className="text-xs text-muted-foreground">participantes por oficina</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Notificações</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalNotifications}</div>
            <p className="text-xs text-muted-foreground">não lidas</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="workshops">Oficinas</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Gerenciar Usuários</h2>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Adicionar Usuário
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Usuários</CardTitle>
              <CardDescription>
                Gerencie as contas de usuários do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50"
                  >
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{user.name}</p>
                          <Badge {...getRoleBadge(user.role)}>
                            {getRoleBadge(user.role).label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <p className="text-xs text-muted-foreground">
                          Membro desde {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Shield className="mr-2 h-4 w-4" />
                          Alterar Permissões
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Excluir
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workshops" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Gerenciar Oficinas</h2>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Nova Oficina
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Lista de Oficinas</CardTitle>
              <CardDescription>
                Gerencie as oficinas e eventos do sistema
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <div
                    key={workshop.id}
                    className="border rounded-lg p-4 hover:bg-muted/50"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{workshop.title}</h4>
                          <Badge variant="secondary">{workshop.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {workshop.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <span>📅 {new Date(workshop.date).toLocaleDateString('pt-BR')}</span>
                          <span>⏱️ {workshop.duration}</span>
                          <span>👥 {workshop.participants}/{workshop.maxParticipants}</span>
                          <span>👨‍🏫 {workshop.instructor}</span>
                        </div>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="mr-2 h-4 w-4" />
                            Ver Participantes
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Cancelar Oficina
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Gerenciar Notificações</h2>
            <Button>
              <Bell className="mr-2 h-4 w-4" />
              Nova Notificação
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sistema de Notificações</CardTitle>
              <CardDescription>
                Gerencie as notificações enviadas aos usuários
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`border rounded-lg p-4 ${
                      !notification.read ? 'bg-primary/5 border-primary/20' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{notification.title}</h4>
                          <Badge {...getNotificationBadge(notification.type)}>
                            {notification.type}
                          </Badge>
                          {!notification.read && (
                            <Badge variant="outline">Nova</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(notification.createdAt).toLocaleString('pt-BR')}
                        </p>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
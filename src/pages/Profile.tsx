import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Mail, Calendar, Settings, Bell, Shield, Camera, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { currentUser, mockWorkshops } from "@/lib/mockData";

const Profile = () => {
  const [user, setUser] = useState(currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSave = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Perfil atualizado!",
        description: "Suas informações foram salvas com sucesso."
      });
      setIsEditing(false);
      setIsLoading(false);
    }, 1000);
  };

  const handlePreferenceChange = (key: string, value: any) => {
    setUser({
      ...user,
      preferences: {
        ...user.preferences,
        [key]: value
      }
    });
  };

  const registeredWorkshops = mockWorkshops.filter(workshop => 
    workshop.registeredUsers.includes(user.id)
  );

  const getRoleBadge = (role: string) => {
    const roleMap = {
      visitor: { label: "Visitante", variant: "secondary" as const },
      user: { label: "Usuário", variant: "default" as const },
      admin: { label: "Administrador", variant: "destructive" as const }
    };
    return roleMap[role as keyof typeof roleMap] || roleMap.visitor;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold">Meu Perfil</h1>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "outline" : "default"}
        >
          {isEditing ? "Cancelar" : "Editar Perfil"}
        </Button>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="workshops">Oficinas</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="text-xl">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="outline"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{user.name}</h3>
                    <Badge {...getRoleBadge(user.role)}>
                      {getRoleBadge(user.role).label}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{user.email}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Membro desde {new Date(user.joinDate).toLocaleDateString('pt-BR')}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Form Fields */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      disabled={!isEditing}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <Button onClick={handleSave} disabled={isLoading}>
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? "Salvando..." : "Salvar alterações"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workshops" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Minhas Oficinas</CardTitle>
              <CardDescription>
                Oficinas nas quais você está inscrito
              </CardDescription>
            </CardHeader>
            <CardContent>
              {registeredWorkshops.length > 0 ? (
                <div className="space-y-4">
                  {registeredWorkshops.map((workshop) => (
                    <div key={workshop.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{workshop.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {workshop.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span>📅 {new Date(workshop.date).toLocaleDateString('pt-BR')}</span>
                            <span>⏱️ {workshop.duration}</span>
                            <span>👥 {workshop.participants}/{workshop.maxParticipants}</span>
                          </div>
                        </div>
                        <Badge variant="secondary">{workshop.level}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    Você ainda não está inscrito em nenhuma oficina.
                  </p>
                  <Button className="mt-4" asChild>
                    <a href="/schedule">Ver oficinas disponíveis</a>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Configurações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Bell className="h-4 w-4" />
                      <Label>Notificações</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receber notificações sobre oficinas e eventos
                    </p>
                  </div>
                  <Switch
                    checked={user.preferences.notifications}
                    onCheckedChange={(checked) => 
                      handlePreferenceChange('notifications', checked)
                    }
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <Label>Newsletter</Label>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Receber novidades por email
                    </p>
                  </div>
                  <Switch
                    checked={user.preferences.newsletter}
                    onCheckedChange={(checked) => 
                      handlePreferenceChange('newsletter', checked)
                    }
                  />
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <Label>Tema</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Escolha entre tema claro, escuro ou automático
                  </p>
                  <div className="pt-2">
                    <Button variant="outline" size="sm">
                      Tema: {user.preferences.theme === 'system' ? 'Automático' : 
                            user.preferences.theme === 'light' ? 'Claro' : 'Escuro'}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSave} disabled={isLoading}>
                  <Save className="mr-2 h-4 w-4" />
                  {isLoading ? "Salvando..." : "Salvar configurações"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
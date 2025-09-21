import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Check, CheckCheck, Trash2, Filter, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { mockNotifications, Notification } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const { toast } = useToast();

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    toast({
      title: "Notificação marcada como lida",
      description: "A notificação foi atualizada."
    });
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
    toast({
      title: "Todas as notificações foram lidas",
      description: `${unreadCount} notificações foram marcadas como lidas.`
    });
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
    toast({
      title: "Notificação excluída",
      description: "A notificação foi removida permanentemente."
    });
  };

  const getNotificationIcon = (type: string) => {
    const iconMap = {
      info: "ℹ️",
      success: "✅",
      warning: "⚠️",
      error: "❌"
    };
    return iconMap[type as keyof typeof iconMap] || "📢";
  };

  const getNotificationBadge = (type: string) => {
    const typeMap = {
      info: { label: "Info", variant: "default" as const },
      success: { label: "Sucesso", variant: "default" as const },
      warning: { label: "Aviso", variant: "secondary" as const },
      error: { label: "Erro", variant: "destructive" as const }
    };
    const mapped = typeMap[type as keyof typeof typeMap] || typeMap.info;
    return mapped;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Hoje";
    if (diffDays === 2) return "Ontem";
    if (diffDays <= 7) return `${diffDays - 1} dias atrás`;
    
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold flex items-center gap-2">
            <Bell className="h-7 w-7" />
            Notificações
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-muted-foreground">
            Mantenha-se atualizado com as últimas novidades
          </p>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filtrar por status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilter('all')}>
                Todas ({notifications.length})
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('unread')}>
                Não lidas ({unreadCount})
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('read')}>
                Lidas ({notifications.length - unreadCount})
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {unreadCount > 0 && (
            <Button onClick={markAllAsRead}>
              <CheckCheck className="mr-2 h-4 w-4" />
              Marcar todas como lidas
            </Button>
          )}
        </div>
      </div>

      {filteredNotifications.length === 0 ? (
        <Card>
          <CardContent className="text-center py-12">
            <Bell className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              {filter === 'unread' 
                ? 'Nenhuma notificação não lida' 
                : filter === 'read'
                ? 'Nenhuma notificação lida'
                : 'Nenhuma notificação'
              }
            </h3>
            <p className="text-muted-foreground">
              {filter === 'all' 
                ? 'Você receberá notificações sobre oficinas, eventos e atualizações aqui.'
                : 'Tente alterar o filtro para ver mais notificações.'
              }
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card 
              key={notification.id}
              className={`transition-all duration-200 hover:shadow-md ${
                !notification.read 
                  ? 'border-primary/50 bg-primary/5 shadow-lg' 
                  : 'hover:bg-muted/30'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="text-2xl flex-shrink-0 mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    
                    <div className="space-y-2 flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-semibold ${!notification.read ? 'text-primary' : ''}`}>
                          {notification.title}
                        </h3>
                        <Badge {...getNotificationBadge(notification.type)}>
                          {getNotificationBadge(notification.type).label}
                        </Badge>
                        {!notification.read && (
                          <Badge variant="outline" className="bg-primary/10">
                            Nova
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-muted-foreground">
                          {formatDate(notification.createdAt)}
                        </span>
                        
                        {notification.actionUrl && (
                          <Button variant="link" size="sm" asChild>
                            <a href={notification.actionUrl}>
                              Ver mais →
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {!notification.read ? (
                        <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                          <Check className="mr-2 h-4 w-4" />
                          Marcar como lida
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem 
                          onClick={() => setNotifications(prev =>
                            prev.map(n =>
                              n.id === notification.id ? { ...n, read: false } : n
                            )
                          )}
                        >
                          <Bell className="mr-2 h-4 w-4" />
                          Marcar como não lida
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => deleteNotification(notification.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {filteredNotifications.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          Mostrando {filteredNotifications.length} de {notifications.length} notificações
        </div>
      )}
    </div>
  );
};

export default Notifications;
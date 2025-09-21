// Mock data for the application
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'visitor' | 'user' | 'admin';
  joinDate: string;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    notifications: boolean;
    newsletter: boolean;
  };
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  duration: string;
  participants: number;
  maxParticipants: number;
  instructor: string;
  level: 'iniciante' | 'intermediario' | 'avancado';
  category: string;
  registeredUsers: string[];
}

// Current user mock
export const currentUser: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao.silva@email.com',
  avatar: '/placeholder.svg',
  role: 'user',
  joinDate: '2024-01-15',
  preferences: {
    theme: 'system',
    notifications: true,
    newsletter: true
  }
};

// Admin user mock
export const adminUser: User = {
  id: 'admin-1',
  name: 'Ana Administradora',
  email: 'admin@pracadaciencia.com',
  role: 'admin',
  joinDate: '2023-01-01',
  preferences: {
    theme: 'system',
    notifications: true,
    newsletter: true
  }
};

// Mock users for admin dashboard
export const mockUsers: User[] = [
  currentUser,
  adminUser,
  {
    id: '2',
    name: 'Maria Oliveira',
    email: 'maria@email.com',
    role: 'user',
    joinDate: '2024-02-10',
    preferences: { theme: 'light', notifications: true, newsletter: false }
  },
  {
    id: '3',
    name: 'Pedro Santos',
    email: 'pedro@email.com',
    role: 'visitor',
    joinDate: '2024-03-05',
    preferences: { theme: 'dark', notifications: false, newsletter: true }
  }
];

// Mock notifications
export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Nova oficina disponível',
    message: 'A oficina "Laboratório de Química Divertida" está com inscrições abertas!',
    type: 'info',
    read: false,
    createdAt: '2024-01-19T10:00:00Z',
    actionUrl: '/schedule'
  },
  {
    id: '2',
    title: 'Workshop confirmado',
    message: 'Sua inscrição na oficina de Robótica foi confirmada para 18/01.',
    type: 'success',
    read: false,
    createdAt: '2024-01-18T15:30:00Z'
  },
  {
    id: '3',
    title: 'Manutenção programada',
    message: 'O sistema estará em manutenção no domingo das 2h às 6h.',
    type: 'warning',
    read: true,
    createdAt: '2024-01-17T09:00:00Z'
  }
];

// Extended workshop data
export const mockWorkshops: Workshop[] = [
  {
    id: '1',
    title: 'Laboratório de Química Divertida',
    description: 'Descubra os segredos da química através de experimentos seguros e fascinantes que vão despertar sua curiosidade científica.',
    image: '/assets/workshop-1.jpg',
    date: '2024-01-15',
    duration: '2h',
    participants: 15,
    maxParticipants: 20,
    instructor: 'Dr. Carlos Mendes',
    level: 'iniciante',
    category: 'Química',
    registeredUsers: ['1', '2']
  },
  {
    id: '2',
    title: 'Robótica para Iniciantes',
    description: 'Construa e programe seus próprios robôs enquanto aprende os fundamentos da tecnologia e automação.',
    image: '/assets/workshop-2.jpg',
    date: '2024-01-18',
    duration: '3h',
    participants: 12,
    maxParticipants: 15,
    instructor: 'Eng. Roberta Lima',
    level: 'iniciante',
    category: 'Tecnologia',
    registeredUsers: ['1']
  }
];

// Mock authentication
export const mockAuth = {
  isAuthenticated: false,
  user: null as User | null,
  login: (email: string, password: string) => {
    // Simulate login
    console.log('Login attempt:', { email, password });
    return { success: true, user: currentUser };
  },
  loginWithGoogle: () => {
    console.log('Google login attempt');
    return { success: true, user: currentUser };
  },
  register: (data: { name: string; email: string; password: string }) => {
    console.log('Register attempt:', data);
    return { success: true, user: { ...currentUser, ...data, id: Date.now().toString() } };
  },
  logout: () => {
    console.log('Logout');
    return { success: true };
  }
};
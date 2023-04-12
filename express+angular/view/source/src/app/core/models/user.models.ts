export class UserModel {
  id?: number;
  email?: string;
  name?: string;
  phone?: string;
  password?: string;
  username?: string;
  company?: string;
  avatar?: string;
  country?: string;
  currentPlan?: string;
  lockscreen?: boolean;
  role?: string;
  token?: string;
  status?: boolean;
  dashboards?: string[];
  plan?: Plan;
}


export class Plan {
  name?: string;
  price?: number;
  status?: boolean;
  expired_at?: string;
  created_at?: string;
  total_report?: number;
  total_accounts?: number;
  used_report?: number;
  used_accounts?: number;
}



export const UserAccounts: UserModel[] = [
  {  id: 1, email: 'admin@admin.com', name: 'Abdulaziz Alqahtani', phone: '0580883344', password: 'admin@123', username: 'admin', company: 'Ihorizon', avatar: 'assets/images/avatars/avatar.png', country: 'Saudi Arabia',role: 'Admin', token: '', status: true}
];
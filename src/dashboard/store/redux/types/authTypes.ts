export interface UserState {
  userName: string;
  email: string;
  userId: string;
}

export interface SystemState {
  loggedIn: boolean;
  sessionId: string;
  user?: UserState;
}

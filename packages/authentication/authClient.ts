import { Auth, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, User } from 'firebase/auth';
import { AppUser } from './model';

const mapUser = (listener: (user: AppUser | undefined) => void) => (user: User | null) =>
  listener(user ? { id: user.uid, email: user.email || undefined, displayName: user.displayName || '' } : undefined);

export class AuthClient {
  private provider: GoogleAuthProvider;
  private auth: Auth;

  constructor() {
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  subscribe(listener: (user: AppUser | undefined) => void) {
    return onAuthStateChanged(this.auth, mapUser(listener));
  }

  signIn() {
    signInWithRedirect(this.auth, this.provider);
  }
}

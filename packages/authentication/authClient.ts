import {
  Auth,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect
} from 'firebase/auth';

export class AuthClient {
  private provider: GoogleAuthProvider;
  private auth: Auth;

  constructor() {
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        console.log('AUTHENTICATED', user.displayName);
      } else {
        console.log('ANONYMOUS');
      }
    });
  }

  async initialize() {
    try {
      const result = await getRedirectResult(this.auth);
      console.log('AUTHENTICATED', result?.user.displayName);
    } catch (ex) {
      console.error('AUTH INIT FAILED', ex);
    }
  }

  signIn() {
    signInWithRedirect(this.auth, this.provider);
  }
}

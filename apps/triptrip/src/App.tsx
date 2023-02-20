import { useAuthClient } from '@triptrip/auth/AuthClientProvider';
import { useEffect } from 'react';

function App() {
  const auth = useAuthClient();

  const handleSignIn = () => {
    auth.signIn();
  };

  return (
    <div>
      <button type="button" onClick={handleSignIn}>
        SignIn
      </button>
    </div>
  );
}

export default App;

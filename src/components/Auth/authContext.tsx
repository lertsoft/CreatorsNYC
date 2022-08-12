import { createContext, useContext, useEffect, useState } from 'react';

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import auth from '@/utils/firebase';

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-console
  console.log(user);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // To be implemented
      // If user is logged in or logged out change the state of the name display
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Signup function
  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login function
  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout function
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

// export function AuthProvider({ children, value }) {
//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export function useAuthValue() {
//   return useContext(AuthContext);
// }

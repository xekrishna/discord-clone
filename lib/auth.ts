
import { getAuth, createUserWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from './firebase';

const signupUser = async (email: string, password: string): Promise<string> => {

  try {
    const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const token: string = await user.getIdToken();
    
    // Save user ID and token to local storage
    localStorage.setItem('currentUser', user.uid);
    localStorage.setItem('authToken', token);

    return token;
  } catch (error: any) {
    console.error('Error signing up:', error.message);
    throw new Error(error.message);
  }
};

export { signupUser };

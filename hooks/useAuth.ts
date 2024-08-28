
import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export const handleRegister = async (
  {
    email,
    password,
    username,
    setLoading, 
    setError,  
  }: {
    email: string;
    password: string;
    username: string;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<string | null>>;
  },
  router: ReturnType<typeof useRouter> 
) => {
  // Default avatar URL
  const defaultAvatarUrl = './avatar.jpeg';

  console.log(username, email, password);
  
  setLoading(true);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    if (user) {
      await Promise.all([
        setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          avatar: defaultAvatarUrl,
          id: res.user.uid,
          blocked: [],
        }),
        setDoc(doc(db, "userchats", res.user.uid), {
          chats: [],
        }),
        setDoc(doc(db, "userservers", res.user.uid), {
          servers: [],
        }),
      ]);

      alert("Account Created! You Can Login Now");
      

      router.push('/');
    }
  } catch (err) {
    console.log(err);
    setError('Failed to create an account. Please try again.');
  } finally {
    setLoading(false); 
  }
};

export const handleLogin = async (
  {
    email,
    password,
    setLoading,
    setError,
  }: {
    email: string;
    password: string;
    setLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<string | null>>;
  },
  router: ReturnType<typeof useRouter>
) => {
  console.log(email, password);
  
  setLoading(true);

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Account Logged In");

    router.push('/');
  } catch (err) {
    console.log(err);
    setError('Failed to log in. Please check your credentials.');
  } finally {
    setLoading(false); 
  }
};

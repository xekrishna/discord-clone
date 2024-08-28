import { create } from 'zustand';
import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

interface User {
  name: string;
  email: string;
  avatarUrl: string;

}


export const useUserStore = create<{
  currentUser: User | null;
  isLoading: boolean;
  fetchUserInfo: (uid: string) => Promise<void>;
}>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string) => {
    if (!uid) {
      return set({ currentUser: null, isLoading: false });
    }

    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data() as User, isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      set({ currentUser: null, isLoading: false });
    }
  },
}));

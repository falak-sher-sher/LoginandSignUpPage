import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
; // ✅ Ensure correct import path

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('Got user:', user);
            setUser(user || null); // ✅ Simplified null check
        });

        return () => unsubscribe(); // ✅ Proper cleanup
    }, []);

    return { user };
}

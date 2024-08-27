'use client';

import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { BsDiscord } from "react-icons/bs";
import { motion } from "framer-motion"; 

const Page = () => {
    const [userDetails, setUserDetails] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    const fetchUserDetails = useCallback(async () => {
        setLoading(true); 
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                try {
                    const docRef = doc(db, 'users', user.uid);
                    const docSnap = await getDoc(docRef);

                    if (docSnap.exists()) {
                        setUserDetails(docSnap.data());
                        console.log(docSnap.data());
                    } else {
                        console.log("No such document!");
                    }
                } catch (error) {
                    console.error("Error fetching user details: ", error);
                } finally {
                    setLoading(false); 
                }
            } else {
                setLoading(false);
                router.push('/login');
            }
        });
    }, [router]);

    useEffect(() => {
        fetchUserDetails();
    }, [fetchUserDetails]);

    useEffect(() => {
        if (userDetails) {
            router.push('/channels');
        }
    }, [userDetails, router]);


    const swingAnimation = {
        swing: {
            rotate: [0, 40, -40, 40, -40, 0], 
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity, 
            },
        },
    };

    if (loading) {
        return (
            <main className="bg-bg2 text-text3 w-full h-[100vh] flex justify-center items-center flex-col gap-5 text-lg">
                <motion.div variants={swingAnimation} animate="swing">
                    <BsDiscord className="text-5xl" />
                </motion.div>
                <span>Welcome to Discord</span>
            </main>
        );
    }

    return null;
};

export default Page;

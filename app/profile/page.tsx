// app/profile/page.tsx
"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session?.user.email) {
        setUserEmail(data.session.user.email);
      } else {
        router.push("/login");
      }
    };
    getSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userEmail}</h1>
      <button
        onClick={handleLogout}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Logout
      </button>
    </div>
  );
}

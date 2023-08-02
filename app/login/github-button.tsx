'use client';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
export default function GithubButton() {
    const supabase = createClientComponentClient<Database>();
    const handleSignin = async () => {
        await supabase.auth.signInWithOAuth({provider: 'github', options: {redirectTo: `${location.origin}/auth/callback`}});
    };
    return <button className="hover:bg-gray-800 p-8 rounded-xl" onClick={handleSignin}><Image alt="github button logo" src="/github-mark-white.png" height={100} width={100}/></button>
}
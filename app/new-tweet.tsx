import { User, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
export const dynamic = "force-dynamic";
export default function NewTweet( {user}: {user: User}){
    const addTweet = async (formData: FormData) => {
        'use server'
        console.log("submitted");
        const title = String(formData.get('title'));
        const supabase = createServerComponentClient<Database>({cookies});
        
            await supabase.from('tweets').insert({title, user_id: user.id});
        
    }

    return (
        <form className="border border-gray-800 border-t-0" action={addTweet}>
            <div className="flex px-4 py-8">
            <div className="h-12 w-12 bg-red-200"><Image className="rounded-full" src={user.user_metadata.avatar_url} alt="user avatar" width={48} height={48}/></div>
            <input  name="title" placeholder="What's happening?" className="bg-inherit flex-1 ml-2 text-2xl leading-loose placeholder-gray-500 px-2"  />
            </div>

        </form>
    )
}
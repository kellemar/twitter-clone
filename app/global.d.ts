import { Database as db } from "@/lib/database.types";

declare global {
    type Database = db;
    type TweetWithAuthor = Tweet & {
        author: Profile;
        likes: number;
        user_has_liked_tweet: boolean;
    }
}

type Tweet = db['public']['Tables']['tweets']['Row'];
type Profile = db['public']['Tables']['profiles']['Row'];

import db from "../lib/db"

export const follow = async (followedById: string, followingId: string) => {
   const existingFollow = await db.follow.findFirst({
    where: {
        followedById,
        followingId
    }
   })

   if(existingFollow) {
    await db.follow.deleteMany({
        where: {
            followedById,
            followingId
        }
    })

    return "unfollow successful"
   }
   const follow = await db.follow.create({
    data: {
        followedById,
        followingId
    }
   })

   return "following successful"
} 

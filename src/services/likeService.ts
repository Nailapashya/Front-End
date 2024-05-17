import db from "../lib/db"

export const getLikes = async (threadId: string) => {
    return await db.like.findMany({
        where: {
            threadId
        },
        include: {
            user: {
                select: {
                    id: true,
                    fullname: true
                }
            }
        }
    })
}

export const getCurrentLike = async (threadId: string, userId: string) => {
    return await db.like.findFirst({
       where: {
          threadId,
          userId,
       },
    });
 };
 
 export const createLike = async (payload: {
    threadId: string,
    userId: string
 }) => {
    const existedThread = await db.thread.findFirst({
       where: {
          id: payload.threadId,
       },
    });
 
    if (!existedThread) {
       throw new Error("Thread not found");
    }
 
    const existedLike = await db.like.findFirst({
       where: {
          threadId: payload.threadId,
          userId: payload.userId,
       },
    });
 
    if (existedLike) {
       return await db.like.deleteMany({
          where: {
             threadId: payload.threadId,
             userId: payload.userId,
          },
       });
    }
 
    return await db.like.create({
       data: {
          ...payload,
       },
    });
 };
 
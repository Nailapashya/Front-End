import { User } from "@prisma/client"
import db from "../lib/db"
import { ERROR_MESSAGE, ERROR_OBJECT } from "../utils/constant/error"
import { IUserSuggestion } from "../types/app"


// export const findAll = async (): Promise <User> => {
//     return  await db.user.findMany({
//         skip,
//         take: pageSize
//     })
// }


export const findByid = async (id: string): Promise<User | null> => {
    return db.user.findFirst({
        where: {
            id,
        }
    })
}

export const findByName = async (fullname: string): Promise<User[]> => {
    return await db.user.findMany({
        where: {
            fullname 
        }
    })
}

export const insertUser = async (body: User): Promise<User> => {
    return db.user.create({data: body,})
}

export const deleteUser = async (id: string): Promise<string> => {
    const existUser = await db.user.findFirst({where: { id } })

    if(!existUser) {
        throw new Error(ERROR_MESSAGE.DATA_NOT_FOUND)
    }

    await db.user.delete({
        where: {
           id,
        },
     });
  
     return "Sukses delete user dengan id " + id;
  };
  
export const getSuggestedUser = async (query:{limit: string}): Promise<IUserSuggestion[]> => {
    const limit = parseInt(query.limit as string) || 5
    
   const user = await db.user.findMany({
            take: +limit,
            select: {
                id: true,
                fullname: true,
                following: true
            }
    })
console.log(user);

    return user
}

export function updateUser(id: string, body: User): Promise<User> {
    return db.user.update({ where: { id }, data: body });
}
 
export const getSingleUser = async (condition: {[key: string]: string;}): Promise<User | null> => {
    return db.user.findFirst({
    where: condition,
    });
};

import db from "../lib/db";
import { IProfile } from "../types/app";

export const updateProfile = async (userId: string, payload: IProfile) => {
   return await db.profile.update({
      where: {
         userId,
      },
      data: {
         ...payload,
      },
   });
};

export const getProfile = async (userId: string) => {
   return await db.profile.findFirst({
      where: {
         userId,
      },
      include: {
         user: {
            select: {
               fullname: true,
               id: true,
            },
         },
      },
   });
};

export const getProfileById = async (userId: string) => {
   return await db.profile.findFirst({
      where: {
         userId,
      },
      include: {
         user: {
            select: {
               fullname: true,
               id: true,
            },
         },
      },
   });
};


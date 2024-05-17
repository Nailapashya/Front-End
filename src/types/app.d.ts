export interface IErrorObj {
    [key: string] : { statusCode: number; message: string};
}

export interface IRegister {
    username: string;
    password: string;
    email: string;
    fullname: string;
 }
 
 export type AuthMiddlewareData = {
    id: string;
 };

 export interface IProfile {
    bio?: string;
    avatar?: string;
    cover?: string;
    userId?: string;
 }
 
 export interface IThread {
    id?: number;
    content?: string;
    userId: number;
    threadId?: number;
 }
 

 export interface IUserSuggestion {
   id: string;
   fullname: string;
   following: IFollowing[]
     
}

export interface IFollowing {
   followedById: string;
   followingId: string;
}
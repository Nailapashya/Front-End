 export interface IThread {
    id? : number;
    content? : string
    image? : IThreadImage[]
    author? : IAuthor
}

export interface IThreadImage {
    id? : number;
    image? : string;
}

export interface IAuthor {
    id? : number;
    username? : string;
    fullname? : string;
    profile? : IProfile
}

export interface IProfile {
    bio? : string
    avatar? : string;
    cover? : string;
}

export interface IUser {
    id?: string;
    username?: string;
    fullname?: string;
    avatar?: string;
    profile?: IProfile
}
export interface Profile {
    userid: string,
    name: string,
    nickname: {
        type: String,
        trim: true
    },
    liked_songs: string[],
    num_liked_songs: number,
    avatar: {
        data: Buffer,
        contentType: String
    },
}
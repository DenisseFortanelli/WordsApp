export interface Users {
    data: IUser[];
}
/* export interface Image {
    file_name:  string;
    updated_at: string;
} */

export interface IUser {
    birthday?: string;
    email?: string;
    name?: string;
    id?: string;
    auth0_id?: string;
    lastname?: string;
    middlename?: string;
    second_lastname?:string
    phone?: string;
    timezone?: string;
    language?: string;
    image?:string;
    is_admin?:boolean;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toUsers(json: string): Users {
        return JSON.parse(json);
    }

    public static usersToJson(value: Users): string {
        return JSON.stringify(value);
    }
}
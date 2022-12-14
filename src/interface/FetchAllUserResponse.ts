// To parse this data:
//
//   import { Convert, Users } from "./file";
//
//   const users = Convert.toUsers(json);

export interface Users {
    map(arg0: (user: User) => JSX.Element): import("react").ReactNode;
    data: User[];
}

export interface User {
    date_of_birth:    string;
    email:            string;
    first_name:       string;
    id:               number;
    id_auth0:         string;
    last_name:        string;
    second_last_name: string;
    second_name:      string;
    telephone:        string;
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

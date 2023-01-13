// To parse this data:
//
//   import { Convert, Categories } from "./file";
//
//   const Categories = Convert.toCategories(json);

export interface Categories {
    categories:  Category[];
    first:       number;
    has_next:    boolean;
    has_prev:    boolean;
    last:        number;
    next_page:   number;
    page:        number;
    prev_page:   number;
    total_count: number;
}

export interface Category {
    code:        string;
    description: string;
    id:          string;
    name:        string;
    words:       Word[];
}

export interface Word {
    description: string;
    id:          string;
    image:       Image | null;
    name:        string;
}

export interface Image {
    file_name:  string;
    updated_at: Date;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCategories(json: string): Categories {
        return JSON.parse(json);
    }

    public static CategoriesToJson(value: Categories): string {
        return JSON.stringify(value);
    }
}
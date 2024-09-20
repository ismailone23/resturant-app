import { Feather } from "@expo/vector-icons";
import { Dispatch, SetStateAction } from "react";

export interface contexttype {
    usertoken: string;
    loading: boolean;
    setLoading: Dispatch<SetStateAction<boolean>>;
    message: {
        error: boolean;
        txt: string;
    } | null;
    setMessage: Dispatch<SetStateAction<null | { error: boolean; txt: string }>>;
    createacc: ({
        username,
        phone,
        password
    }: {
        username: string,
        phone: string
        password: string
    }) => Promise<unknown>;
    signin: ({ phone, password }: {
        phone: string;
        password: string;
    }) => Promise<void>;
    logout: () => Promise<void>;
    isLoggedIn: () => Promise<string | null>;
    setSelectedCategory: Dispatch<SetStateAction<string>>;
    selectedCategory: string;
    setRecipeData: Dispatch<SetStateAction<recipe[]>>;
    recipeData: recipe[];
}

export type routetype = {
    name: string;
    title: string;
    header: string;
    icon: keyof typeof Feather.glyphMap;
    tabBarBadge: number;
}
export type draweritemtype = {
    name: string;
    title: string;
    icon: keyof typeof Feather.glyphMap;
}

export type recipe = {
    id: number;
    name: string;
    cuisine: string;
    difficulty: string;
    tags: string[];
    ingredients: string[];
    mealType: string[];
    instructions: string[];
    caloriesPerServing: number;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
}
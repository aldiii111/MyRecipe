import type { Meal } from "@/types/meal"

export function getIngredient(meal: Meal) {
    const result = [];

    for (let i = 1; i <= 20; i++) {
        const nama = meal[`strIngredient${i}` as keyof Meal] as string;
        const measure = meal[`strMeasure${i}` as keyof Meal] as string;

        if(nama && nama.trim() !== '') {
            result.push({nama: nama.trim(), measure: measure?.trim() || ''})
        }
    }

    return result;
}
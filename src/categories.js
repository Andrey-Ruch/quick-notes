export const CATEGORIES = [
    { value: "personal", label: "Personal", color: "blue" },
    { value: "work", label: "Work", color: "teal" },
    { value: "other", label: "Other", color: "gray" },
];

export const DEFAULT_CATEGORY = CATEGORIES[0].value;

export function getCategory(value) {
    return CATEGORIES.find((category) => category.value === value) ?? CATEGORIES[2]; // "Other"
}

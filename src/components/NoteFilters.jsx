import { TextInput, Button, Group, Stack } from "@mantine/core";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { CATEGORIES } from "../categories";

export function NoteFilters({
    search,
    onSearchChange,
    activeCategory,
    onCategoryChange,
}) {
    return (
        <Stack gap="sm">
            <TextInput
                placeholder="Search notes..."
                leftSection={<MagnifyingGlassIcon size={18} />}
                value={search}
                onChange={(event) => {
                    onSearchChange(event.target.value);
                }}
            />

            <Group gap="xs">
                <Button
                    variant={activeCategory === "all" ? "filled" : "outline"}
                    onClick={() => onCategoryChange("all")}
                >
                    All
                </Button>

                {CATEGORIES.map((category) => (
                    <Button
                        key={category.value}
                        color={category.color}
                        variant={
                            activeCategory === category.value
                                ? "filled"
                                : "outline"
                        }
                        onClick={() => onCategoryChange(category.value)}
                    >
                        {category.label}
                    </Button>
                ))}
            </Group>
        </Stack>
    );
}

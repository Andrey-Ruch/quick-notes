import { useState } from "react";
import {
    Textarea,
    TextInput,
    Select,
    Button,
    Paper,
    Stack,
    Group,
} from "@mantine/core";
import { CATEGORIES, DEFAULT_CATEGORY } from "../categories";

export function NoteForm({ note, onAdd, onUpdate, isEditMode }) {
    const [title, setTitle] = useState(note?.title ?? "");
    const [text, setText] = useState(note?.text ?? "");
    const [category, setCategory] = useState(
        note?.category ?? DEFAULT_CATEGORY,
    );

    function handleAddNote() {
        if (text.trim() === "") return;

        onAdd(title, text, category);
        setTitle("");
        setText("");
        setCategory(DEFAULT_CATEGORY);
    }

    function handleUpdateNote() {
        if (text.trim() === "") return;

        onUpdate(note.id, title, text, category);
    }

    return (
        <Paper
            withBorder={!isEditMode}
            p={isEditMode ? undefined : "md"}
            shadow={isEditMode ? undefined : "sm"}
        >
            <Stack gap="sm">
                <TextInput
                    label="Title"
                    placeholder="Optional note title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <Textarea
                    label="Note"
                    placeholder="Write you note here..."
                    autosize
                    minRows={3}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />

                <Select
                    label="Category"
                    data={CATEGORIES}
                    value={category}
                    onChange={setCategory}
                    allowDeselect={false}
                />

                <Group justify="flex-end">
                    <Button
                        onClick={isEditMode ? handleUpdateNote : handleAddNote}
                        disabled={text.trim() === ""}
                    >
                        {isEditMode ? "Update" : "Add"}
                    </Button>
                </Group>
            </Stack>
        </Paper>
    );
}

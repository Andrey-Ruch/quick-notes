import { useState } from "react";
import {
    Textarea,
    TextInput,
    Button,
    Paper,
    Stack,
    Group,
} from "@mantine/core";

export function NoteForm({ note, onAdd, onUpdate, isEditMode }) {
    const [title, setTitle] = useState(note?.title ?? "");
    const [text, setText] = useState(note?.text ?? "");

    function handleAddNote() {
        if (text.trim() === "") return;

        onAdd(title, text);
        setTitle("");
        setText("");
    }

    function handleUpdateNote() {
        if (text.trim() === "") return;

        onUpdate(note.id, title, text);
    }

    return (
        <Paper
            withBorder={!isEditMode}
            p={isEditMode ? undefined : "md"}
            shadow={isEditMode ? undefined : "sm"}
        >
            <Stack gap="sm">
                <TextInput
                    placeholder="Optional note title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <Textarea
                    placeholder="Write you note here..."
                    autosize
                    minRows={3}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
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

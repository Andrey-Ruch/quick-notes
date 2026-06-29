import { useState } from "react";
import {
    Textarea,
    TextInput,
    Button,
    Paper,
    Stack,
    Group,
} from "@mantine/core";

export function NoteForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function handleAddNote() {
        if (text.trim() === "") return;

        onAdd(title, text);
        setTitle("");
        setText("");
    }

    return (
        <Paper withBorder p="md" shadow="sm" radius="md">
            <Stack gap="sm">
                <TextInput
                    label="Title"
                    placeholder="Optional title"
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <Textarea
                    label="Note"
                    placeholder="Write something..."
                    autosize
                    minRows={3}
                    value={text}
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                />

                <Group justify="flex-end">
                    <Button
                        onClick={handleAddNote}
                        disabled={text.trim() === ""}
                    >
                        Add note
                    </Button>
                </Group>
            </Stack>
        </Paper>
    );
}

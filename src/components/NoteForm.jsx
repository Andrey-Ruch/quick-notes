import { useState } from "react";
import { Textarea, Button, Paper, Stack, Group } from "@mantine/core";

export function NoteForm({ onAdd }) {
    const [text, setText] = useState("");

    function handleAddNote() {
        if (text.trim() === "") return;

        onAdd(text);
        setText("");
    }

    return (
        <Paper withBorder p="md" shadow="sm" radius="md">
            <Stack gap="sm">
                <Textarea
                    label="New note"
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

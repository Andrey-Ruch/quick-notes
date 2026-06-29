import { Card, Group, Text, ActionIcon } from "@mantine/core";
import { XIcon } from "@phosphor-icons/react";

export function NoteCard({ note, onDelete }) {
    function handleDelete() {
        const agree = confirm("Are you sure you want to delete your note?");
        if (agree) onDelete(note.id);
    }

    return (
        <Card withBorder shadow="sm" radius="md" padding="md">
            <Group justify="space-between" mb="xs">
                <Text size="sm" c="dimmed" mb="xs">
                    {new Date(note.createdAt).toLocaleString()}
                </Text>

                <ActionIcon
                    variant="subtle"
                    color="red"
                    aria-label="Delete note"
                    onClick={() => handleDelete()}
                >
                    <XIcon size={18} />
                </ActionIcon>
            </Group>

            <Text style={{ whiteSpace: "pre-wrap" }}>{note.text}</Text>
        </Card>
    );
}

import { Card, Group, Text, ActionIcon } from "@mantine/core";
import { XIcon } from "@phosphor-icons/react";

export function NoteCard({ note, onDelete, onOpen }) {
    const { id, title, text, createdAt, updatedAt } = note;
    const displayCreatedDate = new Date(createdAt).toLocaleString(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    });

    let displayUpdatedDate;
    if (updatedAt) {
        displayUpdatedDate = new Date(updatedAt).toLocaleString(undefined, {
            dateStyle: "short",
            timeStyle: "short",
        });
    }

    function handleDelete(event) {
        event.stopPropagation();
        const agree = confirm("Are you sure you want to delete your note?");
        if (agree) onDelete(id);
    }

    function handleClick() {
        onOpen(note);
    }

    return (
        <Card
            withBorder
            shadow="sm"
            radius="md"
            padding="md"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
        >
            <Group justify="flex-end">
                <ActionIcon
                    variant="subtle"
                    color="red"
                    aria-label="Delete note"
                    onClick={handleDelete}
                >
                    <XIcon size={18} />
                </ActionIcon>
            </Group>

            {title && (
                <Text fw={600} size="lg" mb={4}>
                    {title}
                </Text>
            )}

            <Text style={{ whiteSpace: "pre-wrap" }}>{text}</Text>

            <Text size="sm" c="dimmed" mt="md">
                Created at: {displayCreatedDate}
            </Text>

            {displayUpdatedDate && (
                <Text size="sm" c="dimmed">
                    Updated at: {displayUpdatedDate}
                </Text>
            )}
        </Card>
    );
}

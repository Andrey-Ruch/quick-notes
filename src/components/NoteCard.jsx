import { Card, Text } from "@mantine/core";

export function NoteCard({ note }) {
    return (
        <Card withBorder shadow="sm" radius="md" padding="md">
            <Text size="sm" c="dimmed" mb="xs">
                {new Date(note.createdAt).toLocaleString()}
            </Text>

            <Text style={{ whiteSpace: "pre-wrap" }}>{note.text}</Text>
        </Card>
    );
}

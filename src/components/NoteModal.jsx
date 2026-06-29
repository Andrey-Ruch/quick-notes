import { Modal, Text, Stack } from "@mantine/core";

export function NoteModal({ note, opened, onClose }) {
    const { title, text, createdAt } = note;
    const displayDate = new Date(createdAt).toLocaleString(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    });

    return (
        <Modal opened={opened} onClose={onClose} centered>
            {note && (
                <Stack gap="sm">
                    <Text size="sm" c="dimmed">
                        {displayDate}
                    </Text>

                    {title && (
                        <Text fw={600} size="lg">
                            {title}
                        </Text>
                    )}

                    <Text style={{ whiteSpace: "pre-wrap" }}>{text}</Text>
                </Stack>
            )}
        </Modal>
    );
}

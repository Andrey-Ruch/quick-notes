import { useState } from "react";
import { Container, Title, SimpleGrid, Stack, Text } from "@mantine/core";
import { NoteForm } from "./components/NoteForm";
import { NoteCard } from "./components/NoteCard";

export default function App() {
    const [notes, setNotes] = useState([]);

    function addNote(title, text) {
        const newNote = {
            id: crypto.randomUUID(),
            title,
            text,
            createdAt: new Date().toISOString(),
        };

        setNotes([...notes, newNote]);
    }

    function deleteNote(id) {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    }

    return (
        <Container size="sm" py="xl">
            <Stack gap="xl">
                <Title order={1}>QuickNotes</Title>

                <NoteForm onAdd={addNote} />

                {notes.length === 0 ? (
                    <Text c="dimmed">
                        No notes yet - add your first one above.
                    </Text>
                ) : (
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                        {notes.map((note) => (
                            <NoteCard
                                key={note.id}
                                note={note}
                                onDelete={deleteNote}
                            />
                        ))}
                    </SimpleGrid>
                )}
            </Stack>
        </Container>
    );
}

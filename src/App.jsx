import { useState, useEffect } from "react";

// Mantine
import { useDisclosure } from "@mantine/hooks";
import { Container, Title, SimpleGrid, Stack, Text } from "@mantine/core";

// Components
import { NoteForm } from "./components/NoteForm";
import { NoteFilters } from "./components/NoteFilters";
import { NoteCard } from "./components/NoteCard";
import { NoteModal } from "./components/NoteModal";

const STORAGE_KEY = "quicknotes-notes";

export default function App() {
    const [notes, setNotes] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });
    const [selectedNote, setSelectedNote] = useState(null);
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }, [notes]);

    const [opened, { open, close }] = useDisclosure(false);

    function addNote(title, text, category) {
        const newNote = {
            id: crypto.randomUUID(),
            title,
            text,
            category,
            createdAt: new Date().toISOString(),
            updatedAt: "",
        };

        setNotes([...notes, newNote]);
    }

    function updateNote(id, title, text, category) {
        const updates = {
            title,
            text,
            category,
            updatedAt: new Date().toISOString(),
        };
        const updatedNotes = notes.map((note) => {
            if (note.id === id) {
                return { ...note, ...updates };
            }
            return note;
        });

        setNotes([...updatedNotes]);
        close();
    }

    function deleteNote(id) {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    }

    function openNote(note) {
        setSelectedNote(note);
        open();
    }

    const query = search.trim().toLowerCase();
    const visibleNotes = notes.filter((note) => {
        const matchesCategory =
            activeCategory === "all" || note.category === activeCategory;
        const matchesSearch =
            note.title.toLowerCase().includes(query) ||
            note.text.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
    });

    return (
        <Container size="sm" py="xl">
            <Stack gap="xl">
                <Title order={1}>QuickNotes</Title>

                <NoteForm onAdd={addNote} />

                <NoteFilters
                    search={search}
                    onSearchChange={setSearch}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />

                {notes.length === 0 ? (
                    <Text c="dimmed">
                        No notes yet - add your first one above.
                    </Text>
                ) : visibleNotes.length === 0 ? (
                    <Text c="dimmed">No notes match your search.</Text>
                ) : (
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                        {visibleNotes.map((note) => (
                            <NoteCard
                                key={note.id}
                                note={note}
                                onDelete={deleteNote}
                                onOpen={openNote}
                            />
                        ))}
                    </SimpleGrid>
                )}

                {selectedNote && (
                    <NoteModal
                        note={selectedNote}
                        onUpdate={updateNote}
                        opened={opened}
                        onClose={close}
                    />
                )}
            </Stack>
        </Container>
    );
}

import { Modal } from "@mantine/core";
import { NoteForm } from "./NoteForm";

export function NoteModal({ note, onUpdate, opened, onClose }) {
    return (
        <Modal opened={opened} onClose={onClose} centered>
            <NoteForm
                key={note.id}
                note={note}
                onUpdate={onUpdate}
                isEditMode
            />
        </Modal>
    );
}

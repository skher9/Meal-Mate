import React, { useState } from 'react';
import {
  NotesContainer,
  HeaderSection,
  HeaderTitle,
  HeaderText,
  SearchBarContainer,
  SearchInput,
  NotesGrid,
  NoteCard,
  NoteTitle,
  NotePreview,
  NoteMetadata,
  UpdatedText,
  LinkedRecipe,
  AddNoteButton,
  EmptyState,
  EmptyStateTitle,
  EmptyStateText,
  NoteFormModal,
  NoteForm,
  FormHeader,
  FormTitle,
  FormField,
  ButtonContainer,
  OrangeButton,
  StyledTextField
} from './styles';
import {
  Add as AddIcon,
  StickyNote2Outlined as NoteIcon,
  Close as CloseIcon,
  Search as SearchIcon,
  Restaurant as RecipeIcon
} from '@mui/icons-material';
import {
  Button,
  IconButton,
  InputAdornment,
  Autocomplete
} from '@mui/material';

interface Note {
  id: string;
  title: string;
  content: string;
  lastUpdated: string;
  linkedRecipe?: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    linkedRecipe: ''
  });

  // Mock recipes for the dropdown
  const availableRecipes = [
    'Lemon Pasta',
    'Chicken Curry',
    'Vegetable Stir Fry',
    'Chocolate Cake'
  ];

  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      const note: Note = {
        id: Date.now().toString(),
        title: newNote.title,
        content: newNote.content,
        lastUpdated: new Date().toLocaleDateString(),
        linkedRecipe: newNote.linkedRecipe || undefined
      };
      setNotes([note, ...notes]);
      setNewNote({ title: '', content: '', linkedRecipe: '' });
      setIsModalOpen(false);
    }
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <NotesContainer>
      <HeaderSection>
        <HeaderTitle>
          <NoteIcon fontSize="large" />
          My Notes
        </HeaderTitle>
        <HeaderText>Your personal space to store tips, reminders, and recipe tweaks 🧠🍴</HeaderText>
      </HeaderSection>

      {notes.length > 0 && (
        <SearchBarContainer>
          <SearchInput
            fullWidth
            placeholder="Search your notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
          />
        </SearchBarContainer>
      )}

      {notes.length > 0 ? (
        <NotesGrid>
          {filteredNotes.map((note) => (
            <NoteCard key={note.id}>
              <NoteTitle>{note.title}</NoteTitle>
              <NotePreview>{note.content}</NotePreview>
              <NoteMetadata>
                <UpdatedText>Last updated on {note.lastUpdated}</UpdatedText>
                {note.linkedRecipe && (
                  <LinkedRecipe href="#">
                    <RecipeIcon fontSize="small" />
                    {note.linkedRecipe}
                  </LinkedRecipe>
                )}
              </NoteMetadata>
            </NoteCard>
          ))}
        </NotesGrid>
      ) : (
        <EmptyState>
          <img src="/assets/Notes.gif" alt="No notes yet" />
          <EmptyStateTitle>No Notes Yet</EmptyStateTitle>
          <EmptyStateText>You haven't added any notes yet. Your food thoughts live here!</EmptyStateText>
        </EmptyState>
      )}

      <AddNoteButton onClick={() => setIsModalOpen(true)}>
        <AddIcon />
      </AddNoteButton>

      {isModalOpen && (
        <NoteFormModal>
          <NoteForm>
            <FormHeader>
              <FormTitle>Add New Note</FormTitle>
              <IconButton onClick={() => setIsModalOpen(false)}>
                <CloseIcon />
              </IconButton>
            </FormHeader>

            <FormField>
              <StyledTextField
                fullWidth
                label="Title"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              />
            </FormField>

            <FormField>
              <Autocomplete
                options={availableRecipes}
                value={newNote.linkedRecipe}
                onChange={(_, newValue) => setNewNote({ ...newNote, linkedRecipe: newValue || '' })}
                renderInput={(params) => (
                  <StyledTextField
                    {...params}
                    label="Link to Recipe (Optional)"
                  />
                )}
              />
            </FormField>

            <FormField>
              <StyledTextField
                fullWidth
                multiline
                rows={4}
                label="Content"
                value={newNote.content}
                onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
              />
            </FormField>

            <ButtonContainer>
              <Button
                variant="outlined"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>
              <OrangeButton
                variant="contained"
                onClick={handleAddNote}
                disabled={!newNote.title || !newNote.content}
              >
                Save Note
              </OrangeButton>
            </ButtonContainer>
          </NoteForm>
        </NoteFormModal>
      )}
    </NotesContainer>
  );
};

export default Notes; 
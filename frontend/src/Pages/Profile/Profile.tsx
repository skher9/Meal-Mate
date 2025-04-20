import React, { useState } from 'react';
import {
  ProfileContainer,
  PageHeader,
  ProfileCard,
  ProfileAvatar,
  ProfileInfo,
  ProfileActions,
  StatsContainer,
  StatCard,
  SectionHeader,
  SectionCard,
  NotesPreview,
  NoteCard,
  SettingsSection,
  SettingItem,
  ActionButton
} from './Profile.styles';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  MenuBook as MenuBookIcon,
  Note as NoteIcon,
  CalendarToday as CalendarIcon,
  Favorite as FavoriteIcon,
  Lock as LockIcon,
  Add as AddIcon,
  Visibility as ViewAllIcon
} from '@mui/icons-material';
import { Switch, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

// Sample data - in a real app, this would come from an API
const SAMPLE_USER = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  joinDate: 'March 2025',
  stats: {
    recipes: 12,
    notes: 5,
    mealPlans: 3,
    favorites: 8
  },
  recentNotes: [
    {
      id: 1,
      title: 'Pasta Carbonara Tips',
      content: 'Remember to use fresh eggs and good quality parmesan...',
      date: '2025-03-15'
    },
    {
      id: 2,
      title: 'Weekly Meal Prep',
      content: 'Prep vegetables on Sunday for quick weekday meals...',
      date: '2025-03-12'
    },
    {
      id: 3,
      title: 'Dietary Notes',
      content: 'Track protein intake and adjust portions accordingly...',
      date: '2025-03-10'
    }
  ]
};

const Profile: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedName, setEditedName] = useState(SAMPLE_USER.name);

  const handleDeleteAccount = () => {
    // Implement delete account logic
    setIsDeleteDialogOpen(false);
  };

  const handleEditProfile = () => {
    // Implement edit profile logic
    setIsEditDialogOpen(false);
  };

  return (
    <ProfileContainer>
      <PageHeader>
        <h2>My Profile</h2>
        <p>Manage your recipes, notes, and meal plans all in one place.</p>
      </PageHeader>

      <ProfileCard>
        <ProfileAvatar src="/path-to-avatar.jpg" alt={SAMPLE_USER.name} />
        <ProfileInfo>
          <h3>{SAMPLE_USER.name}</h3>
          <p>{SAMPLE_USER.email}</p>
          <p>Joined on {SAMPLE_USER.joinDate}</p>
        </ProfileInfo>
        <ProfileActions>
          <ActionButton
            variant="outlined"
            startIcon={<EditIcon />}
            onClick={() => setIsEditDialogOpen(true)}
          >
            Edit Info
          </ActionButton>
          <ActionButton
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => setIsDeleteDialogOpen(true)}
          >
            Delete Account
          </ActionButton>
        </ProfileActions>
      </ProfileCard>

      <StatsContainer>
        <StatCard>
          <MenuBookIcon className="stat-icon" />
          <div className="stat-info">
            <h4>Recipes Added</h4>
            <p>{SAMPLE_USER.stats.recipes} Recipes</p>
          </div>
        </StatCard>
        <StatCard>
          <NoteIcon className="stat-icon" />
          <div className="stat-info">
            <h4>Notes Written</h4>
            <p>{SAMPLE_USER.stats.notes} Notes</p>
          </div>
        </StatCard>
        <StatCard>
          <CalendarIcon className="stat-icon" />
          <div className="stat-info">
            <h4>Meal Plans</h4>
            <p>{SAMPLE_USER.stats.mealPlans} This Week</p>
          </div>
        </StatCard>
        <StatCard>
          <FavoriteIcon className="stat-icon" />
          <div className="stat-info">
            <h4>Favorites</h4>
            <p>{SAMPLE_USER.stats.favorites} Saved Recipes</p>
          </div>
        </StatCard>
      </StatsContainer>

      <SectionCard>
        <SectionHeader>
          <h3>My Recipes</h3>
          <ActionButton
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add New Recipe
          </ActionButton>
        </SectionHeader>
        {/* Recipe cards would go here */}
      </SectionCard>

      <SectionCard>
        <SectionHeader>
          <h3>My Notes</h3>
          <ActionButton
            variant="outlined"
            startIcon={<ViewAllIcon />}
          >
            View All Notes
          </ActionButton>
        </SectionHeader>
        <NotesPreview>
          {SAMPLE_USER.recentNotes.map(note => (
            <NoteCard key={note.id}>
              <h4>{note.title}</h4>
              <p>{note.content}</p>
              <p className="note-date">{note.date}</p>
            </NoteCard>
          ))}
        </NotesPreview>
      </SectionCard>

      <SettingsSection>
        <h3>Settings & Preferences</h3>
        <SettingItem>
          <div className="setting-info">
            <h4>Dark Mode</h4>
            <p>Toggle between light and dark theme</p>
          </div>
          <Switch
            checked={isDarkMode}
            onChange={() => setIsDarkMode(!isDarkMode)}
            color="primary"
          />
        </SettingItem>
        <SettingItem>
          <div className="setting-info">
            <h4>Change Password</h4>
            <p>Update your account password</p>
          </div>
          <ActionButton
            variant="outlined"
            startIcon={<LockIcon />}
          >
            Change
          </ActionButton>
        </SettingItem>
      </SettingsSection>

      {/* Delete Account Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          Are you sure you want to delete your account? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <ActionButton onClick={() => setIsDeleteDialogOpen(false)}>
            Cancel
          </ActionButton>
          <ActionButton
            variant="contained"
            onClick={handleDeleteAccount}
            startIcon={<DeleteIcon />}
          >
            Delete Account
          </ActionButton>
        </DialogActions>
      </Dialog>

      {/* Edit Profile Dialog */}
      <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <ActionButton onClick={() => setIsEditDialogOpen(false)}>
            Cancel
          </ActionButton>
          <ActionButton
            variant="contained"
            onClick={handleEditProfile}
            startIcon={<EditIcon />}
          >
            Save Changes
          </ActionButton>
        </DialogActions>
      </Dialog>
    </ProfileContainer>
  );
};

export default Profile; 
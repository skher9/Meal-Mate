import React, { useState, useEffect } from 'react';
import {
  SettingsContainer,
  PageHeader,
  SettingsSection,
  SettingItem,
  StyledTextField,
  StyledButton,
  StyledSwitch,
  StyledMenuItem,
  SupportSection,
  SupportButton,
  FeedbackBar,
  StyledAlert
} from './Settings.styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  Select,
  Snackbar,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import BugReportIcon from '@mui/icons-material/BugReport';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

const Settings = () => {
  // Initial values
  const initialValues = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    isDarkMode: false,
    defaultRegion: 'indian',
    defaultMealTypes: [] as string[],
    emailNotifications: true
  };

  // State for account settings
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [isDarkMode, setIsDarkMode] = useState(initialValues.isDarkMode);
  const [defaultRegion, setDefaultRegion] = useState(initialValues.defaultRegion);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [defaultMealTypes, setDefaultMealTypes] = useState<string[]>(initialValues.defaultMealTypes);
  const [emailNotifications, setEmailNotifications] = useState(initialValues.emailNotifications);
  
  // State for modals and feedback
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  // Track changes
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const hasChanged = 
      name !== initialValues.name ||
      email !== initialValues.email ||
      isDarkMode !== initialValues.isDarkMode ||
      defaultRegion !== initialValues.defaultRegion ||
      JSON.stringify(defaultMealTypes) !== JSON.stringify(initialValues.defaultMealTypes) ||
      emailNotifications !== initialValues.emailNotifications;
    
    setHasChanges(hasChanged);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, email, isDarkMode, defaultRegion, defaultMealTypes, emailNotifications]);

  const handleSave = () => {
    // Here you would typically make an API call to save the settings
    setSnackbarMessage('Settings saved successfully!');
    setSnackbarSeverity('success');
    setShowSnackbar(true);
  };

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(false);
    setSnackbarMessage('Account deleted successfully');
    setSnackbarSeverity('success');
    setShowSnackbar(true);
  };

  const handleFeedback = (rating: number) => {
    setSnackbarMessage('Thank you for your feedback!');
    setSnackbarSeverity('success');
    setShowSnackbar(true);
  };

  return (
    <SettingsContainer>
      <PageHeader>
        <h2>Settings</h2>
        <p>Customize your experience & manage your account</p>
      </PageHeader>

      {/* Account Settings */}
      <SettingsSection>
        <h3>Account Settings</h3>
        
        <SettingItem>
          <div className="setting-info">
            <h4>Change Name</h4>
            <p>Update your display name</p>
          </div>
          <div className="setting-control">
            <StyledTextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
            />
          </div>
        </SettingItem>

        <SettingItem>
          <div className="setting-info">
            <h4>Change Email</h4>
            <p>Update your email address</p>
          </div>
          <div className="setting-control">
            <StyledTextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
            />
          </div>
        </SettingItem>

        <SettingItem>
          <div className="setting-info">
            <h4>Change Password</h4>
            <p>Update your account password</p>
          </div>
          <div className="setting-control">
            <StyledButton
              variant="outlined"
              onClick={() => setIsPasswordModalOpen(true)}
            >
              Change Password
            </StyledButton>
          </div>
        </SettingItem>

        <SettingItem>
          <div className="setting-info">
            <h4>Delete Account</h4>
            <p>Permanently delete your account and all data</p>
          </div>
          <div className="setting-control">
            <StyledButton
              variant="contained"
              className="delete-button"
              startIcon={<DeleteIcon />}
              onClick={() => setIsDeleteModalOpen(true)}
            >
              Delete Account
            </StyledButton>
          </div>
        </SettingItem>
      </SettingsSection>

      {/* App Preferences */}
      <SettingsSection>
        <h3>App Preferences</h3>
        
        <SettingItem>
          <div className="setting-info">
            <h4>Dark Mode</h4>
            <p>Toggle between light and dark theme</p>
          </div>
          <div className="setting-control">
            <StyledSwitch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
            />
          </div>
        </SettingItem>

        <SettingItem>
          <div className="setting-info">
            <h4>Default Region / Cuisine</h4>
            <p>Set your preferred cuisine type</p>
          </div>
          <div className="setting-control">
            <FormControl>
              <Select
                value={defaultRegion}
                onChange={(e) => setDefaultRegion(e.target.value as string)}
                variant="outlined"
              >
                <StyledMenuItem value="indian">Indian</StyledMenuItem>
                <StyledMenuItem value="italian">Italian</StyledMenuItem>
                <StyledMenuItem value="chinese">Chinese</StyledMenuItem>
                <StyledMenuItem value="mexican">Mexican</StyledMenuItem>
                <StyledMenuItem value="american">American</StyledMenuItem>
              </Select>
            </FormControl>
          </div>
        </SettingItem>

        <SettingItem>
          <div className="setting-info">
            <h4>Email Notifications</h4>
            <p>Receive email updates about your account</p>
          </div>
          <div className="setting-control">
            <StyledSwitch
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
            />
          </div>
        </SettingItem>
      </SettingsSection>

      {/* Support Section */}
      <SupportSection>
        <h3>Support & Feedback</h3>
        
        <div>
          <SupportButton
            variant="contained"
            startIcon={<EmailIcon />}
            onClick={() => setIsSupportModalOpen(true)}
          >
            Contact Support
          </SupportButton>
          
          <SupportButton
            variant="outlined"
            startIcon={<BugReportIcon />}
            onClick={() => setIsSupportModalOpen(true)}
          >
            Report a Bug
          </SupportButton>
        </div>

        <FeedbackBar>
          <span>How are we doing?</span>
          <IconButton className="emoji-button" onClick={() => handleFeedback(5)}>
            <SentimentVerySatisfiedIcon />
          </IconButton>
          <IconButton className="emoji-button" onClick={() => handleFeedback(4)}>
            <SentimentSatisfiedIcon />
          </IconButton>
          <IconButton className="emoji-button" onClick={() => handleFeedback(3)}>
            <SentimentNeutralIcon />
          </IconButton>
          <IconButton className="emoji-button" onClick={() => handleFeedback(2)}>
            <SentimentDissatisfiedIcon />
          </IconButton>
          <IconButton className="emoji-button" onClick={() => handleFeedback(1)}>
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
        </FeedbackBar>
      </SupportSection>

      {/* Save Button */}
      <StyledButton
        variant="contained"
        className="save-button"
        onClick={handleSave}
        disabled={!hasChanges}
        sx={{ marginTop: '2rem', width: '100%' }}
      >
        Save Changes
      </StyledButton>

      {/* Delete Account Modal */}
      <Dialog
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      >
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          Are you sure you want to delete your account? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </StyledButton>
          <StyledButton
            variant="contained"
            className="delete-button"
            onClick={handleDeleteAccount}
          >
            Delete Account
          </StyledButton>
        </DialogActions>
      </Dialog>

      {/* Password Change Modal */}
      <Dialog
        open={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
      >
        <DialogTitle>Change Password</DialogTitle>
        <DialogContent>
          <StyledTextField
            label="Current Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="New Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Confirm New Password"
            type="password"
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setIsPasswordModalOpen(false)}>
            Cancel
          </StyledButton>
          <StyledButton variant="contained" onClick={() => setIsPasswordModalOpen(false)}>
            Update Password
          </StyledButton>
        </DialogActions>
      </Dialog>

      {/* Support Modal */}
      <Dialog
        open={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      >
        <DialogTitle>Contact Support</DialogTitle>
        <DialogContent>
          <StyledTextField
            label="Subject"
            fullWidth
            margin="normal"
          />
          <StyledTextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setIsSupportModalOpen(false)}>
            Cancel
          </StyledButton>
          <StyledButton variant="contained" onClick={() => setIsSupportModalOpen(false)}>
            Send Message
          </StyledButton>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
      >
        <StyledAlert
          onClose={() => setShowSnackbar(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </StyledAlert>
      </Snackbar>
    </SettingsContainer>
  );
};

export default Settings; 
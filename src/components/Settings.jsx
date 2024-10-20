import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setThemeMode } from '../reducers/themeSlice';
import { deleteInactiveCards } from '../reducers/cardSlice';

function Settings() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.mode);

  const themes = ['light', 'dark', 'green'];

  const handleThemeChange = (e) => {
    dispatch(setThemeMode(e.target.value));
  };

  const handleDeleteInactive = () => {
    dispatch(deleteInactiveCards());
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <label>
        Choose Theme:
        <select value={currentTheme} onChange={handleThemeChange}>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleDeleteInactive}>Delete All Inactive Cards</button>
    </div>
  );
}

export default Settings;

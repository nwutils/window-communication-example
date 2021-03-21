function updateZoom (amount) {
  global.windowCommunication.shared.zoomLevel += amount;
  global.windowCommunication.shared.dataChanged();
}
function useTheme (theme) {
  theme = theme || 'dark';
  if (typeof(theme) !== 'string') {
    theme = 'dark';
  }
  if (!['dark', 'light'].includes(theme)) {
    theme = 'dark';
  }
  global.windowCommunication.shared.theme = theme;
  global.windowCommunication.shared.dataChanged();
}

/**
 * Events are actions that are used to invoke sagas but don't get processed in the reducer usually
 */

export default {
  // API POLLING
  START_API_POLLING: 'EVENT_START_API_POLLING',
  STOP_API_POLLING: 'EVENT_STOP_API_POLLING',
  // AUTH
  AUTH_CHANGE_PASSWORD: 'EVENT_AUTH_CHANGE_PASSWORD',
  AUTH_LOGOUT: 'EVENT_AUTH_LOGOUT',
  // FOLDER
  FOLDER_BROWSE: 'EVENT_FOLDER_BROWSE',
  // MAINPAGE
  MAINPAGE_LOAD: 'EVENT_MAINPAGE_LOAD',
  MAINPAGE_QUEUE_OPERATION: 'EVENT_MAINPAGE_QUEUE_OPERATION',
  MAINPAGE_RECENT_FILES: 'EVENT_MAINPAGE_RECENT_FILES',
  // SERVER
  SERVER_VERSION: 'EVENT_SERVER_VERSION',
  // SETTINGS
  SETTINGS_CHECK_PLEX_AUTHENTICATED: 'EVENT_SETTINGS_CHECK_PLEX_AUTHENTICATED',
  SETTINGS_PLEX_LOGIN_URL: 'EVENT_SETTINGS_PLEX_LOGIN_URL',
  SETTINGS_SAVE_SERVER: 'EVENT_SETTINGS_SAVE_SERVER',
  SETTINGS_UNLINK_PLEX: 'EVENT_SETTINGS_UNLINK_PLEX',
  // STORE
  STORE_CLEAR_STATE: 'EVENT_STORE_CLEAR_STATE',
  // LOGS
  LOGPAGE_LOAD: 'EVENT_LOGPAGE_LOAD',
};

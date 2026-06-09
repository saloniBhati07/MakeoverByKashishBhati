import { useState, useCallback } from 'react';

interface AdminState {
  sidebarOpen: boolean;
  darkMode: boolean;
  notificationCount: number;
}

export function useAdmin() {
  const [state, setState] = useState<AdminState>({
    sidebarOpen: true,
    darkMode: false,
    notificationCount: 5,
  });

  const toggleSidebar = useCallback(() => {
    setState(prev => ({ ...prev, sidebarOpen: !prev.sidebarOpen }));
  }, []);

  const closeSidebar = useCallback(() => {
    setState(prev => ({ ...prev, sidebarOpen: false }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState(prev => ({ ...prev, darkMode: !prev.darkMode }));
  }, []);

  const clearNotifications = useCallback(() => {
    setState(prev => ({ ...prev, notificationCount: 0 }));
  }, []);

  return {
    ...state,
    toggleSidebar,
    closeSidebar,
    toggleDarkMode,
    clearNotifications,
  };
}

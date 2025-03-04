import { create } from 'zustand';

interface Store {
  isRightSidebarOpen: boolean;
  toggleRightSidebar: () => void;
}

export const useStore = create<Store>((set) => ({
  isRightSidebarOpen: false,
  toggleRightSidebar: () => set((state) => ({ isRightSidebarOpen: !state.isRightSidebarOpen })),
}));
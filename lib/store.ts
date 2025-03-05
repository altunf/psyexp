import { create } from "zustand";

interface SelectedItem {
  itemType: string;
  itemId: string;
  title: string;
}

interface NodeDataMap {
  [key: string]: string;
}

interface Store {
  selectedItem: SelectedItem;
  setSelectedItem: (item: Partial<SelectedItem>) => void;

  isRightSidebarOpen: boolean;
  setRightSidebarOpen: (open: boolean) => void;
  toggleRightSidebar: () => void;

  nodeImages: NodeDataMap;
  setNodeImage: (nodeId: string, imageUrl: string) => void;
  getNodeImage: (nodeId: string) => string | undefined;

  nodeSounds: NodeDataMap ;
  setNodeSound: (nodeId: string, soundUrl: string) => void;
  getNodeSound: (nodeId: string) => string | undefined;

  nodeTimers: NodeDataMap;
  setNodeTimer: (nodeId: string, timerConfig: string) => void;
  getNodeTimer: (nodeId: string) => string | undefined;

  nodeKeyboards: NodeDataMap;
  setNodeKeyboard: (nodeId: string, keyboardConfig: string) => void;
  getNodeKeyboard: (nodeId: string) => string | undefined;

  nodeMouse: NodeDataMap;
  setNodeMouse: (nodeId: string, mouseConfig: string) => void;
  getNodeMouse: (nodeId: string) => string | undefined;

  nodeTexts: NodeDataMap;
  setNodeText: (nodeId: string, textContent: string) => void;
  getNodeText: (nodeId: string) => string | undefined;
}

export const useStore = create<Store>((set, get) => ({
  selectedItem: {
    itemType: "",
    itemId: "",
    title: "",
  },
  setSelectedItem: (item) =>
    set((state) => ({
      selectedItem: { ...state.selectedItem, ...item },
    })),

  isRightSidebarOpen: false,
  setRightSidebarOpen: (open) => set({ isRightSidebarOpen: open }),
  toggleRightSidebar: () =>
    set((state) => ({ isRightSidebarOpen: !state.isRightSidebarOpen })),

  nodeImages: {},
  setNodeImage: (nodeId, imageUrl) =>
    set((state) => ({
      nodeImages: { ...state.nodeImages, [nodeId]: imageUrl },
    })),
  getNodeImage: (nodeId) => get().nodeImages[nodeId],

  nodeSounds: {},
  setNodeSound: (nodeId, soundUrl) =>
    set((state) => ({
      nodeSounds: { ...state.nodeSounds, [nodeId]: soundUrl },
    })),
  getNodeSound: (nodeId) => get().nodeSounds[nodeId],

  nodeTimers: {},
  setNodeTimer: (nodeId, timerConfig) =>
    set((state) => ({
      nodeTimers: { ...state.nodeTimers, [nodeId]: timerConfig },
    })),
  getNodeTimer: (nodeId) => get().nodeTimers[nodeId],

  nodeKeyboards: {},
  setNodeKeyboard: (nodeId, keyboardConfig) =>
    set((state) => ({
      nodeKeyboards: { ...state.nodeKeyboards, [nodeId]: keyboardConfig },
    })),
  getNodeKeyboard: (nodeId) => get().nodeKeyboards[nodeId],

  nodeMouse: {},
  setNodeMouse: (nodeId, mouseConfig) =>
    set((state) => ({
      nodeMouse: { ...state.nodeMouse, [nodeId]: mouseConfig },
    })),
  getNodeMouse: (nodeId) => get().nodeMouse[nodeId],

  nodeTexts: {},
  setNodeText: (nodeId, textContent) =>
    set((state) => ({
      nodeTexts: { ...state.nodeTexts, [nodeId]: textContent },
    })),
  getNodeText: (nodeId) => get().nodeTexts[nodeId],
}));

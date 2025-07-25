import { FileContentName } from "#/FileContent/types";
import { create } from "zustand";

interface ContentStore {
  currentContent: FileContentName | null;
  setCurrentContent: (content: FileContentName) => void;
}

export const useContentStore = create<ContentStore>((set) => ({
  currentContent: null,
  setCurrentContent: (content: FileContentName) =>
    set({ currentContent: content }),
}));

import { FileContentName, FileContentNames } from "#/FileContent/types";
import { create } from "zustand";

interface ContentStore {
  currentContent: FileContentName | null;
  setCurrentContent: (content: FileContentName) => void;
}

export const useContentStore = create<ContentStore>((set) => ({
  currentContent: FileContentNames.ME_JSON, // Default content
  setCurrentContent: (content: FileContentName) =>
    set({ currentContent: content }),
}));

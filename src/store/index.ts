import { create } from "zustand";

type FilterState = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  searchTerm: "",
  setSearchTerm: (term: string) => set({ searchTerm: term }),
}));

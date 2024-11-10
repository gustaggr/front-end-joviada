// useNavBarStore.ts
import {create} from 'zustand';

interface NavBarState {
  hasLogged: boolean;
  isDropdownOpen: boolean;
  hasAdmin: boolean;
  toggleLogin: () => void;
  toggleDropdown: () => void;
  toggleAdmin: () => void;
  closeDropdown: () => void;
}

const useNavBarStore = create<NavBarState>((set) => ({
  hasLogged: false,
  isDropdownOpen: false,
  hasAdmin: false,
  toggleLogin: () => set((state) => ({ hasLogged: !state.hasLogged, isDropdownOpen: false })),
  toggleDropdown: () => set((state) => ({ isDropdownOpen: !state.isDropdownOpen })),
  toggleAdmin: () => set((state) => ({ hasAdmin: !state.hasAdmin })),
  closeDropdown: () => set({ isDropdownOpen: false }),
}));

export default useNavBarStore;

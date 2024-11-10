import {create} from 'zustand';

interface UserState {
  modalIsOpen: boolean;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  nameuser: string;
  email: string;
  tempName: string;
  tempEmail: string;
  setModalIsOpen: (isOpen: boolean) => void;
  setCurrentPassword: (password: string) => void;
  setNewPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  setNameUser: (name: string) => void;
  setEmail: (email: string) => void;
  setTempName: (name: string) => void;
  setTempEmail: (email: string) => void;
}

const useUserStore = create<UserState>((set) => ({
  modalIsOpen: false,
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  nameuser: 'Gustavo',
  email: 'gustavo@gmail.com',
  tempName: 'Gustavo',
  tempEmail: 'gustavo@gmail.com',
  setModalIsOpen: (isOpen) => set({ modalIsOpen: isOpen }),
  setCurrentPassword: (password) => set({ currentPassword: password }),
  setNewPassword: (password) => set({ newPassword: password }),
  setConfirmPassword: (password) => set({ confirmPassword: password }),
  setNameUser: (name) => set({ nameuser: name }),
  setEmail: (email) => set({ email }),
  setTempName: (name) => set({ tempName: name }),
  setTempEmail: (email) => set({ tempEmail: email }),
}));

export default useUserStore;

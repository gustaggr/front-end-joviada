import { create } from 'zustand';

interface UserState {
  faltam: number;  // Adicionado o estado faltam
  isMenuOpen: boolean;
  modalIsOpen: boolean;
  addModalIsOpen: boolean;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  nameuser: string;
  email: string;
  tempName: string;
  tempEmail: string;
  setFaltam: (value: number) => void; // Função para atualizar o estado faltam
  setIsMenuOpen: (isOpenMenu: boolean) => void;
  setAddModalIsOpen: (addModalIsOpen: boolean) => void;
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
  faltam: 0,  // Inicializando faltam
  setFaltam: (value) => set({ faltam: value }), // Função que atualiza faltam
  isMenuOpen: false,
  modalIsOpen: false,
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
  nameuser: 'Gustavo',
  email: 'gustavo@gmail.com',
  tempName: 'Gustavo',
  tempEmail: 'gustavo@gmail.com',
  addModalIsOpen: false,
  setAddModalIsOpen: (isOpen) => set({ addModalIsOpen: isOpen }),
  setIsMenuOpen: (isOpenMenu) => set({ isMenuOpen: isOpenMenu }),
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

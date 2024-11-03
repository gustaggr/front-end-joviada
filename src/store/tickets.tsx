import {create} from 'zustand'

type Ticket = {
    total: number;
    titcketCount: number;
}

type EventsStore = {
    tickets: Ticket[];
}

export const useEventsStore = create<EventsStore>(() => ({
    tickets: []
}))
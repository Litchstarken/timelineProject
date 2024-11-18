import { ReactNode } from "react";

export type EventType = {
    id: number;
    start: string;
    end: string;
    name: string;
};

export type UseEventsType = {
    events: EventType[];
    setEvents: React.Dispatch<React.SetStateAction<EventType[]>>
}

export type EventProps = {
    event: EventType
    color: string;
};

export type TimeLineProps = {
    lane: (number | undefined)[]; // lane is an array of numbers or undefined values representing days
};

export type EventContextType = {
    setEvents: React.Dispatch<React.SetStateAction<EventType[]>>;
    handleEvent: (event: EventType) => void;
    updateEvent: (event: EventType) => void;
    events: EventType[];
    isEditing: boolean;
    currentEvent: EventType;
}

export type EventProviderProps = {
    children: ReactNode;
}
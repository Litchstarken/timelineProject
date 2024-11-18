import { EventContext } from "../context/EventContext";
import { useState } from 'react';
import { useEvents } from '../hooks/useEvents';
import { EventType, EventProviderProps } from "../utils/types";

const EventProvider = ({ children }: EventProviderProps): JSX.Element => {
  const { events, setEvents } = useEvents();
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setEvent] = useState<EventType>({} as EventType);

  const handleEvent = (event: EventType) => {
    setIsEditing(!isEditing);
    setEvent(event)
  };

  const updateEvent = (updatedEvent: EventType) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
    setIsEditing(false); // Close editing mode
  };

  return (
    <EventContext.Provider value={{ events, setEvents, handleEvent, isEditing, currentEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export default EventProvider;




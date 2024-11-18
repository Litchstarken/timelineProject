import { useEffect, useState } from 'react';
import { EventType } from '../utils/types';
import timelineItems from '../API/timeLineItems';
import { UseEventsType } from '../utils/types';

export const useEvents = (): UseEventsType => {
  const [events, setEvents] = useState<EventType[]>([]);

  useEffect(() => {
    setEvents(timelineItems);
  }, []);

  return { events, setEvents };
};



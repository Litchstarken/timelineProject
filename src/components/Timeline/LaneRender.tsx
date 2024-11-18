import { generateColor } from '../../utils/lanesHelper';
import styles from './Timeline.module.css';
import { EventContext } from '../../context/EventContext'
import { ReactNode, useContext, useEffect, useState } from 'react';
import Event from '../Event/Event';
import { TimeLineProps } from '../../utils/types';

const LaneRender = ({ lane }: TimeLineProps) => {
    const { events } = useContext(EventContext);
    const [renderedEvents, setRenderedEvents] = useState<ReactNode[]>([]);
    let prevEventId: number;
    let color: string;

    useEffect(() => {
        setRenderedEvents(
          lane.map((eventId, index) => {
            // Ensure eventId is defined before proceeding
            if (typeof eventId === 'number') {
              const currentEvent = events.find((event) => event.id === eventId);
              if (currentEvent) {
                if (prevEventId !== currentEvent.id) {
                  prevEventId = currentEvent.id;
                  color = generateColor(eventId);
                  if (color === "#FFFFFF") {
                    color = generateColor(eventId);
                  }
                }
                return (
                  <Event
                    key={`${eventId}-${index}`} 
                    event={currentEvent}
                    color={color}
                  />
                );
              }
            } else {
              return (
                <div
                  key={`empty-${index}`}
                  className={styles.timeline}
                ></div>
              );
            }
          })
        );
      }, [lane, events]);
      

    return (
        renderedEvents
    );
}

export default LaneRender;
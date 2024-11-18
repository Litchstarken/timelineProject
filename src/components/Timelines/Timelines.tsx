import { generateTimelines } from '../../utils/lanesHelper';
import Timeline from '../Timeline/Timeline';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from '../../context/EventContext';
import styles from './Timelines.module.css'
import EventEdit from '../EventEdit/EventEdit';
const Timelines = () => {
  const { events, isEditing } = useContext(EventContext);
  const [lanes, setLanes] = useState<(number | undefined)[][]>([]);

  // Ensure context is defined before accessing `events`
  if (!events) {
    throw new Error('Timelines component must be used within an EventProvider');
  }

  useEffect(() => {
    setLanes(generateTimelines(events))
  }, [events])

  return (
    <div>
      <div>
        {lanes.map((lane, index) => (
          <Timeline key={index} lane={lane} />
        ))}
      </div>
      <div>
        <ul className={styles["timelines-years"]}>
          <li>2021</li>
        </ul>
      </div>
      {isEditing &&
        <EventEdit />
      }
    </div>
  );
};

export default Timelines;

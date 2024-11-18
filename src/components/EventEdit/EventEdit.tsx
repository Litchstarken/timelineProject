import { useState } from 'react';
import styles from "./EventEdit.module.css"
import { useContext } from 'react';
import { EventContext } from '../../context/EventContext';
import { EventType } from '../../utils/types';

const EventEdit = () => {
  const { currentEvent, updateEvent, handleEvent } = useContext(EventContext);

  const [name, setName] = useState(currentEvent.name);
  const [start, setStart] = useState(currentEvent.start);
  const [end, setEnd] = useState(currentEvent.end);

  const onClose = () => {
    handleEvent({} as EventType)
  }

  const handleSave = () => {
    const updatedEvent: EventType = {
      ...currentEvent,
      name,
      start,
      end,
    };
    updateEvent(updatedEvent); // Persist the changes to the context
    onClose(); // Close the modal
  };

  return (
    <div className={styles.modal}>
      <div className={styles["modal-content"]}>
        <h3>Edit Event</h3>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Start Date:
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
        </label>
        <label>
          End Date:
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
        </label>
        <div className={styles["modal-buttons"]}>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EventEdit;

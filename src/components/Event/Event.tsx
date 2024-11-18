import { useState } from 'react';
import { EventProps } from '../../utils/types';
import styles from "./Event.module.css";
import { useContext } from 'react';
import { EventContext } from '../../context/EventContext';

const Event = ({ event, color }: EventProps) => {
  const { handleEvent } = useContext(EventContext);
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleTooltip = () => setShowTooltip(!showTooltip);

  return (
    <div
      role="button"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      onClick={() => handleEvent(event)}
      className={styles["event-container"]}
      style={{ backgroundColor: String(color) }}
    >
      {showTooltip && (
        <div className={styles["tooltip-container"]}>
          <p>{`${event.start} - ${event.end}`}</p>
          <p>
            <strong>{event.name}</strong>
            <br />
            Prediktive
          </p>
          {/* Edit Icon */}
          <div
            className={styles["edit-icon"]}
            onClick={(e) => {
              e.stopPropagation();
              handleEvent(event);
            }}
          >
            ✎
          </div>
        </div>
      )}

    </div>
  );
};

export default Event;

import LaneRender from './LaneRender';
import { TimeLineProps } from '../../utils/types';

const Timeline = ({ lane }: TimeLineProps): JSX.Element => {

  return (
    <div style={{ display: "inline-flex" }}>
      <LaneRender lane={lane} />
    </div>
  );
};

export default Timeline;



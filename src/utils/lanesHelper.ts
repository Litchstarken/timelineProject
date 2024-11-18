import { EventType } from "./types";

// Function to convert a date based on format (YYYY-MM-DD) to day of year
const dateToDayOfYear = (dateString: string): number => {
  const date = new Date(dateString);
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

// Function to generate timelines
export const generateTimelines = (events: EventType[]): (number | undefined)[][] => {

  // Sort events by start date before generating lanes
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const timelines: (number | undefined)[][] = [];

  sortedEvents.forEach((event) => {
    const startDay = dateToDayOfYear(event.start);
    const endDay = dateToDayOfYear(event.end);

    // Logic to search for a line where the event could be placed without overlaping
    let placed = false;
    for (let i = 0; i < timelines.length; i++) {
      const lane = timelines[i];

      // Validate if the pocition is open in the days range
      const isFree = lane.slice(startDay, endDay + 1).every(day => day === undefined);
      if (isFree) {
        // Colocar el evento en la línea actual
        for (let j = startDay; j <= endDay; j++) {
          lane[j] = event.id;
        }
        placed = true;
        break;
      }
    }

    // If no line could be placed, create one
    if (!placed) {
      const newLane = Array(365).fill(undefined);
      for (let j = startDay; j <= endDay; j++) {
        newLane[j] = event.id;
      }
      timelines.push(newLane);
    }
  });

  return timelines;
};

//Helper function to assign random colors to each event by currentIndex
// export const generateColor = (): string => {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// };

//Helper function to assign static colors to each event by eventId
export const generateColor = (id: number): string => {
  const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C33",
    "#33FFF7", "#FF3333", "#33FF99", "#8C33FF", "#FF33FF",
    "#33A1FF", "#57FF33", "#FF5733", "#F7FF33", "#5733FF",
    "#33FFB5", "#FF3366", "#66FF33", "#FF3357", "#33FFF5"
  ];
  return colors[id % colors.length];
};


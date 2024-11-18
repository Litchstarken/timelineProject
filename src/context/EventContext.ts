import { createContext } from "react";
import { EventContextType } from "../utils/types";

export const EventContext = createContext<EventContextType>({} as EventContextType);
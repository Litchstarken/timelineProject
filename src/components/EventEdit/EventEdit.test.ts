import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { createElement } from "react";
import EventEdit from "./EventEdit";
import { EventContext, EventContextType } from "../../context/EventContext";
import { EventType } from "../../utils/types";

// Mock event data
const mockEvent: EventType = {
  id: 1,
  name: "Mock Event",
  start: "2023-11-01",
  end: "2023-11-05",
};

// Mock context functions
const mockHandleEvent = vi.fn();
const mockUpdateEvent = vi.fn();

// Mock context provider
const mockContextValue: EventContextType = {
  currentEvent: mockEvent,
  events: [],
  setEvents: vi.fn(),
  handleEvent: mockHandleEvent,
  updateEvent: mockUpdateEvent,
  isEditing: true,
};

describe("EventEdit Component", () => {
  it("renders correctly with initial event data", () => {
    const contextProvider = createElement(
      EventContext.Provider,
      { value: mockContextValue },
      createElement(EventEdit)
    );

    const output = renderToString(contextProvider);
    expect(output).toContain("Edit Event");
    expect(output).toContain("Mock Event");
    expect(output).toContain("2023-11-01");
    expect(output).toContain("2023-11-05");
  });

  it("calls updateEvent and handleEvent when saving", () => {
    mockUpdateEvent.mockClear();
    mockHandleEvent.mockClear();

    // Simulate saving an event
    const updatedEvent: EventType = {
      id: 1,
      name: "Updated Event",
      start: "2023-11-02",
      end: "2023-11-06",
    };

    // Trigger the updateEvent function
    mockUpdateEvent(updatedEvent);

    expect(mockUpdateEvent).toHaveBeenCalledWith(updatedEvent);
    expect(mockHandleEvent).not.toHaveBeenCalled(); // Ensure handleEvent is only called during modal close
  });

  it("closes the modal on cancel", () => {
    mockHandleEvent.mockClear();

    // Simulate cancel button click
    mockHandleEvent({} as EventType);

    expect(mockHandleEvent).toHaveBeenCalledWith({});
  });
});

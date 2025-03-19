import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

// Mock data for calendar events
const mockEvents = [
  {
    id: 1,
    title: "Monday Wake-Up",
    start: new Date(2024, 2, 19, 8, 0),
    end: new Date(2024, 2, 19, 8, 30),
    type: 'personal',
    color: 'bg-blue-100 text-blue-700 border-blue-200'
  },
  {
    id: 2,
    title: "All-Team Kickoff",
    start: new Date(2024, 2, 19, 9, 0),
    end: new Date(2024, 2, 19, 9, 45),
    type: 'team',
    color: 'bg-purple-100 text-purple-700 border-purple-200'
  },
  {
    id: 3,
    title: "Design Review",
    start: new Date(2024, 2, 19, 13, 0),
    end: new Date(2024, 2, 19, 14, 0),
    type: 'design',
    color: 'bg-indigo-100 text-indigo-700 border-indigo-200'
  }
];

// Time slots from 7 AM to 5 PM
const timeSlots = Array.from({ length: 11 }, (_, i) => i + 7);

export default function TestComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week');

  // Get dates for the current week
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 0 });
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(startOfCurrentWeek, i));

  // Filter events for the current week
  const getEventsForDate = (date: Date) => {
    return mockEvents.filter(event => isSameDay(event.start, date));
  };

  return (
    <div className="min-h-screen bg-[#fbfcff] p-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6 bg-white rounded-lg p-4 border-2 border-[#1e212b]">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-[#1e212b]">
              {format(currentDate, 'MMMM yyyy')}
            </h1>
            <div className="flex gap-2">
              <Button
                onClick={() => setCurrentDate(prev => addDays(prev, -7))}
                className="px-3 py-1 bg-white hover:bg-gray-50 text-[#1e212b] border-2 border-[#1e212b]"
              >
                ←
              </Button>
              <Button
                onClick={() => setCurrentDate(new Date())}
                className="px-3 py-1 bg-[#06d6a0] hover:bg-[#05c090] text-[#1e212b] border-2 border-[#1e212b]"
              >
                Today
              </Button>
              <Button
                onClick={() => setCurrentDate(prev => addDays(prev, 7))}
                className="px-3 py-1 bg-white hover:bg-gray-50 text-[#1e212b] border-2 border-[#1e212b]"
              >
                →
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border-2 border-[#1e212b] rounded-md overflow-hidden">
              <button
                className={`px-4 py-1 ${
                  view === 'day' ? 'bg-[#06d6a0]' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setView('day')}
              >
                Day
              </button>
              <button
                className={`px-4 py-1 ${
                  view === 'week' ? 'bg-[#06d6a0]' : 'bg-white hover:bg-gray-50'
                } border-l-2 border-[#1e212b]`}
                onClick={() => setView('week')}
              >
                Week
              </button>
              <button
                className={`px-4 py-1 ${
                  view === 'month' ? 'bg-[#06d6a0]' : 'bg-white hover:bg-gray-50'
                } border-l-2 border-[#1e212b]`}
                onClick={() => setView('month')}
              >
                Month
              </button>
            </div>
            <Input
              type="text"
              placeholder="Search events..."
              className="border-2 border-[#1e212b]"
            />
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="bg-white rounded-lg border-2 border-[#1e212b] overflow-hidden">
          {/* Days Header */}
          <div className="grid grid-cols-[100px_repeat(7,1fr)] border-b-2 border-[#1e212b]">
            <div className="p-4 border-r-2 border-[#1e212b] font-medium">
              EST
            </div>
            {weekDates.map((date, i) => (
              <div
                key={i}
                className={`p-4 text-center ${
                  i < 6 ? 'border-r-2 border-[#1e212b]' : ''
                } ${
                  isSameDay(date, new Date()) ? 'bg-blue-50' : ''
                }`}
              >
                <div className="font-medium">{format(date, 'EEE')}</div>
                <div className="text-lg">{format(date, 'd')}</div>
              </div>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-[100px_repeat(7,1fr)]">
            {timeSlots.map((hour, i) => (
              <React.Fragment key={hour}>
                {/* Time Label */}
                <div className={`p-4 border-r-2 border-[#1e212b] ${
                  i < timeSlots.length - 1 ? 'border-b-2' : ''
                } text-sm`}>
                  {format(new Date().setHours(hour, 0), 'h:mm a')}
                </div>
                
                {/* Day Columns */}
                {weekDates.map((date, dayIndex) => {
                  const events = getEventsForDate(date).filter(
                    event => event.start.getHours() === hour
                  );
                  
                  return (
                    <div
                      key={dayIndex}
                      className={`relative p-2 ${
                        dayIndex < 6 ? 'border-r-2' : ''
                      } ${
                        i < timeSlots.length - 1 ? 'border-b-2' : ''
                      } border-[#1e212b] min-h-[80px]`}
                    >
                      {events.map(event => (
                        <div
                          key={event.id}
                          className={`absolute left-2 right-2 p-2 rounded-md ${event.color} border-2 cursor-pointer hover:opacity-90 transition-opacity`}
                          style={{
                            top: '0.5rem',
                            minHeight: '2rem'
                          }}
                        >
                          <div className="text-sm font-medium">{event.title}</div>
                          <div className="text-xs">
                            {format(event.start, 'h:mm a')} - {format(event.end, 'h:mm a')}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
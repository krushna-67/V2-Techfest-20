import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function Schedule() {
  const schedule = [
    {
      day: 'Day 1 - April 20',
      date: 'Saturday',
      events: [
        { time: '9:00 AM', title: 'Registration & Welcome Breakfast', location: 'Main Hall' },
        { time: '10:30 AM', title: 'Opening Keynote: Future of Tech', speaker: 'Industry Leader', location: 'Auditorium' },
        { time: '12:00 PM', title: 'Networking Break', location: 'Foyer' },
        { time: '1:00 PM', title: 'Parallel Workshops (AI/ML, Web Dev, Cloud)', location: 'Multiple Venues' },
        { time: '3:30 PM', title: 'Coffee & Code Challenge Begins', location: 'Lab Area' },
        { time: '6:00 PM', title: 'Day 1 Concludes & Dinner', location: 'Cafeteria' }
      ]
    },
    {
      day: 'Day 2 - April 21',
      date: 'Sunday',
      events: [
        { time: '9:00 AM', title: 'Morning Sessions Resume', location: 'Main Hall' },
        { time: '10:30 AM', title: 'Panel: Career in Tech', panelists: '5 Industry Experts', location: 'Auditorium' },
        { time: '12:00 PM', title: 'Lunch & Networking', location: 'Garden Area' },
        { time: '2:00 PM', title: 'Hackathon Begins', location: 'Innovation Lab' },
        { time: '4:00 PM', title: 'Product Showcase Exhibition', location: 'Expo Hall' },
        { time: '7:00 PM', title: 'Evening Concert & Networking Party', location: 'Open Air' }
      ]
    },
    {
      day: 'Day 3 - April 22',
      date: 'Monday',
      events: [
        { time: '10:00 AM', title: 'Hackathon Final Hours', location: 'Innovation Lab' },
        { time: '12:30 PM', title: 'Hackathon Judging & Lunch', location: 'Main Hall' },
        { time: '2:00 PM', title: 'Winner Announcements & Awards', location: 'Auditorium' },
        { time: '3:30 PM', title: 'Closing Ceremony & Networking', location: 'Main Hall' },
        { time: '5:00 PM', title: 'Event Concludes', location: 'Main Hall' }
      ]
    }
  ];

  return (
    <section id="schedule" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">April 20-22, 2024</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Event Schedule
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Three days packed with talks, workshops, networking, and competition. 
            Every moment is designed to help you grow.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="relative">
              {/* Day Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{day.day}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 ml-7">{day.date}</p>
              </div>

              {/* Events */}
              <div className="space-y-4 ml-7 border-l-2 border-gray-200 dark:border-gray-700 pl-6">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md dark:hover:shadow-lg transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="pt-1">
                        <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm">
                          <Clock size={16} />
                          {event.time}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                          {event.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                          📍 {event.location}
                        </p>
                        {(event.speaker || event.panelists) && (
                          <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                            {event.speaker && `with ${event.speaker}`}
                            {event.panelists && `featuring ${event.panelists}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Calendar Download */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-purple-50 dark:to-purple-900/20 rounded-2xl border border-blue-200 dark:border-blue-700 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Save to Your Calendar</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Don't miss any event. Add V2 Tech Fest to your calendar now.</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
            Download Calendar (.ics)
          </button>
        </div>
      </div>
    </section>
  );
}

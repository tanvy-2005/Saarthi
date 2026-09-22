import { useState } from 'react';
import { Calendar, MapPin, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mockEvents = [
  { id: 1, title: 'Annual Alumni Meet 2026', date: 'Oct 15, 2026', location: 'Main Campus', attendees: 450, isRsvpd: false },
  { id: 2, title: 'Tech Career Fair', date: 'Nov 02, 2026', location: 'Virtual', attendees: 1200, isRsvpd: true },
];

export default function EventsPage() {
  const [events, setEvents] = useState(mockEvents);

  const toggleRsvp = (id: number) => {
    setEvents(events.map(ev => 
      ev.id === id ? { ...ev, isRsvpd: !ev.isRsvpd, attendees: ev.isRsvpd ? ev.attendees - 1 : ev.attendees + 1 } : ev
    ));
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900">Events</h1>
        <p className="text-slate-500">Discover and register for upcoming university and alumni events.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((ev) => (
          <div key={ev.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-xl">{ev.title}</h3>
                <div className="flex items-center gap-1 text-brand-glow font-medium mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>{ev.date}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {ev.location}
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" /> {ev.attendees} Attending
              </div>
            </div>

            <Button 
              onClick={() => toggleRsvp(ev.id)}
              variant={ev.isRsvpd ? "outline" : "default"}
              className={`mt-4 w-full rounded-full ${!ev.isRsvpd ? 'bg-brand-deep hover:bg-brand-btn text-white' : 'text-brand-deep border-brand-deep hover:bg-brand-surface'}`}
            >
              {ev.isRsvpd ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" /> RSVP Confirmed
                </>
              ) : 'RSVP Now'}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

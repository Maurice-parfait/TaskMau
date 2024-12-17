    import React, {useState} from "react";
    import FullCalendar from "@fullcalendar/react";
    import dayGridPlugin from "@fullcalendar/daygrid";
    import timeGridPlugin from "@fullcalendar/timegrid";
    import interactionPlugin from "@fullcalendar/interaction";
    import frLocal from "@fullcalendar/core/locales/fr"

    function MyFullCalendar() {
        const [events, setEvents] = useState([
            { title: "Réunion", start: "2024-12-07T10:00:00", end: "2024-12-07T12:00:00" },
        ]);
        
        const handleDateClick = (info) => {
            const title = prompt("Entrez le titre de l'événement :");
            if (title) {
            const newEvent = {
                title,
                start: info.startStr,
                end: info.endStr
            };
            setEvents([...events, newEvent]);
            }

            console.log(title);
        };

        return (
            <section>
                <div className="bg-white rounded-lg p-4 dark:bg-gray-900/15 dark:text-white max-md:grid max-md:grid-cols-1">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    editable={true}
                    selectable={true}
                    events={events}
                    locale={frLocal}
                    select={handleDateClick}
                    // Désactiver les styles par défaut
                    buttonText={{
                        today: "Aujourd'hui",
                        month: "Mois",
                        week: "Semaine",
                        day: "Jour",
                    }}
                    headerToolbar={{
                        start: "prev,next today",
                        center: "title",
                        end: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    
                />
                </div>

                {/* <div>
                    <h1>maurice</h1>
                </div> */}
            </section>
        )
    }

    export default MyFullCalendar;

import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from 'dayjs'
import './Calendario.css'

export default function Calendario() {

    // const components: any = {
    //     event: ({ event }: EventProps<EventItem>) => {
    //         const data = event?.data;
    //         if(data?.appointment) return <AppointmentEvent appointment={data.appointment} />
    //         if(data?.blockout) return <BlockoutEvent blockout={data.blockout} />
    //     }
    // }

    const localizer = dayjsLocalizer(dayjs)

    const events = [
        {
            start: dayjs('2024-03-27T10:00:00').toDate(),
            end: dayjs('2024-03-27T15:00:00').toDate(),
            title: "Evento 1"
        },

        {
            start: dayjs('2024-03-29T10:00:00').toDate(),
            end: dayjs('2024-03-29T15:00:00').toDate(),
            title: "Evento 1"
        }
    ]



    return (
        <div className='h-[95vh] w-[70vw] p-7'>
            <Calendar
                localizer={localizer}
                events={events}
                views={["week", "month"]}
                toolbar={true}
                defaultView='month'
                formats={{
                    dayHeaderFormat: date => {
                        console.log(date)
                        return dayjs(date).format("DD/MM/YYYY")
                    }
                }}
                className='font-medium'
            />
        </div>
    )
}
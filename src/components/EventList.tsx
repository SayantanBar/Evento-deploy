import EventCard from "./EventCard";
import { getEvents } from "@/app/lib/utils";
import PaginationControls from "./PaginationControls";
import next from "next";
type EventListParams = {
  city: string;
  page?: number;
};
const EventList = async ({ city, page = 1 }: EventListParams) => {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : "";

  const nextPath =
    totalCount > 6 * page ? `/events/${city}?page=${page + 1}` : "";
  return (
    <section className="max-w-[1100px] px-[20px]  flex flex-wrap gap-10 justify-center">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      <PaginationControls previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
};

export default EventList;

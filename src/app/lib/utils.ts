import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prismadb from "./prismadb";
import { notFound } from "next/navigation";
import { unstable_cache } from "next/cache";
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}
export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`,
  //   {
  //     next: {
  //       revalidate: 300,
  //     },
  //   },
  // );
  // if (!response.ok) {
  //   console.log("error happen during fetching!");
  // }
  // const events: EventoEvent[] = await response.json();
  // return events;

  const events = await prismadb.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip: (page - 1) * 6,
  });
  let totalCount;
  if (city === "all") {
    totalCount = await prismadb.eventoEvent.count();
  } else {
    totalCount = await prismadb.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }
  return { events, totalCount };
});
export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`,
  // );
  // const event: EventoEvent = await response.json();
  // return event;

  const event = await prismadb.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });
  if (!event) {
    return notFound();
  }
  return event;
});

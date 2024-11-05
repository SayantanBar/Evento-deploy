"use client";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

type EventCardProps = {
  event: EventoEvent;
};
const MotionLink = motion(Link);
const EventCard = ({ event }: EventCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  return (
    <MotionLink
      className="flex-1 h-[380px] basis-80 max-w-[500px]"
      href={`/event/${event.slug}`}
    >
      <section className=" relative flex flex-col h-full w-full bg-white/[3%] rounded-xl overflow-hidden state-effects">
        <Image
          src={event.imageUrl}
          height={280}
          width={500}
          alt={event.name}
          className="h-[60%] object-cover "
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>

        <section className="absolute left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md flex flex-col justify-center items-center">
          <p className="text-xl font-bold">
            {new Date(event.date).toLocaleString("en-US", { day: "2-digit" })}
          </p>
          <p className="text-xl uppercase text-accent">
            {new Date(event.date).toLocaleString("en-US", { month: "short" })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
};

export default EventCard;

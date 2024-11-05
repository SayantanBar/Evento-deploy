import Link from "next/link";
import { ArrowRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
type PaginationProps = {
  previousPath: string;
  nextPath: string;
};
const PaginationControls = ({ previousPath, nextPath }: PaginationProps) => {
  return (
    <div className="flex justify-between w-full">
      {previousPath ? (
        <Link
          href={previousPath}
          className="text-white flex items-center gap-x-2 py-3 px-5 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"
        >
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link
          className="text-white flex items-center gap-x-2 py-3 px-5 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"
          href={nextPath}
        >
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </div>
  );
};

export default PaginationControls;

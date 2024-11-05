import { cn } from "@/app/lib/utils";
type skeletonProps = {
  className?: string;
};
const Skeleton = ({ className }: skeletonProps) => {
  return (
    <div
      className={cn(
        "h-4 w-[550px] rounded-md bg-white/5 animate-pulse",
        className,
      )}
    />
  );
};

export default Skeleton;

import { Skeleton } from "@/components/ui/skeleton";
export default function Loading() {
  return (
    <div className="p-3 bg-white m-2">
      <div className="flex mb-4">
        <span>
          <Skeleton className="w-[300px] h-[50px]" />
        </span>
      </div>
      <Skeleton className="mb-2 h-[35px]" />
      <Skeleton className="mb-2 h-[35px]" />
    </div>
  );
}

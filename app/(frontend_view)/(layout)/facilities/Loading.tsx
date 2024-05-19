import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <div className="p-3 bg-white m-2">
      <div className="flex mb-4">
        <span>
          <Skeleton height={50} width={300} />
        </span>
      </div>
      <Skeleton count={2} height={35} className="mb-2" />
    </div>
  );
}

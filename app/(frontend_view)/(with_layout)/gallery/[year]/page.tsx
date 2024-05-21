/*** nextjs ***/
export const dynamicParams = false;
import { notFound } from "next/navigation";
/*** fonts ***/
import { Mulish } from "next/font/google";
const font = Mulish({ weight: "400", subsets: ["latin"] });
/*** components ***/
import { getImagesWithSrcAndBlurDataUrlArr } from "@/lib/helpers/base64Converters";
import GalleryCard from "@/components/Gallery/GalleryCard";
import AnimatedDiv from "@/components/Animated/AnimatedDiv";
import Bedcrumb from "@/components/Breadcrumbs/Bedcrum";

/*** helpers ***/
async function fetchData(fy: string | number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/albums?fy=${fy}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) return null;
  return res.json();
}
/*****************************************************
           PAGE
*****************************************************/
export default async function Gallery({
  params,
}: {
  params: { year: string };
}) {
  const timeVar = new Date().getTime().toString();
  const year = String(params.year);
  if (year == "0") {
    return notFound();
  }
  const data = await fetchData(year);
  if (!data || data.albums == false) {
    return notFound();
  }
  const albumsData = data.data;
  const yearData = data.yearData;

  // console.log(data);

  let albumCoverImages = albumsData.map((item: { [key: string]: any }) => ({
    ...item,
    imageUrl: `${process.env.NEXT_PUBLIC_API_URL}/uploads/album/${yearData?.fiscal_year}/cover_images/${item.cover_image}`,
  }));
  // console.log(albumCoverImages);

  let albumCoversBlurDataUrl = await getImagesWithSrcAndBlurDataUrlArr(
    albumCoverImages
  );

  // console.log(albumCoversBlurDataUrl);

  return (
    <div className="w-[100%] overflow-hidden">
      <Bedcrumb heading="Gallery" pageName1={`Gallery`} />
      <div className="flex justify-center items-start p-4">
        <p>{timeVar}</p>
      </div>
      <section id="albums" className="albumsShell py-20 px-2 sm:px-12 ">
        <AnimatedDiv
          initial={{ opacity: 0, x: "50vw" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 1 }}
          viewport={{ once: true, amount: 0 }}
        >
          <div className="text-lg sm:text-xl md:text-2xl xl:text-4xl text-start font-bold text-gray-900 mb-4">
            Gallery{" "}
            <span className="text-secondary-red1">{yearData?.fiscal_year}</span>
          </div>
          <div className="w-[100px] border-b-[3px] border-red-500"></div>
        </AnimatedDiv>

        <div className=" mt-4   grid md:grid-cols-2 lg:grid-cols-3 gap-x-4  gap-y-8 place-content-center place-items-start ">
          {albumCoversBlurDataUrl.map(
            (item: { [key: string]: any }, i: number) => (
              <GalleryCard
                key={i}
                i={i}
                id={item.id}
                name={item.name}
                srcUrl={`${process.env.NEXT_PUBLIC_API_URL}/uploads/album/${yearData?.fiscal_year}/cover_images/${item.cover_image}`}
                blurDataUrl={item.blurDataUrl}
              />
            )
          )}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ year: "2022-23" }, { year: "2023-24" }];
}

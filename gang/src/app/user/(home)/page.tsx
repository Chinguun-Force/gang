import { Header } from "@/app/user/(home)/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
 
      <section className="h-[844px] px-10 relative flex items-center justify-center w-full py-20">
        <Image
          width={400}
          height={310}
          src={"/img3.webp"}
          alt="home-1"
          className="absolute top-[112px] left-10 "
        />
        <Image
          width={330}
          height={330}
          src={"/img4.webp"}
          alt="home-2"
          className="absolute top-[112px]  right-20"
        />
        <Image
          width={300}
          height={300}
          src={"/img2.webp"}
          alt="home-3"
          className="absolute bottom-0 left-20"
        />
        <Image
          width={400}
          height={280}
          src={"/img1.webp"}
          alt="home-4"
          className="absolute bottom-5 right-40"
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-[36px]">
            Цайны цагийн хүлээлт нэмэгдлээ
          </h1>
          <p className="font-normal text-[24px] ml-[-40px] ">
            Өдөр болгон шинэ боломж ...
          </p>
        </div>
      </section>
      <section className="h-screen grid grid-rows-2 px-20 bg-slate-50 py-10">
        <div className="flex flex-row  gap-10 items-center justify-between">
          <Image
            width={640}
            height={300}
            src={"/advice.webp"}
            alt="home-1"
            className=""
          />
          <div className="">
            <div>
              <h2 className="text-2xl font-bold">Зөвлөгөө</h2>
              <p className="text-xl font-normal w-[600px]">
                Ажил дээрээ байнга л ямар нэгэн зүйл дээр зөвлөгөө, туслалцаа
                хэрэгтэй болдог. Ажлын асуудал ч бай, хувийн зүйл ч бай. Манай
                платформ энэ хэрэгцээг тань хялбар, аюулгүй байдлаар хангах
                зорилготой.
              </p>
            </div>
            <Link href={"/user/advice"}>
              <Button className="bg-blue-400 text-white flex justify-self-end mt-6">
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-10 items-center justify-between">
          <div>
            <div>
              <h2 className="text-2xl font-bold">Хобби</h2>
              <p className="text-xl font-normal w-[600px]">
                Та зөвхөн ажил биш, сонирхлоороо ч холбогдож. Кино үзэх, ном
                унших, спорт эсвэл зүгээр л кофе уух гээд хоббигоороо дамжуулан
                хамт олонтойгоо ойртон дотносох боломжийг бид бүрдүүлсэн.
              </p>
            </div>

            <Link href={"/user/hobby"}>
              <Button className="bg-blue-400 text-white flex justify-self-end mt-6">
                Дэлгэрэнгүй
              </Button>
            </Link>
          </div>
          <Image
            width={640}
            height={300}
            src={"/hobby.webp"}
            alt="home-4"
            className=""
          />
        </div>
      </section>
    </div>
  );
}

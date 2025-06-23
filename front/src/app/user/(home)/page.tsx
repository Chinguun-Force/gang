import { Header } from "@/app/user/(home)/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className=" flex flex-col items-center pt-[40px] pb-[70px]">
        <h1 className="font-semibold text-4xl leading-9 text-slate-800">
          Цайны цагийн хүлээлт нэмэгдлээ
        </h1>
        <p className="text-slate-700 font-normal text-xl leading-9 ">
          Өдөр болгон шинэ боломж ...
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 w-full px-10">
        <Card className="p-6 bg-blue-100">
          <Image src={"/advice.webp"} width={487} height={300} alt="advice" />
          <div>
            <h2 className="text-slate-700 font-semibold text-2xl leading-8 font-normal">
              Зөвлөгөө
            </h2>
            <p className="text-slate-700 text-normal font-normal text-xl leading-7">
              Ажил дээрээ байнга л ямар нэгэн зүйл дээр зөвлөгөө, туслалцаа
              хэрэгтэй болдог. Ажлын асуудал ч бай, хувийн зүйл ч бай. Манай
              платформ энэ хэрэгцээг тань хялбар, аюулгүй байдлаар хангах
              зорилготой.
            </p>

            <Button
              className="bg-blue-400 text-white flex justify-self-end mt-6
            "
            >
              Дэлгэрэнгүй
            </Button>
          </div>
        </Card>
        <Card className="p-6 bg-blue-100">
          <div>
            <h2 className="text-slate-700 font-semibold text-2xl leading-8 font-normal">
              Хобби
            </h2>
            <p className="text-slate-700 text-normal font-normal text-xl leading-7">
              Та зөвхөн ажил биш, сонирхлоороо ч холбогдож. Кино үзэх, ном
              унших, спорт эсвэл зүгээр л кофе уух гээд хоббигоороо дамжуулан
              хамт олонтойгоо ойртон дотносох боломжийг бид бүрдүүлсэн.
            </p>

            <Button
              className="bg-blue-400 text-white flex justify-self-end mt-6
            "
            >
              Дэлгэрэнгүй
            </Button>
          </div>
          <Image src={"/hobby.webp"} width={487} height={300} alt="advice" />
        </Card>
      </div>
    </div>
  );
}

//  <section className="h-screen flex flex-col  ">
//       <div>
//         <h1 className="text-slate-700 font-medium text-5xl leading-7 font-normal mt-[107px] text-center">
//           Цайны цагийн хүлээлт нэмэгдлээ
//         </h1>
//         <h2 className="font-normal text-base text-slate-700 leading-7 pt-[57px]  text-center">
//           Байгууллагын ажилчид хоорондын харилцааг сайжруулан бие биеэ таньж
//           мэдэн, хамтдаа өсөн дэвших боломжийг бүрдүүлэхэд тань бид танд тусалъя
//         </h2>
//         <div className="flex gap-6 pt-[56px] justify-center">
//           <Button
//             variant={"outline"}
//             className="bg-white text-blur-400 w-[196.5px]"
//           >
//             Заавар видео
//           </Button>
//           <Button
//             variant={"outline"}
//             className="bg-blue-400 text-white w-[196.5px]"
//           >
//             Эхлэх
//           </Button>
//         </div>
//         <div className="h-[500px] w-screen ">
//           <Image
//             width={319}
//             height={319}
//             src={"/content.png"}
//             alt="home-1"
//             className="absolute bottom-10 left-10"
//           />
//           <Image
//             width={296}
//             height={296}
//             src={"/content4.png"}
//             alt="home-1"
//             className="absolute bottom-30 left-100"
//           />
//           <Image
//             width={264}
//             height={264}
//             src={"/content3.png"}
//             alt="home-1"
//             className="absolute bottom-10 left-180"
//           />
//           <Image
//             width={362}
//             height={362}
//             src={"/content2.png"}
//             alt="home-1"
//             className="absolute bottom-14 right-20"
//           />
//         </div>
//       </div>
//     </section>

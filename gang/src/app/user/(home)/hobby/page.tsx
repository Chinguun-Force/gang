"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";
export default function WishPage() {
  return (
    <div className="p-10 h-screen w-full ">
      <div>
        <div className="text-center py-30">
          <h1 className="text-slate-800 text-3xl font-semibold">
            Цайны цагаараа хоббигоороо нэгдье
          </h1>
          <p className="text-slate-600 text-2xl font-medium ">
            Та өөрийн дуртай ямар ч сэдвээ ажлынхантайгаа хүваалцах боломжтой.
          </p>
        </div>

        <div className="flex flex-col h-screen">
          <h2 className="text-slate-800 text-2xl font-normal pb-10">
            Та өөрийн дуртай хэдэн ч сэдвийг сонгосон болно ☺️
          </h2>
          <div className="grid grid-cols-6 gap-5">
            <Link href={"/user/hobby/sport"}>
              <Card className="pb-0 rounded-[8px] ">
                <Image
                  src={"/hobby-sport.svg"}
                  width={140}
                  height={224}
                  alt="sport"
                  className="px-[31px]"
                />
                <p
                  className="bg-slate-50 flex items-center justify-center rouded-[4px]
               py-3"
                >
                  Спорт
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

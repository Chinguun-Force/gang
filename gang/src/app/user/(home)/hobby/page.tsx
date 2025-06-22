"use client";

import { BASE_URl } from "@/app/contants";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import axios from "axios"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Hobby = {
  title: string,
  _id: string
  image: string
}
export default function WishPage() {
  const [hobbies, setHobbies] = useState<Hobby[]>([])
  const baseUrl = process.env.NEXT_PUBLIC_API_URL
  const getHobbies = async () => {
    const response = await axios.get(`${baseUrl}/hobby`);
    setHobbies(response.data)
  }

  useEffect(() => {
    getHobbies();
  }, [])

  console.log(baseUrl, "base")
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
          <div className="grid grid-cols-4 gap-5">
            {
              hobbies.map((hobby) => {
                return (
                  <Link href={`/user/hobby/${hobby._id}`}  key={hobby._id}>
                    <Card className="pb-0 rounded-[8px] w-[202px] h-[228px] grid grid-rows-[1fr_auto]">
                      <Image
                        src={hobby.image}
                        width={140}
                        height={190}
                        alt="sport"
                        className="object-fit"
                      />
                      <p
                        className="bg-slate-50 flex items-center justify-center rouded-[4px]
               py-3"
                      >
                        {hobby.title}
                      </p>
                    </Card>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Heart, MapPin, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_URl } from "@/app/contants";
import axios from "axios";

export default function HobbyInsertPage() {
  const id = useParams();
  const [users, setUsers] = useState([]);

  const getUserByHobby = async () => {
    const response = await axios.get(`${BASE_URl}/user/by-hobby`);
    const user = response.data;
    console.log(user)
  }

  useEffect(() => {
    getUserByHobby()
  }, [])
  return (
    <div className="h-screen w-full">
      <h1 className="text-stone-700 text-3xl font-semibold py-30 text-center">
        Адилхан сонирхолтой юм байна 😎
      </h1>

      <div className="grid gap-10">
        <div className="flex gap-3">
          <Select>
            <SelectTrigger className="w-[180px] bg-indigo-50">
              <SelectValue placeholder="Ангилал" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            users.map((user) => {
              return (
                <Card className="p-3">
                  <div className="grid grid-cols-2">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={"AG"} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Badge
                        variant={"outline"}
                        className="bg-indigo-50 text-blue-900 text-xs font-medium px-6 py-1
                "
                      >
                        Уулзъя л даа
                      </Badge>
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between w-full items-center">
                        <h2 className="text-lg font-semibold text-stone-700">
                          Hulan Jargal
                        </h2>

                        <Heart />
                      </div>
                      <div className="flex items-center gap-3">
                        <User /> <p className="text-sm text-stone-500">Дизайнер</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin />{" "}
                        <p className="text-sm text-stone-500">Хөгжүүлэлтийн хэлтэс</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant={"outline"}
                    className="bg-blue-400 text-white text-sm font-medium p"
                  >
                    Уулзах уу{" "}
                  </Button>
                </Card>
              )
            })
          }
          <Card className="p-3">
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center gap-4">
                <div className="flex ">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={"AG"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{" "}
                  <div>
                    <Badge className="text-xs font-medium bg-[#FFF8E8] py-1 text-gray-900">
                      Ботго
                    </Badge>
                  </div>
                </div>
                <Badge
                  variant={"outline"}
                  className="bg-indigo-50 text-blue-900 text-xs font-medium px-6 py-1
                "
                >
                  Уулзъя л даа
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-full items-center">
                  <h2 className="text-lg font-semibold text-stone-700">
                    Hulan Jargal
                  </h2>

                  <Heart />
                </div>
                <div className="flex items-center gap-3">
                  <User /> <p className="text-sm text-stone-500">Дизайнер</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin />{" "}
                  <p className="text-sm text-stone-500">Хөгжүүлэлтийн хэлтэс</p>
                </div>
              </div>
            </div>

            <Button
              variant={"outline"}
              className="bg-blue-400 text-white text-sm font-medium p"
            >
              Уулзах уу{" "}
            </Button>
          </Card>
          <Card className="p-3">
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center gap-4">
                <div className="flex ">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={"AG"} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>{" "}
                  <div>
                    <Badge className="text-xs font-medium bg-[#FFF8E8] py-1 text-gray-900">
                      Ботго
                    </Badge>
                  </div>
                </div>
                <Badge
                  variant={"outline"}
                  className="bg-indigo-50 text-blue-900 text-xs font-medium px-6 py-1
                "
                >
                  Уулзъя л даа
                </Badge>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between w-full items-center">
                  <h2 className="text-lg font-semibold text-stone-700">
                    Hulan Jargal
                  </h2>

                  <Heart />
                </div>
                <div className="flex items-center gap-3">
                  <User /> <p className="text-sm text-stone-500">Дизайнер</p>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin />{" "}
                  <p className="text-sm text-stone-500">Хөгжүүлэлтийн хэлтэс</p>
                </div>
              </div>
            </div>

            <Button
              variant={"outline"}
              className="bg-blue-400 text-white text-sm font-medium p"
            >
              Уулзах уу{" "}
            </Button>
            {/* <Dialog>
              <DialogTrigger>Open</DialogTrigger>
            </Dialog> */}
          </Card>
        </div>
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-[180px] bg-indigo-50">
              <SelectValue placeholder="Хүний тоо" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

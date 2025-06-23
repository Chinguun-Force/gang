"use client"
import Image from "next/image";
import { useEffect } from "react";
export default function Home() {
   useEffect(() => {
    const bubblesContainer = document.querySelector('.bubbles');
    if (bubblesContainer) {
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.width = `${40 + Math.random() * 60}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = `${5 + Math.random() * 10}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubblesContainer.appendChild(bubble);
      }
    }
  }, []);
  return (
    <div className="h-auto  w-screen flex flex-col items-center  justify-center pt-[120px] relative ">
      <div className="bubbles absolute inset-0 w-full h-full pointer-events-none"></div>
        <div className="w-[769px]  flex flex-col gap-[56px] items-center text-center">
            <h1 className="font-semibold text-[48px] w-[769px] h-[38px]">
            Цайны цагийн хүлээлт нэмэгдлээ
          </h1>
             <p className="font-normal text-[16px] ml-[-40px] text-center w-[814px] h-[56px] ">
          Байгууллагын ажилчид хоорондын харилцааг сайжруулан бие биеэ таньж мэдэн, хамтдаа өсөн дэвших боломжийг бүрдүүлэхэд тань бид танд тусалъя
          </p>

          <div className="flex gap-8"> <button className="w-[196.5px] h-[40px] border-blue-400 rounded-md bg-white text-blue-400 border">Заавар видео</button>
           <button className="w-[196.5px] h-[40px] bg-blue-400 text-white rounded-md">Эхлэх</button></div>
        </div>
    
      <div className="h-[500px] w-screen ">  
        
                      <Image
                    width={319}
                    height={319}
                    src={"/content.png"}
                    alt="home-1"
                    className="absolute bottom-10 left-10"
                  />
                   <Image
                    width={296}
                    height={296}
                    src={"/content4.png"}
                    alt="home-1"
                    className="absolute bottom-30 left-100"
                  />
                   <Image
                    width={264}
                    height={264}
                    src={"/content3.png"}
                    alt="home-1"
                      className="absolute bottom-10 left-180"
                  />
                   <Image
                    width={362}
                    height={362}
                    src={"/content2.png"}
                    alt="home-1"
                    className="absolute bottom-14 right-20"
                  />
                  </div>
        </div>
  
  );
}

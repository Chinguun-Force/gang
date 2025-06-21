import { Header } from "@/app/user/(home)/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section >

      <div
      className=" mx-auto bg-slate-50 w-full h-full">
        <Header />
      <div className="pt-15 px-10">
      {children }
      </div>
      </div>
     
    </section>
  );
}

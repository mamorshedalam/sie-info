"use client"
import { usePathname } from "next/navigation";

export default function Footer () {
  const pathname = usePathname();
     return (
          <footer>
               <div className={`${pathname == "/" ? "bg-blue-500 text-white" : "text-slate-600"} flex flex-col items-center justify-center w-full pb-1`}>
                    <p className="text-sm">Developed & maintained by <a href="https://mamorshedalam.netlify.app" target="_blank" className="font-medium">Morshed Alam</a>.</p>
               </div>
          </footer>
     );
}
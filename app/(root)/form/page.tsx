import { FileText } from "lucide-react";
import { title } from "process";

export default function Page() {
  const data = [
    {
      title: "Student Status Alteration (Graduate)",
      url: "/forms/Student Status Alteration (Graduate).doc",
    },
    {
      title: "Student Status Alteration (Undergraduate)",
      url: "/forms/Student Status Alteration (Undergraduate).doc",
    },
    {
      title: "Off-Campus Accommodation",
      url: "/forms/Off-Campus Accommodation.doc",
    },
    {
      title: "Commitment For Living Outside",
      url: "/forms/Commitment For Living Outside.docx",
    },
  ];
  return (
    <section className="x-page-container">
      {data &&
        data.map((item, index) => (
          <div
            key={index}
            className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3"
          >
            <p>{item.title} :</p>
            <a
              href={item.url}
              className="basis-0 grow flex items-center gap-2 underline text-blue-500"
              target="_black"
            >
              <span className="md:basis-auto basis-0 md:grow-0 grow">
                Application Form
              </span>
              <FileText size={18} />
            </a>
          </div>
        ))}
    </section>
  );
}

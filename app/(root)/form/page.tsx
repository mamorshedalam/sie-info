import Soon from "@/components/Soon";
import { FileText } from "lucide-react";

export default function Page() {
  return (
    <section className="space-y-3 md:px-6 px-3 md:py-9 py-5">
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Student Status Alteration (Graduate) :</p>
        <a
          href="/forms/Student Status Alteration (Graduate).doc"
          className="basis-0 grow flex items-center gap-2 underline text-blue-500"
          target="_black"
        >
          <span className="md:basis-auto basis-0 md:grow-0 grow">Application Form</span>
          <FileText size={18} />
        </a>
      </div>
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Student Status Alteration (Undergraduate) :</p>
        <a
          href="/forms/Student Status Alteration (Undergraduate).doc"
          className="basis-0 grow flex items-center gap-2 underline text-blue-500"
          target="_black"
        >
          <span className="md:basis-auto basis-0 md:grow-0 grow">Application Form</span>
          <FileText size={18} />
        </a>
      </div>
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Off-Campus Accommodation :</p>
        <a
          href="/forms/Off-Campus Accommodation.doc"
          className="basis-0 grow flex items-center gap-2 underline text-blue-500"
          target="_black"
        >
          <span className="md:basis-auto basis-0 md:grow-0 grow">Application Form</span>
          <FileText size={18} />
        </a>
      </div>
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Commitment For Living Outside :</p>
        <a
          href="/forms/Commitment For Living Outside.docx"
          className="basis-0 grow flex items-center gap-2 underline text-blue-500"
          target="_black"
        >
          <span className="md:basis-auto basis-0 md:grow-0 grow">Application Form</span>
          <FileText size={18} />
        </a>
      </div>
    </section>
  );
}

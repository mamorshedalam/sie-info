export default function Page() {
  return (
    <section className="space-y-3 md:px-6 px-3 md:py-9 py-5">
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Student Portal :</p>
        <a
          href="http://jwxt.wit.edu.cn/jsxsd/"
          className="underline text-blue-500 anywhere-words"
          target="_black"
        >
          http://jwxt.wit.edu.cn/jsxsd/
        </a>
      </div>
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>Converged Portal :</p>
        <a
          href="https://ehall.wit.edu.cn/EIP/nonlogin/homePage.htm"
          className="underline text-blue-500 anywhere-words"
          target="_black"
        >
          https://ehall.wit.edu.cn/EIP/nonlogin/homePage.htm
        </a>
      </div>
      <div className="flex gap-3 w-full bg-white shadow-lg shadow-black/5 rounded-xl md:px-5 px-4 py-3">
        <p>International Student Service System :</p>
        <a
          href="https://wit.at0086.cn/StuApplication/Login.aspx"
          className="underline text-blue-500 anywhere-words"
          target="_black"
        >
          https://wit.at0086.cn/StuApplication/Login.aspx
        </a>
      </div>
    </section>
  );
}

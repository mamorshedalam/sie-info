export default function Page() {
  return (
    <section className="x-page-container">
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Bank Location :</h2>
        <p>
          No. 368-22, Huquan Street, Hongshan District, Wuhan City, Hubei
          Province
          <i className="text-gray-500 text-sm">(Beside North Gate 2)</i>
        </p>
        <a
          href="https://ditu.amap.com/place/B001B15ZZO"
          target="_black"
          className="x-link-a"
        >
          Amap location
        </a>
        <a
          href="https://j.map.baidu.com/12/Hk5"
          target="_black"
          className="x-link-a"
        >
          Baidu Map location
        </a>
        <a
          href="https://maps.apple.com/place?auid=1117162367222388&lsp=57879"
          target="_black"
          className="x-link-a"
        >
          Apple Map location
        </a>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Working Hours :</h2>
        <p>
          9:00 - 12:00 AM and 14:00 - 17:00 PM on weekdays<br />
          <i className="text-gray-500 text-sm">
            Since the bank can only serve a limited number of foreigners for
            bank card applications daily, it is recommended to go as early as
            possible.
          </i>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Required Documents :</h2>
        <ul>
          <li>1. Your valid passport</li>
          <li>2. The certification document issued by the school</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">
          Submission of Account Opening Receipt :
        </h2>
        <p>
          After successfully opening the bank card, please submit the bank card
          account opening receipt to Office 712 of the college on the morning of
          April 28th. <br />
          <b className="text-gray-500 text-sm">
            This step is crucial for the subsequent processes, so please
            complete it on time.
          </b>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Precautions :</h2>
        <p>
          Before handling, please confirm that you have brought all the
          above-mentioned materials to ensure they are complete and valid.When
          handling business at the bank, please abide by the bank's regulations
          and follow the instructions of the staff.
        </p>
      </div>
    </section>
  );
}

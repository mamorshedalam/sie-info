export default function Page() {
  return (
    <section className="p-9 space-y-4">
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Medical Location :</h2>
        <p>
          Hubei International Travel Healthcare Center
        </p>
        <a
          href="https://ditu.amap.com/place/B0HUNS9PP8"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Amap location
        </a>
        <a
          href="https://j.map.baidu.com/a8/uBwc"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Baidu Map location
        </a>
        <a
          href="https://maps.apple.com/place?auid=1118493791128365&lsp=57879"
          target="_black"
          className="underline text-blue-500 anywhere-words"
        >
          Apple Map location
        </a>
        <p className="flex items-center gap-2 mt-2">
          <span className="font-medium">Contact Number:</span>{" "}
          <a
            href="tel:027-87384283"
            className="underline text-blue-500 anywhere-words"
          >
            027 - 87384283
          </a>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Navigate :</h2>
        <ul>
          <li>- Walk 1.3km to Optics Valley Square Subway Station</li>
          <li>- Board the Line 11 train (Gedian South Station Direction)</li>
          <li>- Get off at the Wuhan East Railway Station (2 stops after)</li>
          <li>- Walk 966m</li>
        </ul>
        <p className="mt-2"><span className="font-medium">Duration:</span> 45 minutes</p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Working Hours :</h2>
        <p>
        8:00 to 11:30 AM on weekdays
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Required Documents :</h2>
        <ul>
          <li>1. Your valid passport</li>
          <li>2. Two 2-inch color photos</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Precautions :</h2>
        <p><span className="font-medium">Fasting Requirement:</span> You must be in a fasting state on the day of the physical examination. Please do not drink water or have breakfast. Please arrange your physical examination time reasonably according to your own situation to avoid affecting the examination results and subsequent itinerary.</p>
        <p><span className="font-medium">Payment of Fees:</span> The physical examination fee is approximately <b>340 yuan</b>. Payment methods include cash, WeChat Pay, Alipay, and bank card payment. Students can choose the appropriate payment method according to their own convenience.</p>
      </div>
    </section>
  );
}

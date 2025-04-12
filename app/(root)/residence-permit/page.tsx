export default function Page() {
  return (
    <section className="x-page-container">
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Citizen's Home Location :</h2>
        <p>Citizens’ Home, No. 117 Jinqiao Road, Hankou</p>
        <a
          href="https://ditu.amap.com/place/B001B19JAC"
          target="_black"
          className="x-link-a"
        >
          Amap location
        </a>
        <a
          href="https://j.map.baidu.com/e6/Yg"
          target="_black"
          className="x-link-a"
        >
          Baidu Map location
        </a>
        <a
          href="https://maps.apple.com/place?auid=1117162367387364&lsp=57879"
          target="_black"
          className="x-link-a"
        >
          Apple Map location
        </a>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Navigate :</h2>
        <ul>
          <li>- Walk 1.1km to Yangjiawan Subway Station</li>
          <li>- Board the Line 2 train (Tianhe Airport Direction)</li>
          <li>- Transfer to Line 3 at Van Lake Station (15 stops after)</li>
          <li>- Get off at the Citizen's Home (9 stops after)</li>
          <li>- Walk 189m</li>
        </ul>
        <p className="mt-2"><span className="font-medium">Duration:</span> 1.5 hours</p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Working Hours :</h2>
        <p>
          9:00 - 12:00 AM and 13:30 - 17:00 PM
          <br />
          <i className="text-gray-500 text-sm">
            Please arrange your visit accordingly to avoid any inconvenience.
          </i>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Required Documents :</h2>
        <ul>
          <li>1. Passport Personal Information Page - 1 (copy)</li>
          <li>2. Passport Entry Stamp Page - 1 (copy)</li>
          <li>3. Passport Recent Residence Permit - 1 (copy)</li>
          <li>4. Registration Form of Temporary Residence for Visitors from Overseas - 1 (original)</li>
          <li>5. Official Letter - 1 (original)</li>
          <li>6. Foreigner Visa Application Form - 1 (original)</li>
          <li>7. Photo - 1</li>
          <li>8. Admission Notice - 1 (copy)</li>
          <li>9. JW201/202 Form - 1 (copy)</li>
          <li>10. Foreigner Physical Examination - 1 (original)</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Fee Information :</h2>
        <p>
          400 yuan
          <br />
          <i className="text-gray-500 text-sm">
            Please prepare the exact amount in cash or make sure your payment
            method (such as bank card) is acceptable at the counter in advance.
            Different types of additional services (if any) may have separate
            charges. Please check with the staff on - site for details.
          </i>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium text-lg mb-2">Precautions :</h2>
        <p>
          Applying for a residence permit is an important procedure. Please
          attach great importance to it and strictly follow the requirements of
          this guide to handle it on time.
        </p>
      </div>
    </section>
  );
}

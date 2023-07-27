/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";

function Generate() {
  return (
    <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
      <div className="col-span-7 rounded-xl bg-white p-4">
        <GenerateForm />
      </div>
      <div className="col-[8_/_span_17] rounded-xl bg-white">
        {/* <div className="text-base">{data}</div> */}
        <EbupReader />
      </div>
    </div>
  );
}

export default Generate;

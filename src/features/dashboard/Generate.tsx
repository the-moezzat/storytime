import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";

function Generate() {
  return (
    <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
      <div className="col-span-7 rounded-xl bg-white p-4">
        <GenerateForm />
      </div>
      <div className="col-[8_/_span_17] rounded-xl bg-white">
        <EbupReader />
      </div>
    </div>
  );
}

export default Generate;

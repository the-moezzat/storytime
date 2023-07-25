import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";

function Generate() {
  return (
    <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
      <div className="col-span-7 rounded-xl bg-white p-4">
        <GenerateForm />
      </div>
      <div className="col-span-8 rounded-xl bg-white">
        <div className="h-max w-[500px]">
          <EbupReader />
        </div>
      </div>
    </div>
  );
}

export default Generate;

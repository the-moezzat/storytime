/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";
import { Button } from "../../ui/button";
import { useMutation } from "react-query";
import axios from "axios";

function Generate() {
  const { mutate, data, isLoading } = useMutation(() =>
    axios.post("http://104.43.137.129:8000/docs", {
      prompt:
        "Alex lives in Paris in 2050, where the effects of global warming are making it difficult to find food and water.",
      writingStyle:
        "Clear and easily understandable, similar to a young adult novel. Highly descriptive and sometimes long-winded. Similar to the pulse-pounding intensity of J. R. R. Tolkien, or Stephen King or Agatha Christie.",
      num_chapters: 1,
    }),
  );

  function handleGenerate() {
    console.log("Generating");
    mutate();
    console.log("Done");
  }

  console.log(isLoading ? "loading" : data);

  return (
    <>
      <Button onClick={handleGenerate} disabled={isLoading}>
        {isLoading ? "Loading..." : "Generate"}
      </Button>
      <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
        <div className="col-span-7 rounded-xl bg-white p-4">
          <GenerateForm />B
        </div>
        <div className="col-[8_/_span_17] rounded-xl bg-white">
          {/* <div className="text-base">{data}</div> */}
          <EbupReader />
        </div>
      </div>
    </>
  );
}

export default Generate;

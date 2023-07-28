/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { objectToQueryString } from "../../utils/helper";
import StoryViewer from "./StoryViewer";

function Generate() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["story"],
    queryFn: () => axios("http://localhost:3000/story"),
    staleTime: 0,
  });

  console.log(error);
  console.log(isLoading ? "loading" : data.data);

  return (
    <>
      <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
        <div className="col-span-7 rounded-xl bg-white p-4">
          <GenerateForm />
        </div>
        <div className="col-[8_/_span_17] rounded-xl bg-white p-4">
          {isLoading ? "loading..." : <StoryViewer story={data.data} />}
          {/* <EbupReader /> */}
        </div>
      </div>
    </>
  );
}

export default Generate;

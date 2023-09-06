/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import EbupReader from "./EbupReader";
import GenerateForm from "./GenerateForm";
import { useMutation } from "react-query";
import axios from "axios";
import { objectToQueryString } from "@/utils/helpers";
import StoryViewer from "./StoryViewer";
// import { ScrollArea } from "../../ui/scroll-area";

const endpoint = "https://gpt-author.onrender.com/generate";

function Generate() {
  const {
    mutate: generate,
    data,
    // error,
    isLoading,
  } = useMutation(
    (body: { prompt: string; writing_style: string; num_chapters: number }) =>
      axios.post(`${endpoint}?${objectToQueryString(body)}`),
    {
      mutationKey: ["story"],
      onSuccess(data) {
        console.log(data);
      },
    },
  );

  // console.log(data);
  // const { data, isLoading: storyLoading } = useQuery({
  //   queryKey: ["story"],
  //   queryFn: () => axios("http://localhost:3000/story"),
  //   staleTime: 0,
  // });

  return (
    <>
      <div className="grid grid-cols-[repeat(24,1fr)] gap-4 overflow-hidden ">
        <div className=" col-span-7 overflow-auto rounded-xl bg-white p-4">
          <GenerateForm generate={generate} isLoading={isLoading} />
        </div>
        <div className="col-[8_/_span_17] rounded-xl bg-white p-4">
          {isLoading && "Loading..."}
          {!data ? (
            "Enter your story details and see the magic happened"
          ) : (
            <StoryViewer story={data.data} />
          )}
          {/* <EbupReader /> */}
        </div>
      </div>
    </>
  );
}

export default Generate;

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import EbupReader from "./EbupReader";
import GenerateForm from "./GenerateForm";
import { useMutation } from "react-query";
import axios from "axios";
import { objectToQueryString } from "@/utils/helpers";
import StoryViewer from "./StoryViewer";
import { ScrollArea } from "@/components/ui/scroll-area";
import Loading from "@/components/Loading";
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
      <ScrollArea className="col-span-7 h-full overflow-auto rounded-xl bg-white p-4">
        <GenerateForm generate={generate} isLoading={isLoading} />
      </ScrollArea>
      <div className="col-[8_/_span_17] rounded-xl bg-white p-4">
        {isLoading && (
          <div className="flex h-full flex-col items-center justify-center gap-6">
            <Loading type="self" size="large" className="text-[#12EDE8]" />
            <h2 className="mb-3 text-center text-xl font-bold text-[#161D25]">
              Tighten Your Seatbelt: Your AI-Aeroplane is in Flight!
            </h2>
          </div>
        )}
        {!data && !isLoading && (
          <div className="flex h-full flex-col items-center justify-center">
            <img src="/air-craft.svg" alt="air-craft" className="mb-10 h-28" />
            <h2 className="mb-3 text-center text-2xl font-bold text-gray-8">
              Take Flight to Imagination: Where Will Your AI-Powered Aeroplane
              Land?
            </h2>
            <p className="mb-8 mt-4 text-center text-sm text-gray-6 max-lg:text-xs">
              Embark on a Journey of Creativity! Simply enter your AI-Aeroplane
              prompt below, and watch as it takes off into the Land of
              Imagination, crafting a unique story just for you. Your adventure
              awaits – let's begin!
            </p>
          </div>
        )}
        {data && <StoryViewer story={data.data} />}
        {/* <EbupReader /> */}
      </div>
    </>
  );
}

export default Generate;

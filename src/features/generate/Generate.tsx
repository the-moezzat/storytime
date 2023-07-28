/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// import EbupReader from "./EbupReader";
import GenerateForm from "./GenerateForm";
import { useMutation } from "react-query";
import axios from "axios";
import { objectToQueryString } from "../../utils/helper";
import StoryViewer from "./StoryViewer";

const endpoint = "https://gpt-author-kx2ozxq4oa-uc.a.run.app/generate";

function Generate() {
  const {
    mutate: generate,
    data,
    // error,
    isLoading,
  } = useMutation(
    (body: { prompt: string; writing_style: string; num_chapters: number }) =>
      axios.post(`${endpoint}?${objectToQueryString(body)}`),
    { mutationKey: ["story"] },
  );

  // const { data, isLoading: storyLoading } = useQuery({
  //   queryKey: ["story"],
  //   queryFn: () => axios("http://localhost:3000/story"),
  //   staleTime: 0,
  // });

  return (
    <>
      <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
        <div className="col-span-7 rounded-xl bg-white p-4">
          <GenerateForm generate={generate} isLoading={isLoading} />
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

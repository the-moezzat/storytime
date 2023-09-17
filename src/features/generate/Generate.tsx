/* eslint-disable @typescript-eslint/no-unsafe-call */
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
import { addStory } from "@/services/apiStories";
import useUser from "@/hooks/useUser";
import useProfile from "@/hooks/useProfile";
import { Button } from "@/components/ui/button";
import InfoScreen from "@/components/infoScreen";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const endpoint = import.meta.env["VITE_API_URL"] as string;

function Generate() {
  const { id } = useUser();

  const { mutate } = useMutation({
    mutationFn: addStory,
    onSuccess(data) {
      console.log(data);
    },
  });

  const { updateCredit, profile } = useProfile();

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
        console.log(data.data);
        mutate({
          title: data.data.title as string,
          numberOfChapters: data.data.chapter_titles.length,
          user_id: id,
          chapters: data.data.chapter_titles.map(
            (chapter: { [key: string]: string }) => {
              return {
                title: Object.keys(chapter)[0].split("-")[1],
                content: Object.values(chapter)[0],
              };
            },
          ),
        });
        updateCredit();
      },
    },
  );

  // console.log(data);
  // const { isLoading: loading } = useQuery({
  //   queryKey: ["story"],
  //   queryFn: () => axios("http://localhost:3000/story"),
  //   staleTime: Infinity,
  //   onSuccess: (data) => {
  //     // console.log(data.data);
  //     // console.log({
  //     //   title: data.data.title as string,
  //     //   numberOfChapters: data.data.chapter_titles.length,
  //     //   user_id: id,
  //     //   chapters: data.data.chapter_titles.map(
  //     //     (chapter: { [key: string]: string }) => {
  //     //       return {
  //     //         title: Object.keys(chapter)[0].split("-")[1],
  //     //         content: Object.values(chapter)[0],
  //     //       };
  //     //     },
  //     //   ),
  //     // });
  //   },
  // });

  return (
    <>
      <ScrollArea className="col-span-7 h-full rounded-xl bg-white max-lg:col-span-8 max-md:hidden">
        <div className="p-4">
          <GenerateForm generate={generate} isLoading={isLoading} />
        </div>
      </ScrollArea>
      <div className="fixed bottom-0 right-0 z-50 w-full  border-t bg-white p-2 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="w-full text-base">
              {isLoading ? "Generating" : "Generate"}
            </Button>
          </SheetTrigger>
          <SheetContent side={"bottom"} className="h-auto max-h-[95%]">
            <GenerateForm generate={generate} isLoading={isLoading} />
          </SheetContent>
        </Sheet>
      </div>
      {/* <ScrollArea className="col-[8_/_span_17]  rounded-xl bg-white "> */}
      <div className="col-[8_/_span_17] h-full  overflow-x-auto rounded-xl bg-white max-lg:col-[9_/_span_16] max-md:col-span-full">
        {profile?.used_credit === profile?.credit && !data && (
          <InfoScreen>
            <InfoScreen.Image
              src="/warning.svg"
              alt="air-craft"
              className="mb-8 h-36"
            />
            <InfoScreen.Title>
              You're out of credits! buy some credit to continue your journey in
              creativity land
            </InfoScreen.Title>
            <InfoScreen.actions className="space-x-2">
              <Button>Buy credit</Button>
              <Button variant={"outline"}>Discover community</Button>
            </InfoScreen.actions>
          </InfoScreen>
        )}
        {isLoading && (
          <InfoScreen>
            <Loading type="self" size="large" className="mb-3 text-primary" />
            <InfoScreen.Title>
              Tighten Your Seatbelt: Your AI is in Flight!
            </InfoScreen.Title>
            <InfoScreen.Description>
              your AI is crafting a unique story for you. this process takes
              around 5 minutes don't close this page
            </InfoScreen.Description>
          </InfoScreen>
        )}
        {!data && !isLoading && profile?.used_credit !== profile?.credit && (
          <InfoScreen>
            <InfoScreen.Image
              src="/air-craft.svg"
              alt="air-craft"
              className="mb-2 h-56"
            />
            <InfoScreen.Title>
              Take Flight to Imagination: Where Will Your AI-Powered Aeroplane
              Land?
            </InfoScreen.Title>
            <InfoScreen.Description>
              Embark on a Journey of Creativity! Simply enter your AI-Aeroplane
              prompt below, and watch as it takes off into the Land of
              Imagination, crafting a unique story just for you. Your adventure
              awaits – let's begin!
            </InfoScreen.Description>
          </InfoScreen>
        )}
        {data && <StoryViewer story={data.data} />}
        {/* <EbupReader /> */}
      </div>
      {/* </ScrollArea> */}
    </>
  );
}

export default Generate;

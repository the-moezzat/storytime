/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useQueryClient } from "react-query";
import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";

// // Replace these variables with your actual values
// const apiUrl = "https://api.replicate.com/v1/predictions";
// const apiToken = "r8_cPuiVse21b4DCCTmfPAwwcQNwF0jnXI1ZNg7d";
// const version =
//   "a38b8ba0d73d328040e40ecfbb2f63a938dec8695fe15dfbd4218fa0ac3e76bf";
// const promptText =
//   "story that talks about a prince that fall in love with the queen of the enemy kingdom and in the end of the story the prince marry the queen after long war and a lot of losses from both sides and the two kingdom has live in peace and love";

// Data to be sent in the request body

function Generate() {
  // const queryClient = useQueryClient();

  // const data: undefined | string = queryClient.getQueryData(["story"]);

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

/* eslint-disable @typescript-eslint/no-misused-promises */
import GenerateForm from "./GenerateForm";
import EbupReader from "./EbupReader";
import { Button } from "../../ui/button";
// import Replicate from "replicate";

// const replicate = new Replicate({
//   auth: "r8_cPuiVse21b4DCCTmfPAwwcQNwF0jnXI1ZNg7d",
// });

// Replace these variables with your actual values
const apiUrl = "https://api.replicate.com/v1/predictions";
const apiToken = "r8_cPuiVse21b4DCCTmfPAwwcQNwF0jnXI1ZNg7d";
const version =
  "a38b8ba0d73d328040e40ecfbb2f63a938dec8695fe15dfbd4218fa0ac3e76bf";
const promptText =
  "story that talks about a prince that fall in love with the queen of the enemy kingdom and in the end of the story the prince marry the queen after long war and a lot of losses from both sides and the two kingdom has live in peace and love";

// Data to be sent in the request body
const data = {
  version: version,
  input: {
    prompt: promptText,
  },
};

// Options for the Fetch API request
const requestOptions = {
  method: "POST",
  headers: {
    Authorization: `Token ${apiToken}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
};

function Generate() {
  function handleClick() {
    console.log("generating");
    // Make the Fetch API call
    fetch(apiUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  }

  return (
    <div className="grid h-full grid-cols-[repeat(24,1fr)] gap-4">
      <Button onClick={handleClick}> Generate </Button>
      <div className="col-span-7 rounded-xl bg-white p-4">
        <GenerateForm />B
      </div>
      <div className="col-[8_/_span_17] rounded-xl bg-white">
        <EbupReader />
      </div>
    </div>
  );
}

export default Generate;

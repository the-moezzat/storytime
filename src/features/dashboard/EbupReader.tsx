import { useState } from "react";
import { ReactReader } from "react-reader";

function EbupReader() {
  // And your own state logic to persist state
  const [location, setLocation] = useState<string | number | undefined>(
    undefined,
  );

  const locationChanged = (epubcifi: string | number | undefined) => {
    setLocation(epubcifi);
  };
  return (
    <div className="h-full overflow-hidden rounded-2xl">
      <ReactReader
        title="A new story"
        location={location}
        locationChanged={locationChanged}
        url="https://ftwrxnjzqgqzvrkodecs.supabase.co/storage/v1/object/public/stories/Requiem%20of%20Shadows%20and%20Whispers.epub"
      />
    </div>
  );
}

export default EbupReader;

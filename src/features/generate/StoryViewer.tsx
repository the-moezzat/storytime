import { useState } from "react";
import Chapters from "./Chapters";

interface Storybook {
  title: string;
  chapter_titles: { [key: string]: string }[];
}

function StoryViewer({ story }: { story: Storybook }) {
  const [currentChapter, setCurrentChapter] = useState(0);

  const { title, chapter_titles: chapters } = story;

  const chapterTitles = chapters.map((chapter) => Object.keys(chapter)[0]);

  function handleChangeChapter(chapterNum: number) {
    setCurrentChapter(chapterNum);
  }

  return (
    <div className="font-serif">
      <header className="mb-6 flex items-center">
        <Chapters
          chapters={chapterTitles}
          onChangeChapter={handleChangeChapter}
        />
        <h2 className="w-full text-center text-gray-5">{title}</h2>
      </header>
      <div>
        <h3 className="mb-4 text-xl font-bold text-gray-8">
          {chapterTitles[currentChapter]}
        </h3>
        <article className="px-2 text-base leading-loose">
          {chapters[currentChapter][chapterTitles[currentChapter]]}
        </article>
      </div>
    </div>
  );
}

export default StoryViewer;

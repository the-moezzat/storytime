import FeatureBox from "./feature-box";

const features = [
  {
    img: "/illustrations/book.svg",
    title: "Personalized Stories",
    description:
      "Create your own storybook. You can choose the characters, the setting, the plot, and the style of your story. Make it as unique and original as you are.",
  },
  {
    img: "/illustrations/pencil.svg",
    title: "Easy Editing",
    description:
      "Edit your storybook You can change the text, the images, the colors, and the layout of your storybook anytime you want. Make it as perfect and polished as you can.",
  },
  {
    img: "/illustrations/number.svg",
    title: "Unlimited Stories",
    description:
      "Enjoy unlimited access to hundreds of stories You can read, download, print, and share as many storybooks as you like. Make it as fun and exciting as you wish.",
  },
];

export default function Features() {
  return (
    <div className=" px-8" id="features">
      <div className="mb-8 px-4 py-10 sm:px-6 sm:pt-24 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-medium uppercase tracking-wider text-blue-5">
            How it's work?
          </h2>
          <p className="mt-1 text-2xl font-extrabold text-gray-8 sm:text-3xl sm:tracking-tight lg:text-4xl">
            Unleash the power of imagination
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {features.map((feature) => (
          <FeatureBox
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default function FeatureBox({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center ">
      <img src={img} alt="" className=" mb-8 h-52" />
      <h3 className="mb-4 text-xl font-semibold text-gray-8">{title}</h3>
      <p className="text-sm leading-relaxed tracking-wide text-gray-7">
        {description}
      </p>
    </div>
  );
}

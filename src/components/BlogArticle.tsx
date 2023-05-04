import Image from "next/image";

interface BlogArticleProps {
  image: string;
  title: string;
  link: string;
}

export default function BlogArticle({
  image,
  title,
  link,
}: BlogArticleProps): JSX.Element {
  return (
    <a href={link} target="_blank">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="w-full h-auto"
          height={100}
          width={200}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h2 className="absolute inset-0 flex text-center justify-center items-center text-white font-bold text-2xl">
          {title}
        </h2>
      </div>
    </a>
  );
}

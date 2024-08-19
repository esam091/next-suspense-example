import { getVideo } from "../utils";

export async function VideoSection() {
  const video = await getVideo();

  return (
    <div>
      <iframe
        src={video.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full aspect-[560/315] rounded-sm"
      ></iframe>

      <h2 className="text-xl font-semibold mt-6">{video.title}</h2>
      <p className="mt-3 opacity-75">{video.description}</p>
    </div>
  );
}

import Image from "next/image";
import { getRecommendations } from "../utils";

export async function RecommendationSection() {
  const recommendations = await getRecommendations();

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Recommendations</h3>

      <div className="flex flex-col gap-5">
        {recommendations.map((recommendation) => (
          <div className="flex gap-3" key={recommendation.id}>
            <Image
              src={recommendation.channelPictureUrl}
              width={160}
              height={90}
              className="aspect-video rounded-sm"
              alt="Channel picture" />

            <div className="max-w-52">
              <div className="font-medium opacity-90">{recommendation.title}</div>
              <div className="text-sm opacity-80">{recommendation.channelName}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

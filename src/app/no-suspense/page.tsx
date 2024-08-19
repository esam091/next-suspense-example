import { VideoSection } from "../sections/VideoSection";
import { CommentSection } from "../sections/CommentSection";
import { RecommendationSection } from "../sections/RecommendationSection";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function Page() {
  return (
    <div className="container py-8 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 space-y-9">
        <Alert variant={'destructive'}>
          <AlertTitle>This page is rendered without suspense</AlertTitle>
          <AlertDescription>
            You won't see this alert until the whole page finished loading
          </AlertDescription>
        </Alert>

        <VideoSection />
        <CommentSection />
      </div>
      <div className="min-w-40">
        <RecommendationSection />
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic'
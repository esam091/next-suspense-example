import { VideoSection } from "../sections/VideoSection";
import { CommentSection } from "../sections/CommentSection";
import { RecommendationSection } from "../sections/RecommendationSection";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function Page() {
  return (
    <div className="container py-8 flex flex-col lg:flex-row gap-10">
      <div className="flex-1 space-y-9">
      <Alert>
          <AlertTitle>This page is rendered using suspense</AlertTitle>
          <AlertDescription>
            You can read this alert even while the page is still loading
          </AlertDescription>
        </Alert>

        <Suspense fallback={<VideoSectionLoadingIndicator />}>
          <VideoSection />
        </Suspense>

        <Suspense fallback={<CommentSectionLoadingIndicator />}>
          <CommentSection />
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<RecommendationLoadingIndicator />}>
          <RecommendationSection />
        </Suspense>
      </div>
    </div>
  );
}

function VideoSectionLoadingIndicator() {
  return (
    <div>
      <Skeleton className="w-full aspect-[560/315]" />

      <Skeleton className="mt-6 h-7" />

      <Skeleton className="mt-3 h-16" />
    </div>
  );
}

function CommentSkeleton() {
  return (
    <div className="flex gap-3">
      <Skeleton className="w-10 h-10 rounded-full" />

      <div className="flex-1">
        <Skeleton className="h-6 w-28" />
        <Skeleton className="h-6 mt-2 w-full" />
      </div>
    </div>
  );
}

function CommentSectionLoadingIndicator() {
  return (
    <div>
      <Skeleton className="h-7 mb-2 w-32" />

      <div className="flex flex-col gap-5">
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
        <CommentSkeleton />
      </div>
    </div>
  );
}

function RecommendationSkeleton() {
  return (
    <div className="flex gap-3 ">
      <Skeleton className="aspect-video rounded-sm w-40" />

      <div className="w-52 flex-1">
        <Skeleton className="w-32 h-5" />
        <Skeleton className="w-full h-5 mt-2" />
      </div>
    </div>
  );
}

function RecommendationLoadingIndicator() {
  return (
    <div>
      <Skeleton className="h-7 w-36 mb-2" />

      <div className="flex flex-col gap-5">
        <RecommendationSkeleton />
        <RecommendationSkeleton />
        <RecommendationSkeleton />
        <RecommendationSkeleton />
        <RecommendationSkeleton />
      </div>
    </div>
  );
}


export const dynamic = 'force-dynamic'
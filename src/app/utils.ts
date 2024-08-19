export interface Video {
  title: string
  channelName: string
  description: string
  url: string
}

export async function getVideo(): Promise<Video> {
  await randomDelay()

  return {
    channelName: 'Wild Wonders',
    title: "Capybara & Cat Cafe in Japan Tokyo",
    description: "Join us on a delightful journey into the world of capybaras! These adorable, oversized rodents are taking the internet by storm, and for good reason. In this video, we'll explore the fascinating lives of capybaras, their natural habitats, social behaviors, and why they make surprisingly great pets in some parts of the world. From their love of water to their gentle nature, discover why capybaras are truly one of nature's most lovable creatures. Don't forget to like, subscribe, and share your capybara experiences in the comments!",
    url: 'https://www.youtube.com/embed/ALXqHday3_k?si=WAxmLpDGR8E6fWyL'
  }
}

export interface Comment {
  id: string
  content: string
  commenterName: string
  commenterPictureUrl: string
}

export async function getComments(): Promise<Comment[]> {
  await randomDelay()

  return [
    {
      id: '1',
      content: 'Capybaras are so cute! I had no idea they were such social animals. Thanks for the info!',
      commenterName: 'AnimalLover22',
      commenterPictureUrl: 'https://picsum.photos/id/100/100'
    },
    {
      id: '2',
      content: "I saw capybaras on my trip to Brazil last year. They're even more adorable in person!",
      commenterName: 'TravelBug99',
      commenterPictureUrl: 'https://picsum.photos/id/103/100'
    },
    {
      id: '3',
      content: "Wait, people keep capybaras as pets? That's wild! Are they legal everywhere?",
      commenterName: 'PetEnthusiast',
      commenterPictureUrl: 'https://picsum.photos/id/106/100'
    },
    {
      id: '4',
      content: "Great video! I'd love to see more content on unique animals like this. Maybe sloths next?",
      commenterName: 'NatureNerd',
      commenterPictureUrl: 'https://picsum.photos/id/107/100'
    },
    {
      id: '5',
      content: "I can't get enough of these gentle giants! Their chill attitude is so relatable.",
      commenterName: 'CapybaraFan2000',
      commenterPictureUrl: 'https://picsum.photos/id/109/100'
    },
    {
      id: '6',
      content: "Interesting video! Quick question: How do capybaras compare to other rodents in terms of intelligence?",
      commenterName: 'BiologyStudent',
      commenterPictureUrl: 'https://picsum.photos/id/111/100'
    }
  ]
}

export interface Recommendation {
  id: string
  title: string
  channelName: string
  channelPictureUrl: string
}

export async function getRecommendations(): Promise<Recommendation[]> {
  await randomDelay()

  return [
    {
      id: '1',
      title: "Top 10 Unusual Exotic Pets You Won't Believe",
      channelName: "Creature Features",
      channelPictureUrl: 'https://picsum.photos/id/113/160/90'
    },
    {
      id: '2',
      title: "A Day in the Life of a Capybara: From Dawn to Dusk",
      channelName: "Animal Planet",
      channelPictureUrl: 'https://picsum.photos/id/115/160/90'
    },
    {
      id: '3',
      title: "Rodents of Unusual Size: Meet the Capybara's Cousins",
      channelName: "Science Explorers",
      channelPictureUrl: 'https://picsum.photos/id/117/160/90'
    },
    {
      id: '4',
      title: "Capybaras: Nature's Hot Tub Enthusiasts",
      channelName: "Funny Animal Facts",
      channelPictureUrl: 'https://picsum.photos/id/119/160/90'
    },
    {
      id: '5',
      title: "The Secret World of South American Wildlife",
      channelName: "National Geographic",
      channelPictureUrl: 'https://picsum.photos/id/121/160/90'
    },
    {
      id: '6',
      title: "Are Capybaras the World's Most Chill Animal? A Behavioral Study",
      channelName: "Animal Psychology Today",
      channelPictureUrl: 'https://picsum.photos/id/123/160/90'
    },
  ]
}

async function randomDelay() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000 + Math.random() * 2000)
  })
}
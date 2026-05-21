export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.vdsatheesan.com"

export const siteName = "V. D. Satheesan"

export const defaultDescription =
  "Explore the journey, public work, constituency initiatives, updates, and personal reflections of V. D. Satheesan."

export const defaultImage = "/home_images/vds-main.png"

export const routes = [
  {
    path: "/",
    title: "V. D. Satheesan: Dedicated Public Servant and Leader for Change",
    description:
      "Explore the journey and achievements of V. D. Satheesan, a committed leader dedicated to social justice and community welfare.",
  },
  {
    path: "/my-journey",
    title: "V D Satheesan: A Journey Through Leadership and Advocacy",
    description:
      "Discover the inspiring journey of V D Satheesan, from a passionate student leader to a significant political figure in Kerala.",
  },
  {
    path: "/sincerely-me",
    title: "Sincerely, Me - Insights from V D Satheesan, Leader of Opposition, Kerala",
    description:
      "Explore Sincerely, Me by V D Satheesan, where he shares personal stories and his journey in politics.",
  },
  {
    path: "/my-constituency",
    title: "Exploring North Paravur: V.D. Satheesan's Constituency Legacy",
    description:
      "Discover North Paravur through the eyes of V.D. Satheesan. Explore its rich history, vibrant culture, and the impactful developments shaping this unique constituency.",
  },
  {
    path: "/in-my-book-shelf",
    title: "V. D. Satheesan's Favourite Reads - In My Book Shelf",
    description:
      "Explore the influential bookshelf of V. D. Satheesan, featuring literature that has shaped his political and personal life.",
  },
  {
    path: "/press-releases",
    title: "V D Satheesan Press Releases - Latest Updates and Announcements",
    description:
      "Stay informed with the latest press releases from V D Satheesan, including updates and announcements on public initiatives.",
  },
  {
    path: "/newsletters",
    title: "V.D. Satheesan Official Newsletters - Insights and Updates",
    description:
      "Stay informed with updates, insights, and reflections from V.D. Satheesan through official newsletters.",
  },
  {
    path: "/get-in-touch",
    title: "Get in Touch with V.D. Satheesan",
    description:
      "Reach out to V.D. Satheesan for discussions, collaborations, feedback, and public engagement.",
  },
]

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString()
}

export function pageMetadata(path) {
  const route = routes.find((item) => item.path === path) || routes[0]
  const url = absoluteUrl(route.path)
  const image = absoluteUrl(defaultImage)

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: route.path,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteName} official website`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [image],
    },
  }
}

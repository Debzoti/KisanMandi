// Blogs.tsx
import BlogCard from "./cards/blogCard";

export default function Blogs() {
  const blogPosts = [
    {
      title: "Sustainable Farming Techniques",
      description: "Discover innovative methods for eco-friendly agriculture that boost yield while preserving natural resources.",
      date: "2024-03-15",
      link:"https://www.google.com"
    },
    {
      title: "Modern Irrigation Solutions",
      description: "Learn about water-efficient irrigation systems that are transforming crop management.",
      date: "2024-03-14",
      link:"https://www.google.com"
    },
    {
      title: "Organic Fertilizers 101",
      description: "A comprehensive guide to natural fertilizers for healthier crops and soil regeneration.",
      date: "2024-03-13",
      link:"https://www.google.com"
    },
    {
      title: "Crop Rotation Strategies",
      description: "Maximize soil health and yield through effective crop rotation techniques.",
      date: "2024-03-12",
      link:"https://www.google.com"
    },
    {
      title: "Vertical Farming Innovations",
      description: "Explore space-efficient farming solutions for urban environments.",
      date: "2024-03-11",
      link:"https://www.google.com"
    },
    {
      title: "Climate-Resilient Crops",
      description: "Understanding plant varieties that thrive in changing climate conditions.",
      date: "2024-03-10",
      link:"https://www.google.com"
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Agricultural Insights
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay updated with the latest trends and innovations in modern farming practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <a href={post.link} target="_blank" rel="noreferrer" key={index}>
          <BlogCard
            key={index}
            title={post.title}
            description={post.description}
            date={post.date}
            image={`https://picsum.photos/400/400?random=${index}`}
          />
          </a>
        ))}
      </div>
    </div>
  );
}
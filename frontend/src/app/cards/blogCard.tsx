// BlogCard.tsx
interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    date: string;
}

export default function BlogCard(props: BlogCardProps) {
    return (
        <div className="flex flex-col rounded-lg border border-gray-200 shadow-sm overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group cursor-pointer dark:border-gray-800">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={props.image}
                    alt={props.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 bg-white dark:bg-gray-950">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
                    {props.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                    {props.description}
                </p>
                <div className="mt-auto text-sm text-gray-500 dark:text-gray-400">
                    {new Date(props.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>
        </div>
    );
}
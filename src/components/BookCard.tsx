import { Link } from "react-router-dom";

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    imageUrl: string;
}

export default function BookCard({ id, title, author, imageUrl }: BookCardProps) {
    return (
        <Link to={`/book/${id}`} className="bg-white shadow rounded p-4 hover:shadow-md">
            <img src={imageUrl} alt={title} className="h-40 w-full object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{title}</h2>
            <p className="text-sm text-gray-600">{author}</p>
        </Link>
    );
}

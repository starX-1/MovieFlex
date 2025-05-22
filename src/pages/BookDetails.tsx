import { useParams } from "react-router-dom";

export default function BookDetails() {
    const { id } = useParams();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Book Details</h1>
            <p className="text-gray-600 mt-2">You are viewing details for book ID: <strong>{id}</strong></p>
        </div>
    );
}

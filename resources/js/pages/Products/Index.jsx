import { Link, useForm } from '@inertiajs/react';

export default function Index({ products }) {
    const { data, setData, post, delete: destroy } = useForm({
        name: '',
        price: ''
    });

    const submit = (e) => {
        e.preventDefault();
        post('/products');
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Products CRUD</h1>

            <form onSubmit={submit} className="mb-6 space-y-2">
                <input
                    className="border p-2 w-full"
                    placeholder="Name"
                    onChange={e => setData('name', e.target.value)}
                />
                <input
                    className="border p-2 w-full"
                    placeholder="Price"
                    onChange={e => setData('price', e.target.value)}
                />
                <button className="bg-blue-500 text-white px-4 py-2">
                    Add Product
                </button>
            </form>

            <ul className="space-y-2">
                {products.map(p => (
                    <li key={p.id} className="flex justify-between border p-2">
                        <span>
                            {p.name} - ${p.price}
                        </span>

                        <div className="space-x-2">
                            <Link
                                href={`/products/show/${p.id}`}
                                className="text-blue-500"
                            >
                                Show
                            </Link>

                            <button
                                onClick={() => destroy(`/products/${p.id}`)}
                                className="text-red-500"
                            >
                                Delete
                            </button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );
}

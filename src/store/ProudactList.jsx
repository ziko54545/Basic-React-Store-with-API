import { useState,useEffect } from "react";
import Product from "./Product";
export default function ProductList() {
    const [Products, setProducts] = useState([])
    const [inputsearch, Setinputsearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = () => {
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    const displayProducts = () => {
        const Proudactemp = Products.filter(Pro => {
            return Pro.title.toLowerCase().includes(inputsearch.toLowerCase())
                || Pro.id.toString().includes(inputsearch)
                || Pro.description.toLowerCase().includes(inputsearch.toLowerCase())
        })

        if (Proudactemp.length > 0) {
            return Proudactemp.map((pro) => {
                return <Product product={pro} />
            })
        } else {
            return (
                <tr>
                    <td colSpan="7" className="text-center py-12">
                        <div className="flex flex-col items-center gap-3">
                            <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-gray-500 text-lg font-medium">No products found</p>
                            <p className="text-gray-400 text-sm">Try adjusting your search criteria</p>
                        </div>
                    </td>
                </tr>
            )
        }
    }

    const handlSearch = (e) => {
        e.preventDefault();
        const value = document.querySelector("#serach").value;
        Setinputsearch(value);
    }

    const handlrest = () => {
        Setinputsearch("");
        document.querySelector("#serach").value = "";
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
            <div className="container mx-auto px-4 max-w-7xl">
             
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex items-center gap-3 mb-6">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-gray-800">Search Products</h2>
                    </div>
                    
                    <div className="flex gap-3 flex-wrap">
                        <div className="flex-1 min-w-[250px]">
                            <input 
                                type="text" 
                                id="serach" 
                                placeholder="Search by title, description, or ID..."
                                className="w-full px-5 py-3 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-200 text-gray-700"
                            />
                        </div>
                        <button 
                            onClick={handlSearch}
                            className="px-8 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Search
                        </button>
                        <button 
                            onClick={handlrest}
                            className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-xl hover:bg-gray-700 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Reset
                        </button>
                    </div>
                    
                    {inputsearch && (
                        <div className="mt-4 px-4 py-2 bg-blue-50 border-l-4 border-blue-500 rounded">
                            <p className="text-sm text-blue-800">
                                Searching for: <span className="font-semibold">"{inputsearch}"</span>
                            </p>
                        </div>
                    )}
                </div>

           
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <h2 className="text-3xl font-bold text-white">Products Catalog</h2>
                            </div>
                            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                                <span className="text-white font-semibold">{Products.length} Items</span>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b-2 border-gray-200">
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">ID</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Image</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Title</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Price</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Description</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Category</th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">Rating</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {isLoading ? (
                                    <tr>
                                        <td colSpan="7" className="text-center py-12">
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                                <p className="text-gray-500 font-medium">Loading products...</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : Products.length > 0 ? (
                                    displayProducts()
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center py-12">
                                            <p className="text-gray-500">No products available</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default function Product ({product}){
    return (
         <tr className="transition-all duration-200 hover:bg-gray-50">
        <td className="px-4 py-3 font-semibold text-gray-700">{product.id}</td>
        <td className="px-4 py-3">
            <img src={product.image} alt={product.title} className="w-16 h-16 object-contain rounded-lg shadow-sm" />
        </td>
        <td className="px-4 py-3 max-w-xs">
            <div className="font-medium text-gray-800 truncate">{product.title}</div>
        </td>
        <td className="px-4 py-3">
            <span className="text-lg font-bold text-green-600">${product.price}</span>
        </td>
        <td className="px-4 py-3 max-w-md">
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        </td>
        <td className="px-4 py-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase">
                {product.category}
            </span>
        </td>
        <td className="px-4 py-3">
            <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span className="font-semibold text-gray-800">{product.rating.rate}</span>
                <span className="text-gray-500 text-sm">({product.rating.count})</span>
            </div>
        </td>
    </tr>
    )

}
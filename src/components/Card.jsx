const Card = ({item, addToCart}) => {

  return (
    <>
        <div className="rounded-md border-b-4 border-r-4 p-3 bg-slate-50">
            <div className= "h-64 flex-shrink-0 overflow-hidden">
                <img className="rounded h-full w-full object-cover object-center" src={item.imageSrc} alt={item.imageAlt} />
            </div>  
            <div>
                <h3 className="text-2xl font-medium py-2">{item.name}</h3>
                <p className="text-sm">
                    {item.color}
                </p>
                <p className="text-2xl my-3">${item.price}</p>
                
                <div className="my-3">
                    <a 
                        className="bg-blue-900 text-md text-white py-2 px-3 rounded-md hover:bg-blue-800 hover:scale-95 ease-in-out duration-100 block text-center cursor-pointer"
                        onClick={() => addToCart(item)}
                    >
                        Add to Cart
                    </a>
                </div>
            </div>
        </div>

    </>
  )
}

export default Card
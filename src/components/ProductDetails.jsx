function ProductDetails({name, description, price, unit}){
    return(
        <>
            <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8 border-5 p-3 m-2 w-125">
                <h3 className="text-lg sm:text-xl text-gray-900">{name}</h3>
                {unit<5?
                    <span className="bg-orange-200 w-30 ">Limited Quantity</span>
                :null}
                {unit<1?
                    <span className="bg-yellow-200 w-30 ">Out Of Stock</span>
                :null}
                {price>500?
                    <span className="bg-green-200 w-30 ">Premium</span>
                :null}
                <br/>
                <p className="text-sm mt-1 text-gray-500">{description}</p>
                <h4>Rs. {price}</h4>
                <h5>Units left: {unit}</h5>
            </div>
        </>
    )
}

export default ProductDetails
import React from "react";
import config from "@payload-config";
import { getPayload } from "payload";

export default async function Products() {
    const payload = await getPayload({ config });

    const products = await payload.find({
        collection: "products",
    });

    console.log(products.docs);

    return (
        <div>
            <h3>Products</h3>
            <div className="flex">
                {products.docs.map((product) => {
                    return (
                        <div key={product.id} className="card">
                            <h4>{product.Name as string}</h4>
                            <p>{product.Price as number}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

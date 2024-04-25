import type { CollectionConfig } from "payload/types";

export const Products: CollectionConfig = {
    slug: "products",
    fields: [
        {
            name: "Name",
            type: "text",
            required: true,
        },
        {
            name: "Price",
            type: "number",
            required: true,
        },
        {
            name: "Description",
            type: "text",
        },
    ],
};

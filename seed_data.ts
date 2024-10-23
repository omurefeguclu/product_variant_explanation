import {
    Product,
    ProductAttribute,
    ProductAttributeMapping,
    ProductAttributeValue,
    ProductVariant, ProductVariantAttributeValueMapping
} from "./models";

const products: Product[] = [
    {
        id: 1,
        name: "Elbise 1"
    }
];

const productAttributeMappings: ProductAttributeMapping[] = [
    {
        id: 1,
        productId: 1,
        productAttributeId: 1
    },
    {
        id: 2,
        productId: 1,
        productAttributeId: 2
    }
];

const productAttributes: ProductAttribute[] = [
    {
        id: 1,
        name: "Renk"
    },
    {
        id: 2,
        name: "Beden"
    }
];

const productAttributeValues: ProductAttributeValue[] = [
    {
        id: 1,
        value: "Kırmızı",
        productAttributeId: 1
    },
    {
        id: 2,
        value: "Mavi",
        productAttributeId: 1
    },
    {
        id: 3,
        value: "Siyah",
        productAttributeId: 1
    },
    {
        id: 4,
        value: "S",
        productAttributeId: 2
    },
    {
        id: 5,
        value: "M",
        productAttributeId: 2
    },
    {
        id: 6,
        value: "L",
        productAttributeId: 2
    }
];

const variants: ProductVariant[] = [
    {
        id: 1,
        productId: 1,
        name: "Elbise 1 Kırmızı S"
    },
    {
        id: 2,
        productId: 1,
        name: "Elbise 1 Kırmızı M"
    },
    {
        id: 3,
        productId: 1,
        name: "Elbise 1 Kırmızı L"
    },
];

const productVariantAttributeValueMappings: ProductVariantAttributeValueMapping[] = [
    /* Elbise 1 -> Kırmızı S*/
    {
        id: 1,
        productAttributeValueId: 1,
        productVariantId: 1
    },
    {
        id: 2,
        productAttributeValueId: 4,
        productVariantId: 1
    },
    /* Elbise 1 -> Kırmızı M */
    {
        id: 3,
        productAttributeValueId: 1,
        productVariantId: 2
    },
    {
        id: 4,
        productAttributeValueId: 5,
        productVariantId: 2
    },
    /* Elbise 1 -> Kırmızı L */
    {
        id: 5,
        productAttributeValueId: 1,
        productVariantId: 3
    },
    {
        id: 6,
        productAttributeValueId: 6,
        productVariantId: 3
    }
];

export {products, productAttributes, productAttributeMappings,
    productAttributeValues, variants, productVariantAttributeValueMappings};
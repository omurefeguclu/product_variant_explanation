
// Product model
export interface Product {
    id: number;
    name: string;

}

// Product attribute -> color, size, etc.
export interface ProductAttribute {
    id: number;

    name: string;
}

// Product attribute value -> red, blue, etc. or small, medium, large, etc.
export interface ProductAttributeValue {
    id: number;
    value: string;

    productAttributeId: number;
}

// Product attribute mapping -> (Elbise 1 <-> color), (Elbise 1 <-> size) etc.
// Elbise 1 için renk ve beden gibi özelliklerin seçilebilir olmasını sağlayan tablo.
export interface ProductAttributeMapping {
    id: number;

    productId: number;
    productAttributeId: number;
}

// Product attribute value mapping (maps by variantId) -> (Elbise 1 Kırmızı Küçük Varyant <-> red),
// (Elbise 1 Kırmızı Küçük Varyant <-> small)
// Elbise 1 için bütün varyantlara ait özelliklerin seçilebilir olmasını sağlayan tablo.
export interface ProductVariantAttributeValueMapping {
    id: number;

    productAttributeValueId: number;
    // Dikkat! Product'a değil Variant'a bağlı.
    productVariantId: number;
}

// Product attribute variant -> Elbise 1 Kırmızı Küçük Varyant, aynı zamanda Elbise 1 kaydına bağlı.
export interface ProductVariant {
    id: number;

    productId: number;
    name: string;
}
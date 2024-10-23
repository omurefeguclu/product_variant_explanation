import * as seed_data from "./seed_data";

/**
 * ResultData arayüzü, ürün varyantları hakkında bilgi tutar.
 * - productName: Ürünün adı
 * - productVariantName: Ürün varyantının adı
 * - productAttributes: Ürün özellikleri (isim ve değer çiftleri)
 */
interface ResultData {
    productName: string;
    productVariantName: string;
    productAttributes: {name: string, value: string}[];
}

/**
 * Belirtilen ürün kimliğine (productId) göre ürün varyantlarını döner.
 * @param productId - Ürün kimliği
 * @returns ResultData dizisi
 */
export const getProductVariants = (productId: number): ResultData[] => {
    const result: ResultData[] = [];

    // Ürünü bul
    const product = seed_data.products.find(p => p.id === productId);

    // Ürün özellik kimliklerini bul
    const productAttributeIds = seed_data.productAttributeMappings
        .filter(pam => pam.productId === productId)
        .map(pam => pam.productAttributeId);

    // Ürün özelliklerini bul
    const productAttributes = seed_data.productAttributes
        .filter(pa => productAttributeIds.indexOf(pa.id) !== -1);

    // Ürün özellik değerlerini bul
    const productAttributeValues = seed_data.productAttributeValues
        .filter(pav => productAttributeIds.indexOf(pav.productAttributeId) !== -1);

    // Ürün varyantlarını bul
    const productVariants = seed_data.variants.filter(v => v.productId === productId);

    // Her bir ürün varyantı için
    for(const productVariant of productVariants) {
        // Ürün varyantı özellik değer eşlemelerini bul
        const productVariantAttributeValueMappings = seed_data.productVariantAttributeValueMappings
            .filter(pvavam => pvavam.productVariantId === productVariant.id);

        // İlgili özellik değerlerini bul (kırmızı, küçük, vs.)
        const relatedAttributeValueIds = productVariantAttributeValueMappings
            .map(pvavam => pvavam.productAttributeValueId);
        const relatedAttributeValues = productAttributeValues
            .filter(pav => relatedAttributeValueIds.indexOf(pav.id) !== -1);

        // İlgili özellik başlıkları bul (Renk, Beden, vs.)
        const relatedAttributeIds = relatedAttributeValues.map(pav => pav.productAttributeId);
        const relatedAttributes =  productAttributes.filter(pa => relatedAttributeIds.indexOf(pa.id) !== -1);

        // Sonuç verisini oluştur
        const resultData: ResultData = {
            productName: product.name,
            productVariantName: productVariant.name,
            productAttributes: relatedAttributes.map(ra => {
                const relatedAttributeValue = relatedAttributeValues.find(rav => rav.productAttributeId === ra.id);

                return {
                    name: ra.name,
                    value: relatedAttributeValue.value
                };
            })
        };

        // Sonuç dizisine ekle
        result.push(resultData);
    }

    return result;
}

// Ürün id: 1 olan ürünün varyantlarını al ve konsola yazdır
const result = getProductVariants(1);
console.log(JSON.stringify(result, null, 2));
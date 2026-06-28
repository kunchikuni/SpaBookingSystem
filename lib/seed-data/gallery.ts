export interface GalleryItemSeed {
  id: string;
  imageUrl: string;
  altText: string;
  label: string;
  category: string;
}

export const galleryItems: GalleryItemSeed[] = [
  { id: "g1", imageUrl: "/assets/photos/facial-mud-mask.jpg", altText: "Clay mask facial treatment", label: "Clay Mask Facial", category: "facials" },
  { id: "g2", imageUrl: "/assets/photos/massage-table-orchid.jpg", altText: "Client relaxing on massage table with orchid", label: "Relaxation Massage", category: "massage" },
  { id: "g3", imageUrl: "/assets/photos/facial-massage-relax.jpg", altText: "Facial massage treatment", label: "Facial Massage", category: "facials" },
  { id: "g4", imageUrl: "/assets/photos/sauna-relax.jpg", altText: "Client relaxing in sauna", label: "Sauna", category: "wellness" },
  { id: "g5", imageUrl: "/assets/photos/foot-spa-frangipani.jpg", altText: "Foot spa treatment with frangipani flowers", label: "Foot Spa", category: "body" },
  { id: "g6", imageUrl: "/assets/photos/hot-stone-massage.jpg", altText: "Hot stone massage treatment", label: "Hot Stone Massage", category: "massage" },
  { id: "g7", imageUrl: "/assets/photos/herbal-compress-massage.jpg", altText: "Herbal compress massage treatment", label: "Herbal Compress", category: "massage" },
  { id: "g8", imageUrl: "/assets/photos/lounge-chairs-juice.jpg", altText: "Relaxation lounge with refreshments", label: "Relaxation Lounge", category: "interior" },
  { id: "g9", imageUrl: "/assets/photos/cucumber-eye-mask.jpg", altText: "Cucumber eye mask spa treatment", label: "Cucumber Eye Treatment", category: "facials" },
  { id: "g10", imageUrl: "/assets/photos/oil-massage-candles.jpg", altText: "Oil massage by candlelight", label: "Candlelit Oil Massage", category: "wellness" },
];

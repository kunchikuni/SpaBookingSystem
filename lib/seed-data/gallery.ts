export interface GalleryItemSeed {
  id: string;
  imageUrl: string;
  altText: string;
  label: string;
  category: string;
}

export const galleryItems: GalleryItemSeed[] = [
  { id: "g1", imageUrl: "/assets/img1.jpg", altText: "Facial treatment room", label: "Facial Suite", category: "facials" },
  { id: "g2", imageUrl: "/assets/img2.jpg", altText: "Massage treatment room", label: "Massage Room", category: "massage" },
  { id: "g3", imageUrl: "/assets/img3.jpg", altText: "Relaxation lounge", label: "Relaxation Lounge", category: "interior" },
  { id: "g4", imageUrl: "/assets/img4.jpg", altText: "Body treatment in progress", label: "Body Treatment", category: "body" },
  { id: "g5", imageUrl: "/assets/img6.jpg", altText: "Spa reception area", label: "Reception", category: "interior" },
  { id: "g6", imageUrl: "/assets/img9.jpg", altText: "Facial product application", label: "Skincare Application", category: "facials" },
  { id: "g7", imageUrl: "/assets/img10.jpg", altText: "Aromatherapy oils and candles", label: "Aromatherapy Setup", category: "wellness" },
];

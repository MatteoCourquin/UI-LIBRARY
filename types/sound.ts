// types/sound.ts
export interface Category {
  _id: string;
  name: string;
  description?: string;
}

export interface SanityAsset {
  _ref: string;
  _type: "file";
}

export interface SanityFile {
  asset: SanityAsset;
  _type: "file";
}

export interface Sound {
  _id: string;
  _createdAt: string;
  name: string;
  category: string;
  file: string;
}

// Type pour les props du composant
export interface SoundPageProps {
  sounds: Sound[];
}

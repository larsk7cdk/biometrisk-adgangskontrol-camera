export interface AccessControlResponse {
  accessConfirmed: boolean;
  similarFaces: SimilarFace[];
}

export interface SimilarFace {
  faceId: string;
  persistedFaceId?: string;
  confidence: number;
}

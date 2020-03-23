export type TBase64ImageData = string[];

export type TBase64PdfData = string;

export type TMetadata = {
  randomness?: string;
}

export type TDocumentData = {
  front: TBase64ImageData;
  back?: TBase64ImageData;
  feature?: TBase64ImageData;
}

export type TSelfieData = {
  face: TBase64ImageData;
}

export type TIdDocument = {
  type: 'passport' | 'drivers_license' | 'individual_number_card' |
    'basic_resident_registration_card' |
    'residence_card' | 'driving_history_certificate' |
    'special_permanent_resident_certificate' | 'health_insurance_card';
  format: 'image';
  data: TDocumentData;
  metadata?: TMetadata;
};

export type TIndividualNumberDocument = {
  type: 'notification_card' | 'individual_number_card' | 'residence_certificate';
  format: 'image';
  data: TBase64ImageData;
};

export type TSelfie = {
  format: 'image';
  data: TSelfieData;
  metadata?: TMetadata;
};

export type TSupplementalDocument<T extends 'image' | 'pdf'> = {
  format: T;
  data: T extends 'image' ? TBase64ImageData : TBase64PdfData;
};

export type TCompanyVerificationDocument = {
  type: 'company_verification_document';
  format: 'image';
  data: TBase64ImageData;
};

export type TPersonalPlan = {
  id_document: TIdDocument;
  individual_number_document?: TIndividualNumberDocument;
}

export type TSelfiePlan = {
  id_document: TIdDocument;
  selfie: TSelfie;
};

export type TSupportingPlan<T extends 'image' | 'pdf'> = {
  supplemental_document: TSupplementalDocument<T>;
};

export type TCorporatePlan = {
  company_verification_document: TCompanyVerificationDocument;
}

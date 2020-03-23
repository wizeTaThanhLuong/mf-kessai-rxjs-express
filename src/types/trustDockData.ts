export type TCompanyRepresentatives = {
  name: string;
  address?: string;
};

export type TCompanyExecutives = {
  name: string;
}

export type TCompanyVerification = {
  company_name: string;
  head_office_address: string;
  issued_at: string;
  company_representatives: TCompanyRepresentatives;
  company_executives?: TCompanyExecutives
}

export type TComparingData = {
  name?: string;
  birth?: string;
  address?: string;
  gender?: 'male' | 'female';
  company_verification?: TCompanyVerification;
}

export interface BusinessInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  websiteUrls: {
    main: string;
    contact: string;
    about: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}
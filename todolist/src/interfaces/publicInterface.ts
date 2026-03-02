export interface BackendlessUser {
  objectId: string;
  ownerId: string | null;
  created: number;
  updated: number | null;
  lastLogin: number | null;
  email: string;
  accountType: "BACKENDLESS" | "SOCIAL" | string;
  socialAccount: string;
  userStatus: "ENABLED" | "DISABLED" | string;
  blUserLocale: string;
  oAuthIdentities: any[] | null;
  ___class: "Users";
  // Properti dengan tanda hubung harus dibungkus tanda kutip
  "user-token": string;
}

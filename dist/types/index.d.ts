export declare const PHONE_NUM_REGEX: RegExp;
export declare const MOMO_NUM_REGEX: RegExp;
export declare const DECIMAL_NUM_REGEX: RegExp;
export declare const DECIMAL_NUM_REGEX_POSITIVE_ONLY: RegExp;
export declare const USER_PLACEHOLDER = "v1627893621/user_qvwhs7webp";
export declare const DEBOUNCE_TIMER = 500;
export declare const LONG_POLL_INTERVAL = 60000;
export declare const SHORT_POLL_INTERVAL = 5000;
export type Role = 'leaderFellowship' | 'leaderBacenta' | 'leaderConstituency' | 'leaderCouncil' | 'leaderStream' | 'leaderSonta' | 'leaderHub' | 'leaderMinistry' | 'leaderFederalministry' | 'leaderGatheringService' | 'leaderOversight' | 'adminConstituency' | 'adminCouncil' | 'adminStream' | 'adminGatheringService' | 'adminOversight' | 'adminMinistry' | 'adminFederalministry' | 'arrivalsAdminGatheringService' | 'arrivalsAdminStream' | 'arrivalsAdminCouncil' | 'arrivalsAdminConstituency' | 'arrivalsConfirmerStream' | 'arrivalsCounterStream' | 'tellerStream' | 'sheepseekerStream' | 'all';
export declare const isAuthorised: (permittedRoles: Role[], userRoles: Role[]) => boolean;

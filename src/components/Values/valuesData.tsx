import { Value } from "@/types/value";

const valuesData: Value[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: "integrity",
    descriptionKey: "integrityDesc",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: "excellence",
    descriptionKey: "excellenceDesc",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61C20.3292 4.09943 19.7228 3.69474 19.0554 3.41891C18.3879 3.14308 17.6725 3 16.95 3C16.2275 3 15.5121 3.14308 14.8446 3.41891C14.1772 3.69474 13.5708 4.09943 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 3.00017 7.05 3.00017C5.59096 3.00017 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.55017 7.04097 1.55017 8.5C1.55017 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.3506 11.8792 21.7552 11.2728 22.0311 10.6054C22.3069 9.93789 22.45 9.22248 22.45 8.5C22.45 7.77752 22.3069 7.06211 22.0311 6.39464C21.7552 5.72718 21.3506 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: "humanism",
    descriptionKey: "humanismDesc",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    titleKey: "innovation",
    descriptionKey: "innovationDesc",
  },
];

export default valuesData;

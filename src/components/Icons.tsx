// Zestaw czystych ikon liniowych (bez emoji). Kolor dziedziczy z currentColor.
type P = { className?: string };
const S = (children: React.ReactNode, cn?: string) => (
  <svg className={cn} width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
    aria-hidden="true">{children}</svg>
);

// usługi
export const IconTower = ({ className }: P) => S(<>
  <path d="M7 21 L12 3 L17 21" /><path d="M7 21 L17 21" />
  <path d="M8.7 15 H15.3" /><path d="M9.6 10.5 H14.4" /><path d="M12 3 V21" />
</>, className);

export const IconCar = ({ className }: P) => S(<>
  <path d="M3 13 l1.8-5A2 2 0 0 1 6.7 6.6h10.6a2 2 0 0 1 1.9 1.4L21 13" />
  <path d="M3 13 h18 v4 h-2 v-1 H5 v1 H3 z" /><circle cx="7" cy="17.5" r="1.3" /><circle cx="17" cy="17.5" r="1.3" />
</>, className);

export const IconBank = ({ className }: P) => S(<>
  <path d="M3 9 L12 4 L21 9" /><path d="M4 9 H20" /><path d="M4 19 H20" />
  <path d="M6 9 V19" /><path d="M10 9 V19" /><path d="M14 9 V19" /><path d="M18 9 V19" /><path d="M3 19 H21" />
</>, className);

// zaufanie
export const IconScale = ({ className }: P) => S(<>
  <path d="M12 3 V21" /><path d="M7 21 H17" /><path d="M5 7 H19" /><path d="M12 5 L5 7 L12 5 L19 7" />
  <path d="M5 7 L2.5 13 a2.5 2.5 0 0 0 5 0 z" /><path d="M19 7 L16.5 13 a2.5 2.5 0 0 0 5 0 z" />
</>, className);

export const IconLock = ({ className }: P) => S(<>
  <rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10 V7 a4 4 0 0 1 8 0 v3" /><circle cx="12" cy="15" r="1" />
</>, className);

export const IconShield = ({ className }: P) => S(<>
  <path d="M12 3 L20 6 v5 c0 5-3.5 8-8 10-4.5-2-8-5-8-10 V6 z" /><path d="M9 12 l2 2 4-4" />
</>, className);

export const IconDoc = ({ className }: P) => S(<>
  <path d="M6 3 h8 l4 4 v14 H6 z" /><path d="M14 3 v4 h4" /><path d="M9 12 H15" /><path d="M9 16 H15" />
</>, className);

export const IconClock = ({ className }: P) => S(<>
  <circle cx="12" cy="12" r="9" /><path d="M12 7 V12 L15.5 14" />
</>, className);

export const IconHandshake = ({ className }: P) => S(<>
  <path d="M8 12 l3-2.5a2 2 0 0 1 2.4 0 L20 14" /><path d="M4 8 h3 l4 4" />
  <path d="M20 8 h-3 l-2.5 2" /><path d="M11 14 l1.5 1.5" /><path d="M9 16 l1.5 1.5" />
</>, className);

export const IconPin = ({ className }: P) => S(<>
  <path d="M12 21 s7-6 7-11a7 7 0 0 0-14 0 c0 5 7 11 7 11 z" /><circle cx="12" cy="10" r="2.5" />
</>, className);

export const IconPhone = ({ className }: P) => S(<>
  <path d="M6 3 h3 l2 5-2.5 1.5 a11 11 0 0 0 5 5 L16 12 l5 2 v3 a2 2 0 0 1-2 2 A16 16 0 0 1 4 5 a2 2 0 0 1 2-2 z" />
</>, className);

export const IconBriefcase = ({ className }: P) => S(<>
  <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7 V5 a2 2 0 0 1 2-2 h4 a2 2 0 0 1 2 2 v2" /><path d="M3 12 H21" />
</>, className);

const map = {
  tower: IconTower, car: IconCar, bank: IconBank,
  scale: IconScale, lock: IconLock, shield: IconShield,
  doc: IconDoc, clock: IconClock, handshake: IconHandshake,
  pin: IconPin, phone: IconPhone, briefcase: IconBriefcase,
} as const;

export type IconName = keyof typeof map;
export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name];
  return C ? <C className={className} /> : null;
}

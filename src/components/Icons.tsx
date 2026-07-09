// Ikony z biblioteki Lucide (spójny, dopracowany zestaw — bez emoji, bez „samoróbek").
import {
  RadioTower, Car, Landmark, Scale, Lock, ShieldCheck,
  FileSignature, Clock, Handshake, MapPin, Phone, Briefcase,
  type LucideIcon,
} from "lucide-react";

const map = {
  tower: RadioTower,      // słupy / linie przesyłowe
  car: Car,              // wypadki komunikacyjne
  bank: Landmark,        // kredyty / sankcja
  scale: Scale,          // radcy prawni
  lock: Lock,            // zero opłat / bezpieczeństwo
  shield: ShieldCheck,   // RODO
  doc: FileSignature,    // umowa na piśmie
  clock: Clock,          // odpowiedź w 24h
  handshake: Handshake,  // jeden opiekun
  pin: MapPin,           // lokalizacja
  phone: Phone,          // telefon
  briefcase: Briefcase,  // kariera
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof map;

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const C = map[name];
  return C ? <C className={className} strokeWidth={1.75} absoluteStrokeWidth /> : null;
}

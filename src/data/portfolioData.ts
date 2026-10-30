import {
  AlarmSmoke,
  Building2,
  Clock,
  Droplets,
  Flame,
  Gauge,
  Megaphone,
  Route,
  ShieldCheck,
  Siren,
  Users,
  Warehouse,
  Waves,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export const appTitle = 'Sombir - Safety Command Center';

export const profile = {
  name: 'Sombir',
  role: 'Fire Safety Officer',
  headline: 'Fire Safety Officer & Emergency Response Specialist',
  currentSite: 'Flipkart Mega Logistics Hub',
  location: 'Patli, Gurugram',
  tagline:
    'Keeping large-scale logistics facilities protected, drilled, and ready for the moment it matters.',
  availability: 'Available for fire safety audits, drills, and site readiness reviews',
  aboutParagraphs: [
    'My work centres on the systems that stand between a small incident and a major loss: fire hydrant networks, sprinkler installations, fire alarm control panels, and hose reels. I check them on a fixed schedule, log what I find, and close gaps before they become risks.',
    'Systems alone are not enough. I run mock drills, train staff on evacuation routes and assembly points, and review each drill with the team so the next one is faster and cleaner. Clear procedures and practised people are what turn equipment into real protection.',
    'My background in an emergency service environment shapes how I plan. I treat every site as if the response will be timed, and I build documentation, access routes, and communication plans around that assumption.',
  ],
};

export const focusAreasStatus = [
  { label: 'Hydrant Network', status: 'Inspected' },
  { label: 'Sprinkler Zones', status: 'Covered' },
  { label: 'Alarm Panels', status: 'Monitored' },
  { label: 'Evacuation Routes', status: 'Marked' },
];

export const contact = {
  phone: '+91 9518464534',
  phoneHref: 'tel:+919518464534',
  email: 'sombirjangra2000@gmail.com',
  emailHref: 'mailto:sombirjangra2000@gmail.com',
  location: 'Patli, Gurugram, Haryana',
  whatsappNumber: '919518464534',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Operations', href: '#operations' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export interface AboutPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutPillars: AboutPillar[] = [
  {
    icon: ShieldCheck,
    title: 'Protection First',
    description: 'Every system is inspected on a schedule and logged, not just checked when someone remembers.',
  },
  {
    icon: Users,
    title: 'Trained People',
    description: 'Staff know their routes, their roles, and their assembly point before an alarm ever sounds.',
  },
  {
    icon: Clock,
    title: 'Response Ready',
    description: 'Plans are timed in drills so that real emergencies are handled with practised speed.',
  },
];

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  size: 'wide' | 'default';
}

export const bentoItems: BentoItem[] = [
  {
    id: 'hydrants',
    title: 'Fire Hydrant Systems',
    description:
      'Inspection of yard and building hydrant networks, pressure and flow checks, valve and coupling condition, and clear access around every outlet.',
    icon: Droplets,
    size: 'wide',
  },
  {
    id: 'sprinklers',
    title: 'Sprinklers',
    description:
      'Coverage and head condition checks, clearance from stock, and follow-up on any obstruction that could affect spray pattern.',
    icon: ShieldCheck,
    size: 'default',
  },
  {
    id: 'alarms',
    title: 'Fire Alarm Control Panels',
    description:
      'Daily panel status review, zone fault tracking, detector testing, and coordination with the site control room.',
    icon: AlarmSmoke,
    size: 'default',
  },
  {
    id: 'hose-reels',
    title: 'Hose Reels',
    description:
      'Reel condition, hose integrity, nozzle function, and quick-access placement along escape and loading routes.',
    icon: Waves,
    size: 'default',
  },
  {
    id: 'drills',
    title: 'Mock Drills',
    description:
      'Planned and surprise drills across shifts, timed response measurement, and structured debriefs with every team lead.',
    icon: Siren,
    size: 'wide',
  },
  {
    id: 'evacuation',
    title: 'Evacuation Planning',
    description:
      'Route mapping, assembly point design, marshal roles, and headcount procedures sized to peak shift occupancy.',
    icon: Route,
    size: 'default',
  },
];

export interface TimelineEntry {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  icon: LucideIcon;
  summary: string;
  highlights: string[];
}

export const timeline: TimelineEntry[] = [
  {
    id: 'flipkart',
    role: 'Fire Safety Officer',
    organization: 'Flipkart Mega Logistics Hub',
    location: 'Patli, Gurugram',
    period: 'Current Role',
    icon: Warehouse,
    summary:
      'Responsible for fire safety across a large, high-throughput logistics hub with multiple warehouse blocks, mezzanine storage, and continuous shift operations.',
    highlights: [
      'Inspect and maintain hydrant, sprinkler, and fire alarm systems on a scheduled routine',
      'Run mock drills across shifts and lead post-drill reviews with site teams',
      'Maintain evacuation routes, assembly points, and emergency contact registers',
      'Coordinate with site leadership on corrective actions for fire safety observations',
    ],
  },
  {
    id: 'alwar',
    role: 'Fire Service Training',
    organization: 'Alwar Fire Station',
    location: 'Alwar, Rajasthan',
    period: 'Previous Experience',
    icon: Building2,
    summary:
      'Hands-on fire service experience in an operational station, covering emergency call readiness, equipment handling, and disciplined response procedures.',
    highlights: [
      'Practised emergency call response and turnout procedures',
      'Handled fire-fighting equipment, hoses, and water supply setups',
      'Followed station drill schedules and equipment checks',
    ],
  },
];

export interface EquipmentItem {
  name: string;
  detail: string;
}

export interface EquipmentCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  items: EquipmentItem[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: 'hydrants',
    label: 'Hydrants',
    icon: Droplets,
    items: [
      { name: 'Yard Hydrant Network', detail: 'Ring main coverage with marked outlets and clear access' },
      { name: 'Building Hydrant Valves', detail: 'Internal valve checks, hose connections, and pressure tests' },
      { name: 'Hydrant Couplings & Caps', detail: 'Thread condition and cap presence for every outlet' },
      { name: 'Fire Brigade Inlets', detail: 'Inlet visibility, labelling, and obstruction-free approach' },
    ],
  },
  {
    id: 'sprinklers',
    label: 'Sprinklers',
    icon: ShieldCheck,
    items: [
      { name: 'Wet Pipe Sprinkler Zones', detail: 'Zone valve status and head coverage per warehouse bay' },
      { name: 'Sprinkler Heads', detail: 'Visual condition, paint and damage checks, clearance from stock' },
      { name: 'Flow Switches & Alarms', detail: 'Water flow alarm testing and panel signal verification' },
      { name: 'Mezzanine Coverage', detail: 'Protection review for raised storage and racking levels' },
    ],
  },
  {
    id: 'pump-houses',
    label: 'Pump Houses',
    icon: Gauge,
    items: [
      { name: 'Jockey Pump', detail: 'Pressure maintenance and auto-start behaviour' },
      { name: 'Main Fire Pump', detail: 'Weekly run checks, pressure readings, and log entries' },
      { name: 'Diesel Backup Pump', detail: 'Fuel level, battery condition, and start-up testing' },
      { name: 'Pump Controller Panel', detail: 'Mode selector, fault indicators, and manual override check' },
    ],
  },
];

export interface ResponseStep {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const responseProtocol: ResponseStep[] = [
  {
    id: 'detect',
    title: 'Detect',
    description: 'Alarm panel or detector triggers. Control room confirms the zone on the panel.',
    icon: AlarmSmoke,
  },
  {
    id: 'alert',
    title: 'Alert',
    description: 'Site-wide alarm sounds and the emergency call goes out to response teams.',
    icon: Megaphone,
  },
  {
    id: 'isolate',
    title: 'Isolate',
    description: 'Power and process lines in the affected zone are shut down as planned.',
    icon: Wrench,
  },
  {
    id: 'respond',
    title: 'Respond',
    description: 'Trained teams use hydrants, hose reels, and sprinklers while the brigade is called in.',
    icon: Flame,
  },
  {
    id: 'evacuate',
    title: 'Evacuate',
    description: 'Marshals guide people along marked routes to assembly points for headcount.',
    icon: Route,
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
}

export const certifications: Certification[] = [
  { id: 'fire-safety', title: 'Fire Safety Officer Certification' },
  { id: 'hydrant-systems', title: 'Fire Hydrant & Sprinkler Systems Training' },
  { id: 'fire-alarm', title: 'Fire Alarm Control Panel Operation' },
  { id: 'first-aid', title: 'Emergency First Aid & CPR' },
  { id: 'evacuation', title: 'Evacuation Planning & Drill Leadership' },
];

export interface SafetyStat {
  value: string;
  label: string;
}

export const safetyStats: SafetyStat[] = [
  { value: String(bentoItems.length).padStart(2, '0'), label: 'Core Fire Systems' },
  { value: String(responseProtocol.length).padStart(2, '0'), label: 'Response Stages' },
  { value: String(equipmentCategories.length).padStart(2, '0'), label: 'Equipment Groups' },
  { value: String(certifications.length).padStart(2, '0'), label: 'Certifications' },
];

import {
  Award,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Download,
  FileQuestion,
  Files,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Link2,
  MessageCircleQuestion,
  PencilLine,
  PlaySquare,
  SearchCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserCheck,
  UsersRound,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/config/siteConfig";

const icons: Record<IconName, LucideIcon> = {
  brain: BrainCircuit,
  files: Files,
  users: UsersRound,
  video: Video,
  target: Target,
  calendar: CalendarDays,
  graduation: GraduationCap,
  award: Award,
  building: Building2,
  book: BookOpen,
  badge: BadgeCheck,
  star: Star,
  play: PlaySquare,
  download: Download,
  clipboard: ClipboardCheck,
  message: MessageCircleQuestion,
  userCheck: UserCheck,
  search: SearchCheck,
  heart: HeartHandshake,
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  link: Link2,
  pencil: PencilLine,
  trophy: Trophy,
};

interface SiteIconProps {
  readonly name: IconName;
  readonly className?: string;
  readonly strokeWidth?: number;
}

export function SiteIcon({
  name,
  className,
  strokeWidth = 1.8,
}: SiteIconProps) {
  const Icon = icons[name] ?? FileQuestion;
  return (
    <Icon aria-hidden="true" className={className} strokeWidth={strokeWidth} />
  );
}

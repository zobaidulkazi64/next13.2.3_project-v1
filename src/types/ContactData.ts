// types.ts

export interface ContactSection {
  title: string;
  description: string;
  bText: string;
  href: string;
}

export interface ScheduleSection {
  schedule_title: string;
  description: string;
  bText: string;
  href: string;
}

export interface ContactSectionContainerData {
  touch: ContactSection;
  schedule: ScheduleSection;
}

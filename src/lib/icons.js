import {
  Activity,
  BatteryCharging,
  Cable,
  CircuitBoard,
  Cpu,
  Database,
  Factory,
  Gauge,
  House,
  Landmark,
  Layers,
  Network,
  ShieldCheck,
  Sun,
  Users,
  UtilityPole,
  Workflow,
  Zap,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6'

/** Content refers to icons by key so it can be stored as plain data in a CMS. */
export const icons = {
  activity: Activity,
  battery: BatteryCharging,
  cable: Cable,
  circuit: CircuitBoard,
  cpu: Cpu,
  database: Database,
  factory: Factory,
  gauge: Gauge,
  home: House,
  landmark: Landmark,
  layers: Layers,
  network: Network,
  shield: ShieldCheck,
  sun: Sun,
  tower: UtilityPole,
  users: Users,
  workflow: Workflow,
  zap: Zap,
}

export const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
  youtube: FaYoutube,
}

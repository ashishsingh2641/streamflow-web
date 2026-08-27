import {
  Button,
  Card,
  Image,
  NavLink,
  Stack,
  Progress,
  Text,
} from "@mantine/core";
import logo from "@/assets/streamflow-logo.svg";
import {
  HouseIcon,
  Video,
  Radio,
  CloudUpload,
  ListVideo,
  ChartNoAxesCombined,
  MessageSquare,
  BadgeDollarSign,
  Users,
  Settings,
} from "lucide-react";
import "../styles/SideNav.scss";

export default function SideNav() {
  const navigation = [
  { label: "Dashboard", path: "/dashboard", icon: HouseIcon },
  { label: "Videos", path: "/videos", icon: Video },
  { label: "Live Streams", path: "/live", icon: Radio },
  { label: "Categories", path: "/categories", icon: CloudUpload },
  { label: "Playlists", path: "/playlists", icon: ListVideo },
  { label: "Analytics", path: "/analytics", icon: ChartNoAxesCombined },
  { label: "Comments", path: "/comments", icon: MessageSquare },
  { label: "Monetization", path: "/monetization", icon: BadgeDollarSign },
  { label: "Users", path: "/users", icon: Users },
  { label: "Settings", path: "/settings", icon: Settings },
];
  return (
    <Stack h="100%" w="100%" p="md" className="dark-bg side_nav">
      <Image src={logo} alt="Streamflow" fit="contain" />
      <Stack flex={1} justify="space-between">
        <Stack gap="xs">
          {navigation.map((item) => {
            return (
            <NavLink
              key={item.label}
              href={item.path}
              label={item.label}
              leftSection={<item.icon size={24} />}
            />
          )
          })}
         
        </Stack>

        <Card shadow="sm" padding="lg" withBorder className="card-dark">
          <Card.Section>
            <Text className="mb-4">Storage Used</Text>
            <Progress value={50} color="#8B4DFF" />
          </Card.Section>
         <Button
            fullWidth
            mt="md"
            variant="gradient"
            gradient={{ from: "#6927E8", to: "#894CFF", deg: 90 }}
          >
            Upgrade Plan
          </Button>
        </Card>
      </Stack>
    </Stack>
  );
}

import { Button, Card, Image, NavLink, Stack, Progress, Text } from "@mantine/core";
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
  return (
    <Stack h="100%" w="100%" p="md" className="dark-bg side_nav">
      <Image src={logo} alt="Streamflow" fit="contain" />
      <Stack flex={1} justify="space-between">
        <Stack gap="xs">
              <NavLink
                href="#required-for-focus"
                label="Dashboard"
                leftSection={<HouseIcon size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Videos"
                leftSection={<Video size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Live Streams"
                leftSection={<Radio size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Categories"
                leftSection={<CloudUpload size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Playlists"
                leftSection={<ListVideo size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Analytics"
                leftSection={<ChartNoAxesCombined size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Comments"
                leftSection={<MessageSquare size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Monetization"
                leftSection={<BadgeDollarSign size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="User"
                leftSection={<Users size={24} />}
              />
              <NavLink
                href="#required-for-focus"
                label="Settings"
                leftSection={<Settings size={24} />}
              />
        </Stack>

          <Card shadow="sm" padding="lg"  withBorder className="card-dark">
            <Card.Section>
              <Text className="mb-4">Storage Used</Text>
              <Progress value={50} />
            </Card.Section>
            <Button color="#aa3bff" fullWidth size="lg" mt="md" radius="md">
              Upgrade Plan
            </Button>
          </Card>
      </Stack>
    </Stack>
  );
}

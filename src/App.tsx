import {
  Badge,
  Button,
  Card,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { ArrowRight, Bell, LayoutDashboard, Sparkles } from 'lucide-react'

function App() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <Group justify="space-between" align="center">
          <Stack gap={4}>
            <Badge variant="light" color="violet" size="lg" radius="sm">
              StreamFlow
            </Badge>
            <Title order={1}>Modern operations dashboard</Title>
          </Stack>

          <Button rightSection={<ArrowRight size={16} />} variant="filled">
            Launch workspace
          </Button>
        </Group>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          <Card withBorder radius="md" p="lg">
            <Stack gap="sm">
              <ThemeIcon color="violet" variant="light" size="lg">
                <LayoutDashboard size={18} />
              </ThemeIcon>
              <Text fw={600}>Workspace overview</Text>
              <Text c="dimmed" size="sm">
                Track team activity, pipelines, and operational health from one place.
              </Text>
            </Stack>
          </Card>

          <Card withBorder radius="md" p="lg">
            <Stack gap="sm">
              <ThemeIcon color="grape" variant="light" size="lg">
                <Sparkles size={18} />
              </ThemeIcon>
              <Text fw={600}>Automation</Text>
              <Text c="dimmed" size="sm">
                Trigger workflows and keep releases aligned with real-time confidence.
              </Text>
            </Stack>
          </Card>

          <Card withBorder radius="md" p="lg">
            <Stack gap="sm">
              <ThemeIcon color="indigo" variant="light" size="lg">
                <Bell size={18} />
              </ThemeIcon>
              <Text fw={600}>Notifications</Text>
              <Text c="dimmed" size="sm">
                Stay on top of incidents, approvals, and deployment milestones.
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>

        <Group>
          <Button variant="filled" size="lg">
            Primary action
          </Button>
          <Button variant="default" size="lg">
            Secondary action
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}

export default App

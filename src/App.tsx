import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "@/components/SideNav";

function App() {
  const [opened] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 0 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Navbar>
        <SideNav />
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default App;

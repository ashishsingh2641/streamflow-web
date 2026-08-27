import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import SideNav from "@/components/SideNav";

function App() {
  const [opened] = useDisclosure();

  return (
    <AppShell
      navbar={{
        width: 260,
        breakpoint: "sm",
      }}
      padding="md"
    >
      <AppShell.Navbar>
        <SideNav />
      </AppShell.Navbar>

      <AppShell.Main>
        Main
      </AppShell.Main>
    </AppShell>
  );
}

export default App;

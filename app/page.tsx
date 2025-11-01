import { Container } from "@radix-ui/themes";
import TaskPage from "./components/task/Page";
import { TaskPageProps } from "./components/task/types";

export default function Home(props: TaskPageProps) {
  return (
    <Container size="4" align="center" p="6">
      <TaskPage {...props} />
    </Container>
  );
}

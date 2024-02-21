import { CodeHighlight } from "@mantine/code-highlight";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Config() {
  const {
    data: {
      data: { yaml },
    },
  } = useSuspenseQuery<{ data: { yaml: string } }>({
    queryKey: ["config"],
    queryFn: () => {
      return fetch("/api/v1/status/config").then((res) => res.json());
    },
  });
  return <CodeHighlight code={yaml} language="yaml" miw="30vw" />;
}
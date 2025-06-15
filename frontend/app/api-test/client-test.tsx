"use client";

import { useApi } from "@/hooks/use-apis";
import { useQuery } from "@tanstack/react-query";

export default function ClientTest() {
  const api = useApi();

  const { data, error, isLoading } = useQuery({
    queryKey: ["user-test"],
    queryFn: () => api.getUserTest(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h2>Client component test result</h2>
      <pre>{data}</pre>
    </div>
  );
}

import * as api from "@/lib/api";
import ClientTest from "./client-test";

export default async function ApiTestPage() {
  const apiResult = await api.getUserTest();

  return (
    <div className="p-8">
      <h1>Backend API Test</h1>

      <h2>Server component test result</h2>
      <pre>{apiResult}</pre>
      <ClientTest />
    </div>
  );
}

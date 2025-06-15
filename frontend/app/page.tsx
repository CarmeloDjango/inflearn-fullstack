import { auth } from "@/auth";

import { signOut } from "@/auth";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <p>이메일: {session?.user?.email}</p>
      {session?.user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">로그아웃</button>
        </form>
      ) : (
        <Link href="/signin">로그인</Link>
      )}
    </div>
  );
}

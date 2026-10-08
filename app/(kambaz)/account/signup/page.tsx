import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h3 className="mb-3 text-2xl font-semibold">Sign up</h3>
      <input
        placeholder="username"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue="ada"
      />
      <br />
      <input
        placeholder="password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
        defaultValue="123"
      />
      <br />
      <input
        placeholder="verify password"
        type="password"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <Link href="/account/profile" className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline">
        Sign up
      </Link>
      <Link href="/account/signin" className="block w-full rounded bg-blue-400 px-3 py-2 text-center text-white no-underline">
        Sign in
      </Link>
    </div>
  );
}
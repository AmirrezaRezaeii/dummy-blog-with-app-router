import AuthForm from "@/components/auth-form";



export default function LoginPage({ searchParams }) {

  const formMode = searchParams.mode || "login"

  return (
    <AuthForm mode={formMode} />
  );
}

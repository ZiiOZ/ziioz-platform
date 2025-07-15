const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    setError(error.message);
  } else {
    if (!data.session) {
      // Confirmation email sent
      alert("Please check your email to confirm your signup.");
    } else {
      // Auto-confirmed
      router.push("/login");
    }
  }

  setLoading(false);
};

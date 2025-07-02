const handleOnboard = async () => {
  setLoading(true);
  const res = await fetch('/api/ziipay/onboard', { method: 'POST' });

  if (!res.ok) {
    setLoading(false);
    alert("Error starting onboarding.");
    return;
  }

  const data = await res.json();
  setLoading(false);

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Error starting onboarding.");
  }
};

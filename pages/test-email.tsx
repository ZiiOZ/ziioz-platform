const handleSendEmail = async () => {
  const res = await fetch("/api/send-welcome", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "assist.ziioz@gmail.com" }) // Or your test email
  });

  if (res.ok) {
    setStatus("success");
  } else {
    setStatus("error");
  }
};

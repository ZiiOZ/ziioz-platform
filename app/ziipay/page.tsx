import ZiiPayOnboardButton from "@/components/ziipay/ZiiPayOnboardButton";
import ZiiPayPaymentButton from "@/components/ziipay/ZiiPayPaymentButton";


export default function ZiiPayPage() {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-xl font-bold">ZiiPay Dashboard</h1>

      <ZiiPayOnboardButton />

      {/* Example: paying $20 to a connected account */}
      <ZiiPayPaymentButton
        amount={2000} // $20.00 in cents
        connectedAccountId="acct_xxxxxxxxxxxxx"
      />
    </div>
  );
}

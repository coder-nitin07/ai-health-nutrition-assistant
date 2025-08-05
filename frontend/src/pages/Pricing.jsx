
const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F0F0F0] py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Compare Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Free Plan */}
        <div className="bg-[#1E1E1E] border border-[#2C2C2C] rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <ul className="space-y-3 text-[#B0B0B0]">
            <li>✅ Daily AI food analysis </li>
            <li>✅ Daily health suggestion</li>
            <li>✅ Log once per day</li>
            <li>✅ Last 3 logs history available</li>
            <li>✅ Streak tracking</li>
            <li>❌ Edit meal logs</li>
            <li>❌ Extended history access</li>
            <li>❌ Advanced AI reports</li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="bg-[#1E1E1E] border border-[#00C896] rounded-2xl p-8 shadow-md relative">
          <h2 className="text-2xl font-semibold mb-4 text-[#00C896]">Pro <span className="text-sm text-[#B0B0B0]">(Coming Soon)</span></h2>
          <ul className="space-y-3 text-[#B0B0B0]">
            <li>✅ Everything in Free Tier</li>
            <li>✅ Edit past meal logs</li>
            <li>✅ Log multiple meals per day</li>
            <li>✅ Full history tracking</li>
            <li>✅ Advanced personalized AI health reports</li>
            <li>✅ Weekly summary insights</li>
            <li>✅ Priority support</li>
          </ul>
          <button className="mt-6 w-full py-3 rounded-xl text-lg font-medium bg-[#00E0A1] hover:bg-[#00C896] text-black transition shadow-lg animate-pulse cursor-not-allowed" disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
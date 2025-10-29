import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const faqs = [
    {
      category: 'Orders',
      questions: [
        {
          q: 'How do I track my order?',
          a: 'You can track your order by logging into your account and visiting the "My Orders" section. Each order has a "Track Order" button that shows real-time delivery status.',
        },
        {
          q: 'Can I cancel my order?',
          a: 'Yes, you can cancel your order before it is shipped. Go to "My Orders", select the order you want to cancel, and click on "Cancel Order".',
        },
        {
          q: 'How long does delivery take?',
          a: 'Delivery typically takes 3-7 business days depending on your location. You can see the estimated delivery date on the product page and during checkout.',
        },
      ],
    },
    {
      category: 'Payment',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept Credit/Debit Cards, UPI, Net Banking, Wallets, and Cash on Delivery (COD) for eligible orders.',
        },
        {
          q: 'Is it safe to use my credit card?',
          a: 'Yes, all transactions are encrypted and secure. We use industry-standard SSL encryption to protect your payment information.',
        },
        {
          q: 'Can I pay cash on delivery?',
          a: 'Yes, Cash on Delivery is available for orders below ₹50,000. The option will be shown at checkout if available for your location.',
        },
      ],
    },
    {
      category: 'Returns & Refunds',
      questions: [
        {
          q: 'What is your return policy?',
          a: 'We offer a 7-day return policy on most products. The product must be unused and in original packaging. Some categories like electronics have specific return conditions.',
        },
        {
          q: 'How do I return a product?',
          a: 'Go to "My Orders", select the order, and click "Return". Choose the reason for return and schedule a pickup. Our delivery partner will collect the item from your address.',
        },
        {
          q: 'When will I get my refund?',
          a: 'Refunds are processed within 7-10 business days after we receive the returned item. The amount will be credited to your original payment method.',
        },
      ],
    },
    {
      category: 'Account',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on "Login" in the header and select "Create Account". Enter your email and phone number to get started.',
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click on "Forgot Password" on the login page. Enter your registered email or phone number and we\'ll send you a reset link.',
        },
        {
          q: 'How do I update my profile information?',
          a: 'Log in to your account and go to "My Profile". You can edit your personal information, email, phone number, and saved addresses.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
            
            <div className="space-y-8">
              {faqs.map((category, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-4 text-primary">{category.category}</h2>
                  <div className="space-y-6">
                    {category.questions.map((item, qIdx) => (
                      <div key={qIdx} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                        <p className="text-gray-700">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary bg-opacity-10 rounded-lg p-6 mt-8 text-center">
              <h3 className="font-bold text-lg mb-2">Still have questions?</h3>
              <p className="text-gray-700 mb-4">
                Can't find the answer you're looking for? Please contact our customer support team.
              </p>
              <a href="/contact" className="btn-primary inline-block px-8 py-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

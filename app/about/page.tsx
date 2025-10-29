import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-sm p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg">
                Welcome to Flipkart Clone, your number one source for all things shopping. 
                We're dedicated to giving you the very best of products, with a focus on 
                quality, customer service, and uniqueness.
              </p>

              <p>
                Founded in 2024, Flipkart Clone has come a long way from its beginnings. 
                When we first started out, our passion for providing the best shopping 
                experience drove us to create this platform, and gave us the impetus to 
                turn hard work and inspiration into a booming online store.
              </p>

              <p>
                We now serve customers all over India, and are thrilled to be a part of 
                the e-commerce wing of the shopping industry.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to provide a seamless online shopping experience with a 
                wide range of products at competitive prices, backed by excellent customer 
                service and fast delivery.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Customer satisfaction is our top priority</li>
                <li>Quality products at affordable prices</li>
                <li>Transparency in all our dealings</li>
                <li>Innovation and continuous improvement</li>
                <li>Environmental and social responsibility</li>
              </ul>

              <p className="mt-8">
                We hope you enjoy our products as much as we enjoy offering them to you. 
                If you have any questions or comments, please don't hesitate to contact us.
              </p>

              <p className="font-semibold">
                Sincerely,<br />
                The Flipkart Clone Team
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

# Flipkart Clone - E-commerce Platform

A fully functional e-commerce platform built with Next.js, TypeScript, and Tailwind CSS, featuring a modern UI/UX similar to Flipkart.

## 🚀 Features

### Homepage
- **Dynamic Hero Carousel** - Rotating banners with promotional offers and auto-play
- **Product Categories** - Icon-based category grid with smooth hover effects
- **Deals of the Day** - Limited-time offers with live countdown timer
- **Featured Products** - Tabbed sections for Trending, Top Offers, and Best Sellers
- **Responsive Design** - Mobile-first approach with breakpoints for all devices

### Product Listing
- **Advanced Filters** - Filter by category, price range, brand, rating, discount, and availability
- **Sort Options** - Sort by relevance, price, popularity, rating, and date
- **Responsive Grid** - Dynamic product grid (1-4 columns based on screen size)
- **Pagination** - Page navigation with customizable items per page

### Product Details
- **Image Gallery** - Multiple product images with thumbnail selector and zoom capability
- **Comprehensive Info** - Price, discount, rating, reviews, stock status, and specifications
- **Action Buttons** - Add to Cart, Buy Now, Add to Wishlist, and Share
- **Tabbed Content** - Description, Specifications, and Reviews sections
- **Similar Products** - Related product recommendations

### Shopping Cart
- **Cart Management** - Add, remove, and update item quantities
- **Price Summary** - Detailed breakdown with discounts and delivery charges
- **Coupon System** - Apply promotional codes for additional discounts
- **Empty State** - User-friendly message when cart is empty

### Checkout
- **Multi-Step Process** - 4-step checkout (Login, Address, Summary, Payment)
- **Address Form** - Complete delivery address with validation
- **Payment Methods** - Credit/Debit Card, UPI, Net Banking, Cash on Delivery
- **Progress Indicator** - Visual tracking of checkout steps

### User Account
- **Profile Management** - Edit personal information and change password
- **Order History** - View past orders with status and tracking
- **Wishlist** - Save products for later purchase
- **Saved Addresses** - Manage multiple delivery addresses

### Search & Navigation
- **Search Functionality** - Find products by name, brand, or category
- **Recent Searches** - Quick access to previous searches
- **Trending Searches** - Popular search terms
- **Category Navigation** - Quick links to product categories

### Additional Pages
- **About Us** - Company information and mission
- **Contact Us** - Contact form and business information
- **FAQ** - Frequently asked questions organized by category
- **Footer Links** - Policy pages and social media integration

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **State Management:** React Context API
- **Icons & Images:** SVG icons, placeholder images
- **Build Tool:** Turbopack

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/SachinMeenaSipl/Flipkart-clone-web.git
cd Flipkart-clone-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 📁 Project Structure

```
flipkart-clone-web/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── account/             # User account pages
│   │   ├── orders/          # Order history
│   │   ├── profile/         # User profile
│   │   └── wishlist/        # Wishlist
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout process
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── product/[id]/        # Product detail page
│   ├── products/            # Product listing
│   ├── search/              # Search results
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── DealsSection.tsx     # Deals with countdown
│   ├── FeaturedProducts.tsx # Featured products tabs
│   ├── Filters.tsx          # Product filters
│   ├── Footer.tsx           # Footer component
│   ├── Header.tsx           # Header with navigation
│   ├── HeroCarousel.tsx     # Banner carousel
│   ├── ProductCard.tsx      # Product card
│   └── ProductCategories.tsx # Category grid
├── data/                    # Mock data
│   └── products.ts          # Product data and reviews
├── utils/                   # Utility functions
│   └── CartContext.tsx      # Cart state management
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies

```

## 🎨 Design System

### Colors
- **Primary:** `#2874f0` (Flipkart Blue)
- **Secondary:** `#ffc400` (Yellow/Gold for offers)
- **Success:** `#388e3c` (Green for discounts)
- **Background:** `#f1f3f6` (Light gray)

### Typography
- **Font Family:** System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Base Size:** 14px minimum for readability

### Responsive Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run Next.js linter

## 📊 Sample Data

The application includes sample data for:
- 12 products across multiple categories (Electronics, Fashion, Home, Books)
- Product reviews and ratings
- Mock order history
- Banner promotions

## 🌟 Key Functionalities

### Cart Management
- Add/remove items
- Update quantities
- Calculate totals dynamically
- Apply promo codes
- Persist cart state

### Search & Filter
- Real-time search results
- Multiple filter combinations
- Sort functionality
- Filter count display
- Clear filters option

### Order Management
- Order placement flow
- Order tracking simulation
- Order history
- Invoice display
- Status tracking

### Wishlist
- Add/remove products
- Move to cart functionality
- Persistent storage

## 🎯 Performance Optimization

- Image lazy loading
- Code splitting with Next.js
- Efficient re-renders
- Turbopack for fast builds
- Static page generation where possible

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Sachin Meena**

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

For support, email support@flipkartclone.com or visit the Contact Us page.

---

**Note:** This is a demo project for educational purposes. It is not affiliated with or endorsed by Flipkart.
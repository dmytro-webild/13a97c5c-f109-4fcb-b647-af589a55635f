"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Award, Truck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="medium"
        background="fluid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="BevMax"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Your Premier Destination for Premium Beverages"
      description="Experience curated selections of the finest wines, spirits, and craft brews. BevMax brings convenience and quality to your doorstep."
      kpis={[
        {
          value: "500+",
          label: "Premium Labels",
        },
        {
          value: "15K+",
          label: "Happy Shoppers",
        },
        {
          value: "24/7",
          label: "Customer Support",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Shopping",
          href: "#products",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-focused-woman-is-choosing-right-wine-customers-dark-wine-cellar_613910-17334.jpg"
      imageAlt="BevMax Store Interior"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/cheerful-blonde-mature-woman-sitting-stool-holding-red-wine-glass-hand_23-2148043541.jpg",
          alt: "Happy shopper 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-drinking-wine_23-2148060456.jpg",
          alt: "Happy shopper 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-women-with-delicious-food_23-2150312376.jpg",
          alt: "Happy shopper 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-smiling-brunette-bearded-businessman-with-glass-red-wine-happily-talking-cellphone-restaurant-outdoor_574295-1297.jpg",
          alt: "Happy shopper 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-friends-playing-beer-pong-together-party_23-2149431346.jpg",
          alt: "Happy shopper 5",
        },
      ]}
      avatarText="Join 15,000+ satisfied beverage enthusiasts"
      marqueeItems={[
        {
          type: "text",
          text: "Curated Selection",
        },
        {
          type: "text",
          text: "Fast Local Delivery",
        },
        {
          type: "text",
          text: "Certified Expertise",
        },
        {
          type: "text",
          text: "Premium Quality",
        },
        {
          type: "text",
          text: "Sustainable Sourcing",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Decades of Beverage Expertise"
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Curated Collections",
          description: "Hand-picked wines and spirits.",
          tag: "Quality",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-shoppong-supermarket_1157-33695.jpg",
        },
        {
          id: "f2",
          title: "Rapid Delivery",
          description: "Speedy dispatch to your home.",
          tag: "Fast",
          imageSrc: "http://img.b2bpic.net/free-photo/collection-fresh-drinks_23-2148606442.jpg",
        },
        {
          id: "f3",
          title: "Expert Knowledge",
          description: "Our staff are true connoisseurs.",
          tag: "Expert",
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-fruits-flavor-drinks_23-2148606432.jpg",
        },
      ]}
      title="Why Choose BevMax"
      description="We blend convenience with an unparalleled selection of local and global beverage products."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Vintage Merlot 2018",
          price: "$45.00",
          variant: "750ml",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-pomegranate-wine-dark-wall-drink-fruit-alcohol-sour-color-restaurant-juice-wine_179666-17551.jpg",
        },
        {
          id: "p2",
          name: "Craft Berry Soda",
          price: "$12.00",
          variant: "6-Pack",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-soft-drink-can-with-sugar-cubes-straw_23-2148691292.jpg",
        },
        {
          id: "p3",
          name: "Organic Apple Juice",
          price: "$8.50",
          variant: "1L",
          imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-concept-with-juices-copyspace_23-2147803001.jpg",
        },
        {
          id: "p4",
          name: "IPA Craft Brew",
          price: "$18.00",
          variant: "4-Pack",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-bottles-tequila-black-background_181624-59578.jpg",
        },
        {
          id: "p5",
          name: "Sparkling Water Premium",
          price: "$5.00",
          variant: "500ml",
          imageSrc: "http://img.b2bpic.net/free-photo/set-beer-bottles-isolated_93675-132050.jpg",
        },
        {
          id: "p6",
          name: "Reserve Cabernet",
          price: "$65.00",
          variant: "750ml",
          imageSrc: "http://img.b2bpic.net/free-photo/glass-bar-closeup-old-blank_1203-5006.jpg",
        },
      ]}
      title="Our Best Sellers"
      description="Explore our top-rated beverages this season."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Award,
          title: "Store Locations",
          value: "25+",
        },
        {
          id: "m2",
          icon: Users,
          title: "Annual Customers",
          value: "1M+",
        },
        {
          id: "m3",
          icon: Truck,
          title: "Deliveries Daily",
          value: "5000+",
        },
      ]}
      title="Our Impact"
      description="Serving communities with quality drinks."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Budweiser",
        "Heineken",
        "Coca-Cola",
        "PepsiCo",
        "Diageo",
        "Constellation",
        "AB InBev",
      ]}
      title="Trusted Partners"
      description="We collaborate with the world's best breweries and vineyards."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          title: "Great Selection",
          quote: "Incredible variety of wines.",
          name: "Alice P.",
          role: "Sommelier",
          imageSrc: "http://img.b2bpic.net/free-photo/man-filling-glass-by-wine-from-bottle-near-cheerful-woman-kitchen_23-2148024623.jpg",
        },
        {
          id: "t2",
          title: "Fast Shipping",
          quote: "My order arrived chilled and ready.",
          name: "Bob R.",
          role: "Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-happy-friends-with-drinks_23-2149525559.jpg",
        },
        {
          id: "t3",
          title: "Friendly Service",
          quote: "The staff really know their craft beer.",
          name: "Charlie D.",
          role: "Hobbyist",
          imageSrc: "http://img.b2bpic.net/free-photo/laughing-middle-aged-woman-man-chatting-shopping-holding-paper-bags_1262-12699.jpg",
        },
        {
          id: "t4",
          title: "Perfect Packaging",
          quote: "Everything was wrapped perfectly.",
          name: "Dana S.",
          role: "Event Planner",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-hipster-guy-dressed-denim-shirt-wearing-stylish-glasses_273609-6826.jpg",
        },
        {
          id: "t5",
          title: "My Go-To Shop",
          quote: "Always the best deals on spirits.",
          name: "Ed F.",
          role: "Loyal Shopper",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-checking-product_23-2149148457.jpg",
        },
      ]}
      title="Customer Stories"
      description="Why our customers love the BevMax experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get in Touch"
      title="Need Assistance?"
      description="Our beverage experts are available to help you find exactly what you need."
      buttons={[
        {
          text: "Contact Support",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="BevMax"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Products",
              href: "#products",
            },
            {
              label: "New Arrivals",
              href: "#",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

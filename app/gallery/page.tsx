"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";

const screenshots = {
  client: [
    { name: "Home", src: "/screenshots/client/home.png" },
    { name: "Products", src: "/screenshots/client/products.png" },
    { name: "Product Details", src: "/screenshots/client/product-details.png" },
    { name: "Cart", src: "/screenshots/client/cart.png" },
    { name: "Checkout", src: "/screenshots/client/checkout.png" },
    { name: "Orders", src: "/screenshots/client/orders.png" },
    { name: "Invoices", src: "/screenshots/client/invoices.png" },
    { name: "Chat", src: "/screenshots/client/chat.png" },
    { name: "Wishlist", src: "/screenshots/client/wishlist.png" },
    { name: "Vendor Store", src: "/screenshots/client/vendor-store.png" },
  ],
  vendor: [
    { name: "Products Management", src: "/screenshots/vendor/products-manage.png" },
    { name: "Quotes (Devis)", src: "/screenshots/vendor/devis.png" },
    { name: "Invoices (Factures)", src: "/screenshots/vendor/factures.png" },
    { name: "Admin Management", src: "/screenshots/vendor/admin-management.png" },
    { name: "Bank Transfers", src: "/screenshots/vendor/bank-transfers.png" },
    { name: "Chat", src: "/screenshots/vendor/chat.png" },
  ],
  admin: [
    { name: "Dashboard", src: "/screenshots/admin/admin-dashboard.png" },
    { name: "Users", src: "/screenshots/admin/users.png" },
    { name: "Enterprises", src: "/screenshots/admin/enterprises.png" },
    { name: "Commissions", src: "/screenshots/admin/commissions.png" },
    { name: "Advertisements", src: "/screenshots/admin/ads.png" },
    { name: "Categories", src: "/screenshots/admin/categories.png" },
  ],
};

type Category = "client" | "vendor" | "admin";

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<Category>("client");
  const [lightbox, setLightbox] = useState<{ index: number; images: typeof screenshots.client } | null>(null);

  const openLightbox = (index: number, category: Category) => {
    setLightbox({ index, images: screenshots[category] });
  };

  const closeLightbox = () => setLightbox(null);

  const nextImage = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index + 1) % lightbox.images.length });
    }
  };

  const prevImage = () => {
    if (lightbox) {
      setLightbox({ ...lightbox, index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length });
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 text-sm tracking-wide uppercase"
        >
          <ArrowLeft size={14} strokeWidth={1.5} />
          Back to home
        </Link>

        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted mb-3">
            Gallery
          </p>
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-foreground">
            Screenshots
          </h1>
        </div>

        <div className="flex gap-6 mb-10">
          {(["client", "vendor", "admin"] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm tracking-wide uppercase transition-colors pb-1 ${
                activeTab === tab
                  ? "text-foreground border-b border-foreground"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {screenshots[activeTab].map((img, index) => (
            <button
              key={img.src}
              onClick={() => openLightbox(index, activeTab)}
              className="group bg-surface text-left"
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <p className="px-3 py-2.5 text-xs tracking-wide uppercase text-muted">
                {img.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-muted hover:text-foreground p-2"
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-muted hover:text-foreground p-2"
          >
            <ChevronLeft size={28} strokeWidth={1.5} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-muted hover:text-foreground p-2"
          >
            <ChevronRight size={28} strokeWidth={1.5} />
          </button>

          <div className="max-w-5xl max-h-[85vh] px-20">
            <img
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].name}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-center text-muted text-sm mt-6 tracking-wide uppercase">
              {lightbox.images[lightbox.index].name}
              <span className="text-muted mx-2">/</span>
              {lightbox.index + 1} of {lightbox.images.length}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

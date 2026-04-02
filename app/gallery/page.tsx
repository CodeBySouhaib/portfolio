"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

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
          className="inline-flex items-center gap-2 text-[#737373] hover:text-[#3B82F6] transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="text-4xl font-bold mb-4">
          <span className="text-[#3B82F6] font-mono">&lt;</span>
          Screenshots
          <span className="text-[#3B82F6] font-mono">/&gt;</span>
        </h1>
        <p className="text-[#737373] mb-8">Soukify - Multi-Vendor E-Commerce Platform</p>

        <div className="flex gap-4 mb-8 border-b border-[#262626]">
          {(["client", "vendor", "admin"] as Category[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                activeTab === tab
                  ? "text-[#3B82F6]"
                  : "text-[#737373] hover:text-[#e5e5e5]"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6]" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {screenshots[activeTab].map((img, index) => (
            <button
              key={img.src}
              onClick={() => openLightbox(index, activeTab)}
              className="group relative overflow-hidden rounded-lg border border-[#262626] hover:border-[#3B82F6]/50 transition-colors text-left"
            >
              <img
                src={img.src}
                alt={img.name}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm flex items-center gap-2">
                  View <ArrowRight size={14} />
                </span>
              </div>
              <p className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-white text-sm">
                {img.name}
              </p>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white/70 hover:text-white p-2"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white/70 hover:text-white p-2"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-4xl max-h-[80vh] px-16">
            <img
              src={lightbox.images[lightbox.index].src}
              alt={lightbox.images[lightbox.index].name}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center text-white/70 mt-4">
              {lightbox.images[lightbox.index].name} ({lightbox.index + 1}/{lightbox.images.length})
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
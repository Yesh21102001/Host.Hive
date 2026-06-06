import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import { FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import post1 from "../../Images/host_hive/post_1.png";
import post2 from "../../Images/host_hive/post_2.png";
import post3 from "../../Images/host_hive/post_3.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const observerRef = useRef(null);

  const galleryImages = [
    { id: 1, title: "Host.Hive Project 1", image: post1 },
    { id: 2, title: "Host.Hive Project 2", image: post2 },
    { id: 3, title: "Host.Hive Project 3", image: post3 },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate").forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <div className="gallery-root">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="gallery-hero">
        <div className="hero-grid-bg" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-noise" />
        <div className="gallery-hero-content">
          <span className="eyebrow animate">Gallery</span>
          <h1 className="gallery-hero-title animate">
            Our <span className="gold">Work</span>
          </h1>
          <p className="gallery-hero-desc animate">
            Click on any image to view full screen
          </p>
        </div>
      </section>

      {/* ── GALLERY GRID ────────────────────────────── */}
      <section className="gallery-section">
        <div className="section-inner">
          <div className="gallery-grid">
            {galleryImages.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item animate"
                style={{ "--delay": `${index * 0.05}s` }}
                onClick={() => openImage(index)}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span className="view-text">Click to view <FaArrowRight /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ──────────────────────────── */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeImage}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="lightbox-close" onClick={closeImage}>
              <FaTimes />
            </button>

            {/* Image */}
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />

            {/* Title */}
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{currentIndex + 1} / {galleryImages.length}</p>
            </div>

            {/* Navigation */}
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <FaChevronRight />
            </button>

            {/* Keyboard Hint */}
            <div className="lightbox-hint">
              Use arrow keys to navigate • ESC to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

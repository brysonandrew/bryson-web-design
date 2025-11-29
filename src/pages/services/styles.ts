import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ServicesStylesRoot = styled(motion.div)`
  .services-inner {
    margin-left: auto;
    margin-right: auto;
  }

  .services-header {
    margin-bottom: 2.5rem;
  }

  .services-header h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  .services-header p {
    color: #666666;
    line-height: 1.6;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    row-gap: 1.5rem;
    column-gap: 1.5rem;
  }

  .service-card {
    background-color: #0c0c0f;
    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgba(255, 255, 255, 0.08);
    border-right-color: rgba(255, 255, 255, 0.08);
    border-bottom-color: rgba(255, 255, 255, 0.08);
    border-left-color: rgba(255, 255, 255, 0.08);
    border-radius: 1rem;
    padding-top: 1.5rem;
    padding-right: 1.4rem;
    padding-bottom: 1.5rem;
    padding-left: 1.4rem;
    text-align: left;
    cursor: pointer;
    color: #f5f5f5;
    transition-property: box-shadow, border-color, transform;
    transition-duration: 0.18s;
    transition-timing-function: ease;
  }

  .service-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.45rem;
  }

  .service-card p {
    font-size: 0.9rem;
    color: #b8b8c7;
    line-height: 1.5;
    margin-bottom: 0.9rem;
  }

  .service-cta {
    font-size: 0.85rem;
    font-weight: 500;
    opacity: 0.9;
  }

  .service-card:hover {
    box-shadow: 0px 18px 45px rgba(0, 0, 0, 0.6);
    border-top-color: rgba(255, 255, 255, 0.18);
    border-right-color: rgba(255, 255, 255, 0.18);
    border-bottom-color: rgba(255, 255, 255, 0.18);
    border-left-color: rgba(255, 255, 255, 0.18);
  }

  /* Fullscreen overlay */
  .services-modal-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 50;
    display: flex;
    align-items: top;
    justify-content: center;
    padding-top: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1.5rem;
  }

  .services-modal {
    position: relative;
    max-width: 720px;
    width: 100%;
    background-color: #05060b;
    border-radius: 1.25rem;

    padding-top: 2rem;
    padding-right: 2rem;
    padding-bottom: 2.25rem;
    padding-left: 2rem;

    border-top-width: 1px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;

    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;

    border-top-color: rgba(255, 255, 255, 0.16);
    border-right-color: rgba(255, 255, 255, 0.16);
    border-bottom-color: rgba(255, 255, 255, 0.16);
    border-left-color: rgba(255, 255, 255, 0.16);

    box-shadow: 0px 20px 55px rgba(0, 0, 0, 0.85);
    color: #f5f5f5;
  }

  .services-modal h3 {
    font-size: 1.4rem;
    margin-bottom: 0.75rem;
  }

  .services-modal-full {
    font-size: 0.95rem;
    color: #c1c1d1;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  .services-modal-list {
    list-style-type: disc;
    padding-left: 1.4rem;
    display: grid;
    row-gap: 0.45rem;
    column-gap: 0.45rem;
    font-size: 0.9rem;
    color: #e0e0f0;
  }

  .services-modal-close {
    position: absolute;
    top: 0.85rem;
    right: 0.9rem;
    background-color: transparent;
    border-width: 0;
    color: #aaaaaa;
    font-size: 1rem;
    cursor: pointer;
  }

  .services-modal-close:hover {
    color: #ffffff;
  }

  /* Responsive tweaks */
  @media (max-width: 600px) {
    padding-top: 3rem;
    padding-right: 1.25rem;
    padding-bottom: 3rem;
    padding-left: 1.25rem;

    .services-modal {
      padding-top: 1.75rem;
      padding-right: 1.5rem;
      padding-bottom: 1.85rem;
      padding-left: 1.5rem;
    }
  }
`;
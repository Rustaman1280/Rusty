const { motion } = window['framer-motion'];

// Define card animation for Framer Motion
const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Example: Additional Framer Motion animation can be added here
    motion.div({
        animate: { opacity: 1, scale: 1.1 },
        transition: { duration: 0.3 },
    });
});

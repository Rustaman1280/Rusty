const { motion } = window['framer-motion'];

const cardAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // You can apply animations here as per Framer Motion requirements
    motion.div({
        animate: { scale: 1.2 },
        transition: { duration: 0.5 },
    });
});

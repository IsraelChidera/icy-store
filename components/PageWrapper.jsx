'use client'

import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children, className, ...rest }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={className}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper
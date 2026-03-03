import React from 'react'
import { motion } from 'framer-motion'

const TextGenerateEffect = ({
  words,
  className = '',
  as = 'p',
  stagger = 0.035,
  duration = 0.35,
  baseDelay = 0,
}) => {
  const Tag = as
  const parts = words.split(' ')

  return (
    <Tag className={className}>
      {parts.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, filter: 'blur(8px)', y: 6 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            delay: baseDelay + index * stagger,
            duration,
            ease: 'easeOut',
          }}
          style={{ display: 'inline-block', marginRight: '0.32rem' }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

export default TextGenerateEffect
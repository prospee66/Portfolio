import { useEffect, useRef, useState } from 'react'

const statsData = [
  { end: 10, suffix: '+', label: 'Projects Built'       },
  { end: 8,  suffix: '+', label: 'Technologies'         },
  { end: 3,  suffix: '+', label: 'Years Experience'     },
  { end: 1,  suffix: '',  label: 'Industrial Attachment' },
]

function useCounter(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1500
    const step = Math.ceil(duration / target)
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function StatItem({ stat, active }) {
  const count = useCounter(stat.end, active)
  return (
    <div className="stat-item">
      <div className="stat-number">
        {count}<span className="suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

export default function Stats() {
  const ref    = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="stats-section" ref={ref}>
      <div className="stats-grid">
        {statsData.map(s => (
          <StatItem key={s.label} stat={s} active={active} />
        ))}
      </div>
    </div>
  )
}

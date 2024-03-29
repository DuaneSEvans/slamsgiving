import { useEffect, useState } from "react"
import { DateTime, Duration } from "luxon"
import { SLAMSGIVING_DATE } from "lib/const"

function getTimeUntilSlams(): Duration {
  return SLAMSGIVING_DATE.diff(DateTime.now(), [
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ])
}

export function CountDown() {
  const [timeRemaining, setTimeRemaining] = useState(getTimeUntilSlams())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeUntilSlams())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center lg:gap-6 md:gap-4 font-mono">
      <CountDownBox value={timeRemaining.months} label="months" />
      <CountDownBox value={timeRemaining.days} label="days" />
      <CountDownBox value={timeRemaining.hours} label="hours" />
      <CountDownBox value={timeRemaining.minutes} label="minutes" />
      <CountDownBox value={timeRemaining.seconds} label="seconds" />
    </div>
  )
}

function CountDownBox({
  value,
  label,
}: {
  value: number
  label: string
}): JSX.Element {
  return (
    <div className="flex flex-col lg:p-5 p-2">
      <span className="lg:text-8xl md:text-5xl text-3xl">
        {value < 0 ? "00" : value < 10 ? "0" + value : value}
      </span>
      <span>{label}</span>
    </div>
  )
}

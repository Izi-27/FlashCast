import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export function formatAmount(amount: number, decimals = 2) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
}

export function formatPercentage(value: number, decimals = 2) {
  return `${formatAmount(value, decimals)}%`
}

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
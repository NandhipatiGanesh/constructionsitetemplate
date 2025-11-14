'use client'

import React from 'react'

export interface WhatsAppFloatProps {
  /** WhatsApp phone in international format without + or spaces, e.g. "919876543210" */
  phone: string
  /** Prefilled message (will be URL-encoded) */
  message?: string
  /** Button size in px (width & height) */
  size?: number
  /** small label text shown on desktop */
  label?: string
  /** position offsets from bottom/right in px */
  offsetBottom?: number
  offsetRight?: number
  /** Add extra classes to wrapper */
  className?: string
  /** Whether to open in new tab (default true) */
  newTab?: boolean
  /** Hide on mobile if false */
  showOnMobile?: boolean
}

const defaultMessage = "Hi! I found your listing and would like to know more. Can we chat?"

export default function WhatsAppFloat({
  phone,
  message = defaultMessage,
  size = 56,
  label = 'Chat with us',
  offsetBottom = 24,
  offsetRight = 24,
  className = '',
  newTab = true,
  showOnMobile = true
}: WhatsAppFloatProps) {
  if (!phone) return null // safety

  // create wa.me link with encoded text
  const encodedMessage = encodeURIComponent(message)
  // Use wa.me link format: https://wa.me/<number>?text=<encodedText>
  const waLink = `https://wa.me/${phone}?text=${encodedMessage}`

  const openLink = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (newTab) {
      window.open(waLink, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = waLink
    }
  }

  // Basic accessibility: button with aria-label
  return (
    <div
      className={`fixed z-50 ${className}`}
      style={{
        bottom: offsetBottom,
        right: offsetRight,
        pointerEvents: 'auto'
      }}
    >
      <div
        className={`hidden md:flex items-center gap-3 bg-white/90 backdrop-blur rounded-full shadow-lg px-3 py-2`}
        style={{ height: size, minWidth: 160 }}
      >
        <button
          onClick={openLink}
          aria-label={`Open WhatsApp chat with ${phone}`}
          className="flex items-center gap-3 rounded-full px-3 py-2 hover:scale-[1.03] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          style={{ height: size - 8 }}
        >
          <WhatsAppIcon size={size - 16} />
          <div className="flex flex-col text-left">
            <span className="text-sm font-semibold text-slate-900 leading-none">
              {label}
            </span>
            <span className="text-xs text-slate-600/90">Typically replies within an hour</span>
          </div>
        </button>
      </div>

      {/* Mobile circle button */}
      {showOnMobile && (
        <button
          onClick={openLink}
          aria-label={`Open WhatsApp chat with ${phone}`}
          className="md:hidden flex items-center justify-center rounded-full shadow-lg"
          style={{
            width: size,
            height: size,
            background: '#25D366',
            marginTop: 8
          }}
        >
          <WhatsAppIcon white size={size * 0.55} />
        </button>
      )}
    </div>
  )
}

/** Simple WhatsApp SVG icon */
function WhatsAppIcon({ white = false, size = 24 }: { white?: boolean; size?: number }) {
  const fill = white ? '#ffffff' : '#075E54'
  return (
    <img src='/whatsapp-svgrepo-com.svg' alt='WhatsApp' style={{ width: size, height: size }} />    
  )
}

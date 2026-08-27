import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl

/**
 * PdfDoc — renders PDF pages inline to <canvas> using PDF.js, so a document
 * appears directly on the page (no browser PDF plugin / iframe needed).
 *
 * @param {string} url        Path to the PDF.
 * @param {number} maxPages   How many pages to render (default: all).
 */
export default function PdfDoc({ url, maxPages = Infinity, className = '' }) {
  const containerRef = useRef(null)
  const [status, setStatus] = useState('loading') // loading | done | error

  useEffect(() => {
    let cancelled = false
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''
    setStatus('loading')

    pdfjsLib
      .getDocument({ url })
      .promise.then(async (pdf) => {
        const pages = Math.min(pdf.numPages, maxPages)
        for (let n = 1; n <= pages; n++) {
          if (cancelled) return
          const page = await pdf.getPage(n)
          const viewport = page.getViewport({ scale: 2 })
          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          canvas.className = 'block h-auto w-full'
          if (n > 1) canvas.style.marginTop = '1rem'
          container.appendChild(canvas)
          await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise
        }
        if (!cancelled) setStatus('done')
      })
      .catch((err) => {
        console.error('PdfDoc render error:', err)
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [url, maxPages])

  return (
    <div className={className}>
      <div ref={containerRef} />
      {status === 'loading' && (
        <div className="flex h-40 items-center justify-center text-sm text-navy-light/50">Loading…</div>
      )}
      {status === 'error' && (
        <div className="flex h-40 flex-col items-center justify-center gap-3 text-sm text-navy-light/60">
          <span>Preview unavailable.</span>
          <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-xs">
            Open PDF
          </a>
        </div>
      )}
    </div>
  )
}

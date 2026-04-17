'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { captureAndPersistUTMs, updateCurrentPage } from '@/lib/utm'
import { pushEvent } from '@/lib/gtm'

export function RouteChangeTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    captureAndPersistUTMs()
    updateCurrentPage(pathname)
    pushEvent({
      event: 'page_view',
      page: pathname,
      search: searchParams.toString() || undefined,
    })
  }, [pathname, searchParams])

  return null
}

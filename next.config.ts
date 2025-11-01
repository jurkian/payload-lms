import { NextConfig } from 'next'
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
   poweredByHeader: false,
   turbopack: {
      // ...
   },
   serverExternalPackages: ['@libsql/client', 'libsql', '@payloadcms/db-sqlite'],
}

export default withPayload(nextConfig)

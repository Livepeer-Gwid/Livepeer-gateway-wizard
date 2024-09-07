import React from 'react'
import Layout from '@/components/layout'
import Recent from '@/components/gateways/recent'
import Projects from '@/components/gateways/projects'
import WalletHistory from '@/components/gateways/walletHistory'

export default function Gateways() {
  return (
     <Layout>
         <div className='w-full h-full flex flex-col '>
              <Recent />
              <Projects />
              <WalletHistory />
          </div>
     </Layout>
   )
}

import React, { useState } from 'react'
import TabContent from '../AllTabs/TabContent'
import TabNavItem from '../AllTabs/TabNavItem'
import {
  BsBriefcaseFill,
  BsPersonCircle,
  BsLink,
  BsEnvelope,
} from 'react-icons/bs'
import './Tabs.scss'
import About from './Tabs/About'
import History from './Tabs/History'
import Links from './Tabs/Links'
import Contact from './Tabs/Contact'

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <div className='Tabs'>
      {/* Tab nav */}
      <ul className='Tabs__nav'>
        <TabNavItem
          className='Tabs__tab'
          title={<BsPersonCircle />}
          id='tab1'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          className='Tabs__tab'
          title={<BsBriefcaseFill />}
          id='tab2'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          className='Tabs__tab'
          title={<BsLink />}
          id='tab3'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          className='Tabs__tab'
          title={<BsEnvelope />}
          id='tab4'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
      <div className='Tabs__outlet'>
        <TabContent id='tab1' activeTab={activeTab}>
          <About />
        </TabContent>
        <TabContent id='tab2' activeTab={activeTab}>
          <History />
        </TabContent>
        <TabContent id='tab3' activeTab={activeTab}>
          <Links />
        </TabContent>
        <TabContent id='tab4' activeTab={activeTab}>
          <Contact />
        </TabContent>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import {TOTAL_SCREENS, GET_SCREN_INDEX} from '../../../utilities/commonUtils'
import ScrollService from '../../../utilities/ScrollService'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

export default function Header() {

  const [selectedScreen, setSelectedScreen] = useState(0)
  const [showHeaderOptions, setshowHeaderOptions] = useState(false)


  const updateCurrentScreen = (CurrentScreen) => {
    if(CurrentScreen || !CurrentScreen.screenInView)
    return;
    let screenIndex = GET_SCREN_INDEX(CurrentScreen.screenInView)
    if (screenIndex <0)
    return
  }
  let CurrentScreenSubscription = ScrollService.CurrentScreenBroadCaster.subscribe(updateCurrentScreen)

  return (
    <div>
      
    </div>
  )
}

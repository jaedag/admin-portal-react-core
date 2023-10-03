import { ChurchLevel } from '@jaedag/admin-portal-types'
import React from 'react'
import {
  FellowshipIcon,
  OversightIcon,
  BacentaIcon,
  CampusIcon,
  ConstituencyIcon,
  CouncilIcon,
  CreativeArtsIcon,
  HubIcon,
  MinistryIcon,
  StreamIcon,
} from '.'
import { BsPeopleFill } from 'react-icons/bs'

const ChurchLevelIcon = ({ level }: { level: ChurchLevel }) => {
  switch (level) {
    case 'Oversight':
      return <OversightIcon />
    case 'Campus':
      return <CampusIcon />
    case 'Stream':
      return <StreamIcon />
    case 'Constituency':
      return <ConstituencyIcon />
    case 'Council':
      return <CouncilIcon />
    case 'Bacenta':
      return <BacentaIcon />
    case 'Fellowship':
      return <FellowshipIcon />

    case 'CreativeArts':
      return <CreativeArtsIcon />
    case 'Ministry':
      return <MinistryIcon />
    case 'Hub':
      return <HubIcon />

    default:
      return <BsPeopleFill />
  }
}

export default ChurchLevelIcon

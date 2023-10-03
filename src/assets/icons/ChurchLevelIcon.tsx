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
import { IconBaseProps } from 'react-icons'

const ChurchLevelIcon = ({
  level,
  ...rest
}: { level: ChurchLevel } & IconBaseProps) => {
  switch (level) {
    case 'Oversight':
      return <OversightIcon {...rest} />
    case 'Campus':
      return <CampusIcon {...rest} />
    case 'Stream':
      return <StreamIcon {...rest} />
    case 'Constituency':
      return <ConstituencyIcon {...rest} />
    case 'Council':
      return <CouncilIcon {...rest} />
    case 'Bacenta':
      return <BacentaIcon {...rest} />
    case 'Fellowship':
      return <FellowshipIcon {...rest} />

    case 'CreativeArts':
      return <CreativeArtsIcon {...rest} />
    case 'Ministry':
      return <MinistryIcon {...rest} />
    case 'Hub':
      return <HubIcon {...rest} />

    default:
      return <BsPeopleFill {...rest} />
  }
}

export default ChurchLevelIcon

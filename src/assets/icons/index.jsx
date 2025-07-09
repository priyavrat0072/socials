import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../../constants/theme'
import HomeIcon from './HomeIcon'
import ArrowLeftIcon from './ArrowLeftIcon'
import CallIcon from './CallIcon'
import CameraIcon from './CameraIcon'
import CommentIcon from './CommentIcon'
import MailIcon from './MailIcon'
import LockIcon from './LockIcon'
import UserIcon from './UserIcon'
import HeartIcon from './HeartIcon'
import PlusIcon from './PlusIcon'


const icons = {
    home: HomeIcon,
    arrowLeft : ArrowLeftIcon,
    call : CallIcon,
    camera : CameraIcon,
    comment : CommentIcon,
    mail : MailIcon,
    lock : LockIcon,
    user : UserIcon,
    heart : HeartIcon,
    plus : PlusIcon
}


const Icon = ({name, ...props}) => {
    const IconComponent = icons[name]
  return (
    <IconComponent
        size = {props.size || 24}
        color = {props.color || theme.colors.rose}
    />
  )
}

export default Icon

const styles = StyleSheet.create({
  
})
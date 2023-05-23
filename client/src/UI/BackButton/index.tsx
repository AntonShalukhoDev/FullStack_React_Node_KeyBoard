import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BACK_SVG } from '../../assets/iconsUrls';
import styles from "./BackButton.module.css"

type BackButtonType = {
  handleSideEffects?: () => void
}

export const BackButton = ({
  handleSideEffects
}: BackButtonType) => {
  const navigate = useNavigate()

  const handleClick = () => {
    handleSideEffects && handleSideEffects()
    navigate(-1)
  }

  return (
    <img 
      src={BACK_SVG} 
      alt="go back" 
      className={styles.backMark} 
      onClick={handleClick}
    />
  )
}

import React from 'react'

const Card = ({card, onClick}) => {
  return (
    <div>
      <div className='card' onClick={() => onClick(card)}>
        <div className='card-front'>?</div>
        <div className='card-back'>
            {card.value}
        </div>
      </div>
    </div>
  )
}

export default Card

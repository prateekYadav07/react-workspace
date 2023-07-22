import './card-list.styles.css'
import { Card } from '../card/Card.components'

export const CardList = props => {
    // props.children is innerHTML inside this component
    return <>
        <div className='card-list'>
            {props.monstersList.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    </>
}
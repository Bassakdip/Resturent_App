import React from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DummyMeals = [
    {
        id: 'm1',
        name: 'Mutton Tikiya',
        describtion: 'It is a flavorful Indian street food, comprising spiced mutton(6 pc)',
        price: 177.75
    },
    {
        id: 'm2',
        name: 'Chicken Biryani',
        describtion: 'Chicken (1 Pc) + Aloo (1 Pc) + Rice In 1000 Ml Container',
        price: 235.99
    },
    {
        id: 'm3',
        name: 'Kashmiri Pulao',
        describtion: 'A traditional kashmiri dish, this mildly spicy and flavour-loaded rice dish',
        price: 169.69
    },
    {
        id: 'm4',
        name: 'Butter Chicken ',
        describtion: 'One of the most popular Punjabi style chicken dishes in the world ,',
        price: 275.89
    }
];

const AvailableMeals = () => {
    const mealsList = DummyMeals.map((meal) => <MealItem key={meal.id} name={meal.name} describtion={meal.describtion} price={meal.price}/>);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
